const util = require('../util');
const Item = require('../item/Item');

const baseStats = {
  damage: 0,
  health: 100,
  defense: 0,
  effective_health: 100,
  strength: 0,
  damage_increase: 0,
  speed: 100,
  crit_chance: 30,
  crit_damage: 50,
  bonus_attack_speed: 0,
  intelligence: 0,
  sea_creature_chance: 20,
  magic_find: 10,
  pet_luck: 0,
};

async function getInventory({ data = '' }, active = false) {
  if (data === '') return null;
  const { i } = await util.decodeData(data);
  return i.map((item) => new Item(item, active));
}

/**
 * @param {String} uuid Player UUID
 * @param {Object} data Profile member object
 * @type {Promise}
 */
class Player {
  constructor(uuid, data) {
    return (async () => {
      this.uuid = uuid;
      this.stats = baseStats;

      const {
        last_save = null,
        first_join = null,
        pets = [],
        stats = {},
        coin_purse = 0,
        crafted_generators = [],
        slayer_bosses = {},
        unlocked_coll_tiers = [],
        collection = {},
        // Inventories
        inv_armor = {},
        inv_contents = {},
        fishing_bag = {},
        potion_bag = {},
        talisman_bag = {},
        quiver = {},
        ender_chest_contents = {},
        candy_inventory_contents = {},
        wardrobe_contents = {},
        // Fairy souls
        fairy_souls_collected = 0,
        fairy_souls = 0,
        fairy_exchanges = 0,
        ...rest
      } = data;

      // Insert rest of the fields as in the API
      Object.keys(rest).forEach((key) => {
        this[key] = rest[key];
      });

      this.inventory = await getInventory(inv_contents, true);
      this.armor = await getInventory(inv_armor, true);
      this.talisman_bag = await getInventory(talisman_bag, true);
      this.fishing_bag = await getInventory(fishing_bag);
      this.potion_bag = await getInventory(potion_bag);
      this.quiver = await getInventory(quiver);
      this.ender_chest = await getInventory(ender_chest_contents);
      this.candy_bag = await getInventory(candy_inventory_contents);
      this.wardrobe = await getInventory(wardrobe_contents);

      return this;
    })();
  }

  getEHP() {
    if (this.stats.defense <= 0) return this.stats.health;
    return Math.round(this.stats.health * (1 + this.stats.defense / 100));
  }
}

module.exports = Player;
