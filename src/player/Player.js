/* eslint-disable camelcase,no-param-reassign */
const util = require('../util');
const constants = require('../constants');
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
  if (data === '') return [];
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
      this.attributes = { ...baseStats };

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
        boss_kills_tier_0 = 0,
        boss_kills_tier_1 = 0,
        boss_kills_tier_2 = 0,
        boss_kills_tier_3 = 0,
      }, name) => {
        const {
          xpForNext,
        } = util.getSlayerLevel({ claimedLevels: Object.keys(claimed_levels), xp }, name);
        return {
          claimed_levels: Object.keys(claimed_levels).length,
          xp,
          xp_for_next: xpForNext - xp,
          kills_tier: {
            1: boss_kills_tier_0,
            2: boss_kills_tier_1,
            3: boss_kills_tier_2,
            4: boss_kills_tier_3,
          },
        };
      };
      const collection_tiers = getUnlockedTier(unlocked_coll_tiers);
      const skills = getSkills(/^experience_skill_(?!runecrafting)/);
      skills.runecrafting = util.getLevelByXp(rest.experience_skill_runecrafting, true);

      this.last_save = last_save;
      this.first_join = first_join;
      this.coin_purse = Math.round(coin_purse);
      this.fairy_souls_collected = fairy_souls_collected;
      this.fairy_souls = fairy_souls;
      this.fairy_exchanges = fairy_exchanges;
      this.pets = pets;
      this.skills = skills;
      this.collection = collection;
      this.collection_tiers = collection_tiers;
      this.collections_unlocked = Object.keys(collection_tiers).length;
      this.minions = getUnlockedTier(crafted_generators);
      this.slayer = {
        zombie: getSlayer(slayer_bosses.zombie || {}, 'zombie'),
        spider: getSlayer(slayer_bosses.spider || {}, 'spider'),
        wolf: getSlayer(slayer_bosses.wolf || {}, 'wolf'),
      };

      this.bonuses = this.getBonuses();
      this.applyBonuses();
      return this;
    })();
  }

  getSkillBonus(skill) {
    const bonus = { ...constants.statTemplate };
    const skillStats = constants.bonusStats[`${skill}_skill`];
    const { level, maxLevel } = this.skills[skill];
    const steps = Object.keys(skillStats).sort((a, b) => a - b).map((a) => Number(a));

    for (let x = 1; x <= maxLevel; x += 1) {
      if (level < x) break;

      const skillStep = steps.slice().reverse().find((a) => a <= x);
      const skillBonus = skillStats[skillStep];
      Object.keys(skillBonus).forEach((type) => {
        bonus[type] += skillBonus[type];
      });
    }
    return util.removeZeroes(bonus);
  }

  getFairyBonus() {
    const bonus = {
      speed: 0, strength: 0, defense: 0, health: 0,
    };
    bonus.speed = Math.floor(this.fairy_exchanges / 10);

    for (let i = 0; i < this.fairy_exchanges; i += 1) {
      bonus.strength += (i + 1) % 5 === 0 ? 2 : 1;
      bonus.defense += (i + 1) % 5 === 0 ? 2 : 1;
      bonus.health += 3 + Math.floor(i / 2);
    }
    return bonus;
  }

  getCakeBonus() {
    const bonus = { health: 0 };
    const cakeBag = this.active_accessories.find((item) => item.getId() === 'NEW_YEAR_CAKE_BAG') || {};
    const cakes = (cakeBag.inventory || []).filter((item) => item.getId() === 'NEW_YEAR_CAKE');
    // Get unique years
    bonus.health += [...new Set(cakes.map((i) => i.attributes.cake_year))].length;
    return bonus;
  }

  getItemBonuses(name) {
    const items = this[name];
    const bonus = { ...constants.statTemplate };
    items.forEach((item) => {
      Object.keys(item.stats).forEach((stat) => {
        bonus[stat] += item.stats[stat];
      });
    });
    return util.removeZeroes(bonus);
  }

  getSlayerBonus(slayer) {
    const bonus = { ...constants.statTemplate };
    const slayerBonuses = constants.bonusStats[`${slayer}_slayer`];
    for (let level = this.slayer[slayer].claimed_levels; level > 0; level -= 1) {
      if (level in slayerBonuses) {
        Object.keys(slayerBonuses[level]).forEach((stat) => {
          bonus[stat] += slayerBonuses[level][stat];
        });
      }
    }
    return util.removeZeroes(bonus);
  }

  isArmorSet(startsWith, requiredPieces = 4) {
    return this.armor.filter((a) => a.name !== '' && a.getId().startsWith(startsWith))
      .length === requiredPieces;
  }

  // Returns accessories that provide bonuses
  getActiveAccessories() {
    let accessories = [
      ...this.talisman_bag,
      ...this.inventory,
      ...this.armor,
    ].filter((item) => item.type === 'accessory');

    const maxCampFireTier = Math.max(...accessories.filter((i) => i.getId().startsWith('CAMPFIRE_TALISMAN_'))
      .map((a) => a.getId().split('_').pop()));
    const maxRingTier = Math.max(...accessories.filter((i) => i.getId().startsWith('WEDDING_RING_'))
      .map((a) => a.getId().split('_').pop()));
    // Don't count lower tier talismans
    accessories.forEach((item) => {
      const { id } = item.attributes;
      if (id.startsWith('CAMPFIRE_TALISMAN_')) {
        const tier = parseInt(id.split('_').pop(), 10);
        if (tier < maxCampFireTier) item.active = false;
      }
      if (id.startsWith('WEDDING_RING_')) {
        const tier = parseInt(id.split('_').pop(), 10);
        if (tier < maxRingTier) item.active = false;
      }
      // item.active = true;
    });
    // Don't count duplicated talismans
    accessories = [...new Map(accessories.map((item) => [item.attributes.id, item])).values()];
    this.active_accessories = accessories.filter((item) => item.active);
  }

  getBonuses() {
    const bonuses = [];
    this.getActiveAccessories();
    // New year cake bag
    bonuses.push({
      type: 'NEW_YEAR_CAKEBAG',
      bonus: this.getCakeBonus(),
    });
    // Fairy souls
    bonuses.push({
      type: 'FAIRY_SOULS',
      bonus: this.getFairyBonus(),
    });
    // Slayers
    Object.keys(this.slayer).forEach((slayer) => {
      bonuses.push({
        type: `SLAYER_BONUS_${slayer.toUpperCase()}`,
        bonus: this.getSlayerBonus(slayer),
      });
    });
    // Pet rewards
    // Melody
    if (this.active_accessories.some((i) => i.getId() === 'MELODY_HAIR')) {
      bonuses.push({
        type: 'MELODY',
        bonus: { intelligence: 26 },
      });
    }
    // Skills
    const { skills } = this;
    Object.keys(skills).forEach((skill) => {
      if (!['runecrafting', 'carpentry'].includes(skill)) {
        bonuses.push({
          type: `SKILL_BONUS_${skill.toUpperCase()}`,
          bonus: this.getSkillBonus(skill),
        });
      }
    });
    // Accessories
    bonuses.push({
      type: 'ACCESSORIES',
      bonus: this.getItemBonuses('active_accessories'),
    });
    // Armor
    bonuses.push({
      type: 'ARMOR',
      bonus: this.getItemBonuses('armor'),
    });
    // Superior Dragon Armor bonus
    if (this.isArmorSet('SUPERIOR_DRAGON_')) {
      const superiorBonus = { ...constants.statTemplate };
      Object.keys(superiorBonus).forEach((stat) => {
        superiorBonus[stat] = 1.05;
      });
      bonuses.push({
        type: 'SUPERIOR_BLOOD',
        operation: 'multiply',
        bonus: superiorBonus,
      });
    }
    // Active weapon?
    // Pet
    return bonuses;
  }

  applyBonuses() {
    const additions = [];
    const multiplications = [];
    this.bonuses.forEach((k) => {
      const operation = k.operation || 'add';
      if (operation === 'add') {
        additions.push(k);
      } else {
        multiplications.push(k);
      }
    });
    additions.forEach((element) => {
      Object.keys(element.bonus).forEach((key) => {
        // console.log(key);
        this.attributes[key] += element.bonus[key];
      });
    });
    multiplications.forEach((element) => {
      Object.keys(element.bonus).forEach((key) => {
        this.attributes[key] *= element.bonus[key];
      });
    });
    if (this.isArmorSet('CHEAP_TUXEDO_', 3)) {
      this.attributes.health = 75;
    }
    if (this.isArmorSet('FANCY_TUXEDO_', 3)) {
      this.attributes.health = 150;
    }
    if (this.isArmorSet('ELEGANT_TUXEDO_', 3)) {
      this.attributes.health = 250;
    }
  }

  getEHP() {
    if (this.attributes.defense <= 0) return this.attributes.health;
    return Math.round(this.attributes.health * (1 + this.attributes.defense / 100));
  }
}

module.exports = Player;
