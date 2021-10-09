const leveling = require('./leveling');
const bonuses = require('./bonuses');
const pets = require('./pets');
const misc = require('./misc');

const MAX_SOULS = 220;
const rarityOrder = ['special', 'mythic', 'legendary', 'epic', 'rare', 'uncommon', 'common'];
const rarityColors = {
  common: 'f',
  uncommon: 'a',
  rare: 9,
  epic: 5,
  legendary: 6,
  mythic: 'd',
  divine: 'b',
  supreme: 4,
  special: 'c',
};
const symbols = {
  health: '❤',
  defense: '❈',
  strength: '❁',
  crit_chance: '☣',
  crit_damage: '☠',
  intelligence: '✎',
  speed: '✦',
  sea_creature_chance: 'α',
  magic_find: '✯',
  pet_luck: '♣',
  attack_speed: '⚔️',
  true_defense: '❂',
  ferocity: '⫽',
  ability_damage: '✹',
  mining_speed: '↑',
  mining_fortune: '',
  farming_fortune: '',
  foraging_fortune: '',
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
  true_defense: 0,
  ferocity: 0,
  ability_damage: 0,
  mining_speed: 0,
  mining_fortune: 0,
  farming_fortune: 0,
  foraging_fortune: 0,
};

module.exports = {
  MAX_SOULS,
  rarityOrder,
  rarityColors,
  symbols,
  statTemplate,
  ...leveling,
  ...bonuses,
  ...pets,
  ...misc,
};
