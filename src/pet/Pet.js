/* eslint-disable camelcase */
const constants = require('../constants');

const petRarity = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary',
];

class Pet {
  constructor(type, rarity, level, held_item, candy_used) {
    this.rarity = rarity;
    this.level = level;
    this.held_item = held_item;
    this.candy_used = candy_used;
    this.lore = [];
    this.stats = {};

    const pet = constants.pets[type];
    let rarityTier = petRarity.indexOf(rarity) || 4;

    this.lore.push(`[Lvl ${level}] §${constants.rarityColors[rarity]}${pet.name}`, `§8${pet.type}`, '');

    if (held_item === 'PET_ITEM_TIER_BOOST' && rarityTier < 4) {
      rarityTier += 1;
    }

    Object.keys(pet.statModifiers).forEach((stat) => {
      this.stats[stat] = level * pet.statModifiers[stat];
    });

    // TODO - Stat lore

    const { abilities } = pet;
    for (let x = 0; x < rarityTier; x += 0) {
      if (rarityTier in abilities) {
        this.lore.push('', abilities[x]);
      }
    }

    if (held_item !== null) {
      const item = constants.petItems[held_item];
      const { description } = item;
      this.lore.push('', description);
    }

    if (candy_used > 0) {
      this.lore.push('', `§a(${candy_used}/10) Pet Candy Used`);
    }

    this.lore.push(`Progress to Level §7${level}: §e${}%`);
  }
}

module.exports = Pet;
