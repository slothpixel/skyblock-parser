/* eslint-disable camelcase */
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
  const { i } = await util.decodeData(Buffer.from(data, 'base64'));
  return Promise.all(i.map(async (item) => new Item(item, active)));
}

// Process the stats object
function processStats({
  kills = 0,
  deaths = 0,
  ender_crystals_destroyed = 0,
  highest_critical_damage = 0,
  end_race_best_time = null,
  chicken_race_best_time_2 = null,
  gifts_given = 0,
  gifts_received = 0,
  most_winter_snowballs_hit = 0,
  most_winter_damage_dealt = 0,
  most_winter_magma_damage_dealt = 0,
  most_winter_cannonballs_hit = 0,
  items_fished = 0,
  items_fished_normal = 0,
  items_fished_treasure = 0,
  items_fished_large_treasure = 0,
  auctions_completed = 0,
  auctions_bids = 0,
  auctions_highest_bid = 0,
  auctions_won = 0,
  auctions_created = 0,
  auctions_no_bids = 0,
  auctions_fees = 0,
  auctions_gold_earned = 0,
  auctions_gold_spent = 0,
  ...rest
}) {
  const getStats = (regexp) => util.pickKeys(rest, {
    regexp,
    keyMap: (key) => key.replace(regexp, ''),
  });
  const auctions = {
    created: auctions_created,
    // Auctions that got bid on
    completed: auctions_completed,
    no_bids: auctions_no_bids,
    won: auctions_won,
    bids: auctions_bids,
    highest_bid: auctions_highest_bid,
    total_fees: auctions_fees,
    gold_earned: auctions_gold_earned,
    gold_spent: auctions_gold_spent,
    sold: getStats(/^auctions_sold_/),
    bought: getStats(/^auctions_bought_/),
  };
  return {
    total_kills: kills,
    total_deaths: deaths,
    kills: getStats(/^kills_/),
    deaths: getStats(/^deaths_/),
    highest_critical_damage: Math.round(highest_critical_damage),
    ender_crystals_destroyed,
    end_race_best_time: end_race_best_time ? end_race_best_time / 1000 : null,
    chicken_race_best_time: chicken_race_best_time_2 ? chicken_race_best_time_2 / 1000 : null,
    gifts_given,
    gifts_received,
    items_fished: {
      total: items_fished,
      normal: items_fished_normal,
      treasure: items_fished_treasure,
      large_treasure: items_fished_large_treasure,
    },
    auctions,
    winter_records: {
      snowballs_hit: most_winter_snowballs_hit,
      damage: most_winter_damage_dealt,
      magma_cube_damage: most_winter_magma_damage_dealt,
      cannonballs_hit: most_winter_cannonballs_hit,
    },
  };
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

      this.stats = processStats(stats);

      this.inventory = await getInventory(inv_contents, true);
      this.armor = await getInventory(inv_armor, true);
      this.talisman_bag = await getInventory(talisman_bag, true);
      this.fishing_bag = await getInventory(fishing_bag);
      this.potion_bag = await getInventory(potion_bag);
      this.quiver = await getInventory(quiver);
      this.ender_chest = await getInventory(ender_chest_contents);
      this.candy_bag = await getInventory(candy_inventory_contents);
      this.wardrobe = await getInventory(wardrobe_contents);

      const getUnlockedTier = (array) => {
        const o = {};
        array.forEach((gen) => {
          const regex = /_(-*\d+)$/;
          const name = gen.replace(regex, '');
          const tier = Number((regex.exec(gen) || [])[1] || -1);
          if (o[name] < tier || !(name in o)) {
            o[name] = tier;
          }
        });
        return o;
      };
      const getSkills = (regexp) => util.pickKeys(rest, {
        regexp,
        keyMap: (key) => key.replace(regexp, ''),
        valueMap: (value) => util.getLevelByXp(value),
      });
      const getSlayer = ({
        claimed_levels = {},
        xp = 0,
        boss_kills_tier_0,
        boss_kills_tier_1,
        boss_kills_tier_2,
        boss_kills_tier_3,
      }) => ({
        claimed_levels: Object.keys(claimed_levels).length,
        xp,
        kills_tier: {
          1: boss_kills_tier_0,
          2: boss_kills_tier_1,
          3: boss_kills_tier_2,
          4: boss_kills_tier_3,
        },
      });
      const collection_tiers = getUnlockedTier(unlocked_coll_tiers);
      const skills = getSkills(/^experience_skill_(?!runecrafting)/);
      skills.runecrafting = util.getLevelByXp(rest.experience_skill_runecrafting, true);

      return this;
    })();
  }

  getEHP() {
    if (this.stats.defense <= 0) return this.stats.health;
    return Math.round(this.stats.health * (1 + this.stats.defense / 100));
  }
}

module.exports = Player;
