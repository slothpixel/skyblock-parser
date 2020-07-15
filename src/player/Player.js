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

class Player {
  constructor(uuid, data) {
    this.uuid = uuid;
    this.stats = baseStats;
  }
  getEHP() {
    if (this.stats.defense <= 0) return this.stats.health;
    return Math.round(this.stats.health * (1 + this.stats.defense / 100));
  }

  getInventory() {

  }
}

module.exports = Player;
