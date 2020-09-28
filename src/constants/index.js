const leveling = require('./leveling');
const bonuses = require('./bonuses');
const pets = require('./pets');
const misc = require('./misc');

const MAX_SOULS = 209;
const rarityOrder = ['special', 'mythic', 'legendary', 'epic', 'rare', 'uncommon', 'common'];
const rarityColors = {
  common: 'f',
  uncommon: 'a',
  rare: 9,
  epic: 5,
  legendary: 6,
  mythic: 'd',
  special: 'c',
};
const statTemplate = {
  damage: 0,
  health: 0,
  defense: 0,
  effective_health: 0,
  strength: 0,
  damage_increase: 0,
  speed: 0,
  crit_chance: 0,
  crit_damage: 0,
  bonus_attack_speed: 0,
  intelligence: 0,
  sea_creature_chance: 0,
  magic_find: 0,
  pet_luck: 0,
};

module.exports = {
  MAX_SOULS,
  rarityOrder,
  rarityColors,
  statTemplate,
  ...leveling,
  ...bonuses,
  ...pets,
  ...misc,
};
