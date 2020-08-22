/* eslint-disable camelcase */
const { removeFormatting, decodeData, getNestedObjects } = require('../util');

const rarityMap = {
  f: 'common',
  a: 'uncommon',
  9: 'rare',
  5: 'epic',
  6: 'legendary',
  d: 'mythic',
  c: 'special',
};

const itemSchema = {
  item_id: 'id',
  count: 'Count',
  name: 'tag.display.Name',
  damage: 'Damage',
  lore: 'tag.display.Lore',
};

const attributeSchema = {
  modifier: 'tag.ExtraAttributes.modifier',
  enchantments: 'tag.ExtraAttributes.enchantments',
  anvil_uses: 'tag.ExtraAttributes.anvil_uses',
  hot_potato_count: 'tag.ExtraAttributes.hot_potato_count',
  origin: 'tag.ExtraAttributes.originTag',
  id: 'tag.ExtraAttributes.id',
  uuid: 'tag.ExtraAttributes.uuid',
  timestamp: 'tag.ExtraAttributes.timestamp',
  color: 'tag.ExtraAttribute.color',
  rarity_upgrades: 'tag.ExtraAttributes.rarity_upgrades',
  baseStatBoostPercentage: 'tag.ExtraAttributes.baseStatBoostPercentage',
  dungeon_floor: 'tag.ExtraAttributes.item_tier',
  cake_year: 'tag.ExtraAttributes.new_years_cake',
  texture: 'tag.SkullOwner.Properties.textures',
};

/**
* Represents a SkyBlock item
 */
class Item {
  /**
  * @param {Object} nbt raw simplified NBT data
  * @param {Boolean} active Item state, indicating whether item provides bonuses
  * @type {Promise}
   */
  constructor(nbt, active = true) {
    return (async () => {
      if (Object.entries(nbt).length === 0) return this;
      this.active = active;
      this.name = '';
      this.rarity = null;
      this.type = null;
      this.stats = {};
      this.damage = 0;
      this.lore = [];
      this.attributes = {};
      // Extract basic fields from NBT
      Object.keys(itemSchema).forEach((key) => {
        const value = getNestedObjects(nbt, itemSchema[key]);
        if (value) {
          this[key] = value;
        }
      });
      // Extract attributes from NBT
      Object.keys(attributeSchema).forEach((key) => {
        const value = getNestedObjects(nbt, attributeSchema[key]);
        if (value) {
          this.attributes[key] = value;
        }
      });
      const { hot_potato_count, timestamp } = this.attributes;
      let { texture } = this.attributes;
      if (texture) {
        texture = null;
        try {
          texture = JSON.parse(Buffer.from(this.attributes.texture[0].Value, 'base64').toString()).textures.SKIN.url.split('/').pop();
        } catch (e) {
          // do nothing
        }
        this.attributes.texture = texture;
      }
      if (hot_potato_count) {
        this.attributes.anvil_uses -= hot_potato_count;
      }
      this.attributes.timestamp = Date.parse(timestamp) || null;
      const { name, lore } = this;
      // Backpack data
      if (name.endsWith('Backpack') || this.getId() === 'NEW_YEAR_CAKE_BAG') {
        const extraAttributes = getNestedObjects(nbt, 'tag.ExtraAttributes');
        const dataKey = Object.keys(extraAttributes).find((key) => key.endsWith('backpack_data')
          || key === 'new_year_cake_bag_data');
        const backpackData = extraAttributes[dataKey];
        if (Array.isArray(backpackData)) {
          const { i } = await decodeData(Buffer.from(backpackData));
          this.inventory = await Promise.all(i.map(async (item) => new Item(item)));
        }
      }
      if (lore.length > 0) {
        const loreRaw = lore[lore.length - 1];
        const rarityType = removeFormatting(loreRaw.replace(/§ka(§r )?/g, '')).split(' ');
        // By using rarity color we can bypass localization restrictions
        this.rarity = rarityMap[loreRaw.charAt(1)];
        if (this.rarity === 'special' && rarityType[0] === 'VERY') {
          this.rarity = 'very_special';
          rarityType.shift();
        }
        rarityType.shift();
        if (rarityType.length > 0) {
          this.type = rarityType.join(' ').toLowerCase();
        }
      }

      if (this.type === 'hatccessory') this.type = 'accessory';
      this.getStats();
      return this;
    })();
  }

  /**
   * Return stats modified by the item
   * @type {object}
   */
  parseStats() {
    const bonus = {};
    const id = this.getId();
    this.lore.forEach((line) => {
      const rawLine = removeFormatting(line);
      const split = rawLine.split(':');

      if (split.length < 2) return;
      const statType = split[0];
      const statValue = parseFloat(split[1].trim().replace(/,/g, ''));
      // eslint-disable-next-line default-case
      switch (statType) {
        case 'Damage':
          bonus.damage = statValue;
          break;
        case 'Health':
          bonus.health = statValue;
          break;
        case 'Defense':
          bonus.defense = statValue;
          break;
        case 'Strength':
          bonus.strength = statValue;
          break;
        case 'Speed':
          bonus.speed = statValue;
          break;
        case 'Crit Chance':
          bonus.crit_chance = statValue;
          break;
        case 'Crit Damage':
          bonus.crit_damage = statValue;
          break;
        case 'Bonus Attack Speed':
          bonus.bonus_attack_speed = statValue;
          break;
        case 'Intelligence':
          bonus.intelligence = statValue;
          break;
        case 'Sea Creature Chance':
          bonus.sea_creature_chance = statValue;
          break;
        case 'Magic Find':
          bonus.magic_find = statValue;
          break;
        case 'Pet Luck':
          bonus.pet_luck = statValue;
          break;
      }
      // Party Crab Hat
      if (id === 'PARTY_HAT_CRAB' && rawLine.startsWith('Your bonus: ')) {
        bonus.intelligence = (bonus.intelligence || 0) + parseInt(rawLine.split(' ')[2].substring(1), 10);
      }
    });
    // Apply Speed Talisman speed bonuses
    if (id === 'SPEED_TALISMAN') bonus.speed = (bonus.speed || 0) + 1;
    if (id === 'SPEED_RING') bonus.speed = (bonus.speed || 0) + 3;
    if (id === 'SPEED_ARTIFACT') bonus.speed = (bonus.speed || 0) + 5;
    return bonus;
  }

  getStats() {
    if (!this.active) return;
    this.stats = this.parseStats();
  }

  getId() {
    return (this.attributes || {}).id || null;
  }

  getSkullTexture() {
    return `http://textures.minecraft.net/texture/${this.texture}`;
  }

  /**
   * Remove unwanted properties
   * @param properties {Array}
   */
  deleteProperties(properties = []) {
    properties.forEach((property) => {
      try {
        delete this[property];
      } catch (e) {
        // do nothing
      }
    });
  }
}

module.exports = Item;
