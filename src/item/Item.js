const { removeFormatting, getNestedObjects } = require('../util');

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
  texture: 'tag.SkullOwner.Properties.textures',
};

class Item {
  constructor(nbt, active = true) {
    this.active = active;
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
    if (this.attributes.texture) {
      this.attributes.texture = JSON.parse(Buffer.from(this.attributes.texture[0].Value, 'base64').toString()).textures.SKIN.url.split('/').pop();
    }
    if (this.attributes.hot_potato_count) {
      this.attributes.anvil_uses -= this.attributes.hot_potato_count;
    }
    if (this.attributes.timestamp) {
      // todo
    }
  }

  parseStats() {
    this.lore.forEach((line) => {
      const split = removeFormatting(line).split(':');

      if (split.length < 2) return;
      const statType = split[0];
      const statValue = parseFloat(split[1].trim().replace(/,/g, ''));
      // eslint-disable-next-line default-case
      switch (statType) {
        case 'Damage':
          this.stats.damage = statValue;
          break;
        case 'Health':
          this.stats.health = statValue;
          break;
        case 'Defense':
          this.stats.defense = statValue;
          break;
        case 'Strength':
          this.stats.strength = statValue;
          break;
        case 'Speed':
          this.stats.speed = statValue;
          break;
        case 'Crit Chance':
          this.stats.crit_chance = statValue;
          break;
        case 'Crit Damage':
          this.stats.crit_damage = statValue;
          break;
        case 'Bonus Attack Speed':
          this.stats.bonus_attack_speed = statValue;
          break;
        case 'Intelligence':
          this.stats.intelligence = statValue;
          break;
        case 'Sea Creature Chance':
          this.stats.sea_creature_chance = statValue;
          break;
        case 'Magic Find':
          this.stats.magic_find = statValue;
          break;
        case 'Pet Luck':
          this.stats.pet_luck = statValue;
          break;
      }
    });
  }

  getSkullTexture() {
    return `http://textures.minecraft.net/texture/${this.texture}`;
  }
}

module.exports = Item;
