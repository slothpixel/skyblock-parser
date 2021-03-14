/* eslint-disable camelcase */
const {
  statTemplate, pets, petData, petItems, petSkins, rarityColors,
} = require('../constants');
const util = require('../util');

const {
  capitalizeFirstLetter, titleCase, removeZeroes, modifyStats, round, getPetLevel,
} = util;

const petRarity = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary',
  'mythic',
];

class Pet {
  #activeAbilities = [];

  constructor({
    uuid, type, tier: rarity, exp, level: simulatedLevel, active, heldItem = null, skin, candyUsed,
  }) {
    if (typeof type !== 'string') return this;
    this.uuid = uuid;
    this.name = titleCase(type);
    this.rarity = rarity;
    this.exp = exp;
    this.level = 1;
    this.active = active;
    this.held_item = heldItem;
    this.candy_used = candyUsed;
    this.texture = null;
    this.skin = skin;
    this.lore = [];
    this.stats = { ...statTemplate };

    const rarityL = rarity.toLowerCase();
    const { level, progress } = getPetLevel(rarityL, exp);
    this.level = simulatedLevel || level;

    const pet = pets[type] || {};
    let rarityTier = petRarity.indexOf(rarityL) || 4;

    const { head = '', type: petType = type } = petData[type] || {};
    this.texture = head || 'bc8ea1f51f253ff5142ca11ae45193a4ad8c3ab5e9c6eec8ba7a4fcb7bac40';

    let nameString = `[Lvl ${level}] §${rarityColors[rarityL]}${this.name || type}`;
    let typeString = `§8${capitalizeFirstLetter(petType)} `;
    typeString += [
      'HORSE',
      'SKELETON_HORSE',
      'PIG',
      'ROCK',
    ].indexOf(type) === -1 ? 'Pet' : 'Mount';

    if (skin && skin in (petSkins[type] || {})) {
      nameString += ' ✦';
      const petSkin = petSkins[type][skin];
      this.texture = petSkin.head;
      this.skin = titleCase(skin);
      typeString += `, ${petSkin.name} Skin`;
    }
    this.lore.push(nameString, typeString, '');

    // Pet's own lore
    if ('lore' in pet) {
      this.lore.push(pet.lore, '');
    }

    let abilityLore = [];
    const heldItemLore = [];

    if ((heldItem === 'PET_ITEM_TIER_BOOST'
      || heldItem === 'PET_ITEM_VAMPIRE_FANGS'
      || heldItem === 'PET_ITEM_TOY_JERRY') && rarityTier < 4) {
      rarityTier += 1;
    }

    // Load stats
    this.stats = Object.assign(this.stats, pet.baseStats);

    const { statModifiers = {} } = pet;
    Object.keys(statModifiers).forEach((stat) => {
      this.stats[stat] += statModifiers[stat] * level;
    });
    this.stats = removeZeroes(this.stats);

    function getAbilityModifier(modifier) {
      return (typeof modifier === 'number')
        ? modifier
        : modifier[rarityTier];
    }

    // Load pet abilities
    const { abilities } = pet;
    for (let x = 0; x < rarityTier; x += 1) {
      if (abilities && rarityTier in abilities) {
        // eslint-disable-next-line no-loop-func
        abilities[x].forEach((tier) => {
          const stats = {};
          let { desc, name } = tier;
          Object.keys(pet.abilityModifiers[x]).forEach((stat) => {
            // x = index of ability
            // stat = combo_1
            const modifier = getAbilityModifier(pet.abilityModifiers[x][stat]);
            let abilityValue;
            if ('descFn' in tier && stat === 'ability') {
              abilityValue = tier.descFn(util, this.level, modifier, rarity, stat);
            } else {
              abilityValue = (typeof modifier === 'number')
                ? round(this.level * getAbilityModifier(modifier))
                : modifier;
            }
            if (stat in statTemplate) {
              stats[stat] = abilityValue;
            }
            desc = desc.join('\n').replace(`%${stat}%`, abilityValue).split('\n');
          });
          this.#activeAbilities.push({ ...tier, stats });
          abilityLore = abilityLore.concat([`§6${name}`, ...desc, '']);
        });
      }
    }

    if (heldItem !== null) {
      const item = petItems[heldItem];
      // Item stats
      if ('stats' in item) {
        this.stats = modifyStats(item.stats, this.stats);
      }
      if ('multStats' in item) {
        this.stats = modifyStats(item.multStats, this.stats, '*');
      }
      if ('multAll' in item) {
        Object.keys(this.stats).forEach((stat) => {
          this.stats[stat] *= item.multAll;
        });
      }
      const { description = '', name = heldItem, rarity: heldRarity = 'common' } = item;
      const petItemRarityColor = rarityColors[heldRarity.toLowerCase()];
      heldItemLore.push(`§4Held Item: §${petItemRarityColor}${name}`, description);
    }

    // Generate stat lore
    Object.keys(this.stats).forEach((stat) => {
      const valueFloored = Math.floor(this.stats[stat]);
      let statString = (valueFloored > 0) ? `§a+${valueFloored}` : `§a${valueFloored}`;
      if (['ability_damage', 'crit_chance', 'crit_damage', 'sea_creature_chance'].includes(stat)) {
        statString += '%';
      }
      this.lore.push(`§7${titleCase(stat)}: ${statString}`);
    });

    this.lore.push('', ...abilityLore);
    if (heldItem !== null) {
      this.lore.push(...heldItemLore, '');
    }

    if (candyUsed > 0) {
      this.lore.push(`§a(${candyUsed}/10) Pet Candy Used`, '');
    }

    if (level === 100) {
      this.lore.push('§bMAX LEVEL');
    } else {
      let levelBar = '';

      for (let i = 0; i < 20; i += 1) {
        if (progress > i / 20) levelBar += '§2';
        else levelBar += '§f';
        levelBar += '-';
      }

      this.lore.push(`Progress to Level §7${level + 1}: §e${(progress * 100).toFixed(1)}%`, levelBar);
    }
  }

  getAbilityStats(player) {
    const bonuses = [];
    Object.values(this.#activeAbilities).forEach((ability) => {
      // Returns passive stats
      const name = ability.name.toUpperCase().replace(/ /g, '_').replace(/-/g, '_');
      if ('func' in ability) {
        const [bonus = {}, operation = 'addition'] = ability.func(player);
        if (Object.keys(bonus || {}).length > 0) {
          bonuses.push({
            type: `PET_ABILITY_${name}`,
            operation,
            bonus,
          });
        }
      } else if (Object.keys(ability.stats || {}).length > 0) {
        bonuses.push({
          type: `PET_ABILITY_${name}`,
          bonus: ability.stats,
        });
      }
    });
    return bonuses;
  }
}

module.exports = Pet;
