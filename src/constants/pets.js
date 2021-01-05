// We have to duplicate this to prevent circular dependency
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
};

module.exports = {
  petRarityOffset: {
    common: 0,
    uncommon: 6,
    rare: 11,
    epic: 16,
    legendary: 20,
    mythic: 20,
  },

  petValue: {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5,
    mythic: 6,
  },

  petRewards: {
    0: {
      magic_find: 0,
    },
    10: {
      magic_find: 1,
    },
    25: {
      magic_find: 2,
    },
    50: {
      magic_find: 3,
    },
    75: {
      magic_find: 4,
    },
    100: {
      magic_find: 5,
    },
    130: {
      magic_find: 6,
    },
    175: {
      magic_find: 7,
    },
  },

  petLevels: [
    100,
    110,
    120,
    130,
    145,
    160,
    175,
    190,
    210,
    230,
    250,
    275,
    300,
    330,
    360,
    400,
    440,
    490,
    540,
    600,
    660,
    730,
    800,
    880,
    960,
    1050,
    1150,
    1260,
    1380,
    1510,
    1650,
    1800,
    1960,
    2130,
    2310,
    2500,
    2700,
    2920,
    3160,
    3420,
    3700,
    4000,
    4350,
    4750,
    5200,
    5700,
    6300,
    7000,
    7800,
    8700,
    9700,
    10800,
    12000,
    13300,
    14700,
    16200,
    17800,
    19500,
    21300,
    23200,
    25200,
    27400,
    29800,
    32400,
    35200,
    38200,
    41400,
    44800,
    48400,
    52200,
    56200,
    60400,
    64800,
    69400,
    74200,
    79200,
    84700,
    90700,
    97200,
    104200,
    111700,
    119700,
    128200,
    137200,
    146700,
    156700,
    167700,
    179700,
    192700,
    206700,
    221700,
    237700,
    254700,
    272700,
    291700,
    311700,
    333700,
    357700,
    383700,
    411700,
    441700,
    476700,
    516700,
    561700,
    611700,
    666700,
    726700,
    791700,
    861700,
    936700,
    1016700,
    1101700,
    1191700,
    1286700,
    1386700,
    1496700,
    1616700,
    1746700,
    1886700,
  ],

  pets: {
    BEE: {
      name: 'Bee',
      baseStats: {
        strength: 5,
      },
      statModifiers: {
        strength: 0.25,
        intelligence: 0.5,
        speed: 0.1,
      },
      abilityModifiers: {
        0: {
          intelligence: [0.02, 0.04, 0.09, 0.14, 0.19],
          strength: [0.02, 0.04, 0.07, 0.11, 0.14],
        },
        1: {},
        2: {
          ability: [0, 0, 0.5, 1, 1],
        },
        3: {},
        4: {
          ability: 0.2,
        },
      },
      abilities: {
        0: [{
          name: '§6Hive',
          desc: [`§7Gain §b+%intelligence%${symbols.intelligence} Intelligence §7and §c+%strength%${symbols.strength} Strength §7for each nearby bee.`, '§8Max 15 bees'],
        }],
        1: [],
        2: [{
          name: '§6Busy Buzz Buzz',
          desc: ['§7Has §a%ability%% §7chance for flowers to drop an extra one'],
        }],
        3: [],
        4: [{
          name: '§6Weaponized Honey',
          desc: [`§7Gain §a%ability%% §7of recieved damage as §6${symbols.health} Absorption`],
        }],
      },
    },
    CHICKEN: {
      name: 'Chicken',
      statModifiers: {
        health: 2,
      },
      abilityModifiers: {
        0: {
          ability: [0.3, 0.4, 0.5, 0.5, 0.5],
        },
        1: {},
        2: {
          ability: [0, 0.8, 1, 2, 2],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: '§6Light Feet',
          desc: ['§7Reduces fall damage by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: '§6Eggstra',
          desc: ['§7Killing chickens has a §a%ability%% §7chance to drop an egg'],
        }],
        3: [],
        4: [{
          name: '§6Mighty Chickens',
          desc: ['§7Chicken minions work §a%ability%% §7faster while on your island'],
        }],
      },
    },
    ELEPHANT: {
      name: 'Elephant',
      statModifiers: {
        intelligence: 0.75,
        health: 1,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.15, 0.2, 0.2],
        },
        1: {},
        2: {
          ability: 0.01,
        },
        3: {},
        4: {
          ability: 0.5,
        },
      },
      abilities: {
        0: [{
          name: '§6Stomp',
          desc: [`§7Gain §a%ability% ${symbols.defense} Defense §7for every §f100 ${symbols.speed} Speed`],
          func: () => {}, // TODO
        }],
        1: [],
        2: [{
          name: '§6Walking Fortress',
          desc: [`§7Gain §c%ability% ${symbols.health} Health §7for every §a10 ${symbols.defense} Defense`],
          func: () => {}, // TODO
        }],
        3: [],
        4: [{
          name: '§6Trunk Efficiency',
          desc: ['§7Grants a §a%ability%% §7chance to get double crops while farming'],
        }],
      },
    },
    PIG: {
      name: 'Pig',
      statModifiers: {
        speed: 0.25,
      },
      abilityModifiers: {
        0: {
          ability: [0.3, 0.4, 0.5, 0.5, 0.5],
        },
        1: {},
        2: {
          ability: [0, 0.4, 0.5, 0.5, 0.5],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: '§6Ridable',
          desc: ['§7Right-click your summoned pet to ride it!'],
        },
        {
          name: '§6Run',
          desc: ['§7Increases the speed of your mount by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: '§6Sprint',
          desc: ['§7While holding an Enchanted Carrot on a Stick, increase the speed of your mount by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Trample',
          desc: ['§7While on your private island, break all crops your pig rides over'],
        }],
      },
    },
    RABBIT: {
      name: 'Rabbit',
      statModifiers: {
        health: 1,
        speed: 0.2,
      },
      abilityModifiers: {
        0: {
          ability: [0.3, 0.4, 0.5, 0.5, 0.5],
        },
        1: {},
        2: {
          ability: [0, 0.25, 0.3, 0.3, 0.3],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: '§6Happy Feet ',
          desc: ['§7Jump Potions also give §a+%ability% §7speed'],
        }],
        1: [],
        2: [{
          name: '§6Farming Exp Boost ',
          desc: ['§7Boosts your Farming Exp by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Efficient Farming',
          desc: ['§7Farming minions work §a%ability%% §7faster while on your island.'],
        }],
      },
    },
    BAT: {
      name: 'Bat',
      statModifiers: {
        intelligence: 1,
        speed: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.15, 0.2, 0.2, 0.2, 0.2],
        },
        1: {},
        2: {
          intelligence: [0, 0.4, 0.5, 0.5, 0.5, 0.5],
          speed: [0, 0.2, 0.3, 0.3, 0.3, 0.3],
        },
        3: {},
        4: {
          ability: 0.5,
        },
        5: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: '§6Candy Lover',
          desc: ['§7Increases the chance for mobs to drop Candy by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: '§6Nightmare',
          desc: [`§7During night, gain §a%intelligence% §9${symbols.intelligence} Intelligence, §a%speed% §f${symbols.speed} Speed§7, and night vision`],
        }],
        3: [],
        4: [{
          name: '§6Wings of Steel',
          desc: ['§7Deals §a+%ability%% §7damage to §6Spooky §7enemies during the §6Spooky Festival'],
        }],
        5: [{
          name: '§6Sonar',
          desc: ['§7+§a%ability%% §7chance to fish up spooky sea creatures'],
          func: () => {}, // TODO
        }],
      },
    },
    ENDERMITE: {
      name: 'Endermite',
      statModifiers: {
        intelligence: 1,
      },
      abilityModifiers: {
        0: {
          ability: [0.4, 0.5, 0.5, 0.5, 0.5],
        },
        1: {},
        2: {
          ability: 0.05,
        },
        3: {},
        4: {
          ability: 0.4,
        },
      },
      abilities: {
        0: [{
          name: '§6More Stonks',
          desc: ['§7Gain more exp orbs for breaking end stone and gain a +§a%ability%% §7chance to get an extra block dropped.'],
        }],
        1: [],
        2: [{
          name: '§6Pearl Muncher',
          desc: ['§7Upon picking up an ender pearl, consume it and gain §a%ability% §6coins'],
        }],
        3: [],
        4: [{
          name: '§6Pearl Powered',
          desc: ['§7Upon consuming an ender pearl, gain +§a%ability% §7speed for 10 seconds'],
        }],
      },
    },
    ROCK: {
      name: 'Rock',
      statModifiers: {
        defense: 2,
        true_defense: 0.1,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {
          ability: [0, 0.2, 0.25, 0.25, 0.25],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: '§6Ridable',
          desc: ['§7Right-click on your summoned pet to ride it!'],
        },
        {
          name: '§6Sailing Stone',
          desc: ['§7Sneak to move your rock to your location (15s cooldown)'],
        }],
        1: [],
        2: [{
          name: '§6Fortify',
          desc: ['§7While sitting on your rock, gain +§a%ability%% §7defense'],
        }],
        3: [],
        4: [{
          name: '§6Steady Ground',
          desc: ['§7While sitting on your rock, gain +§a%ability%§7% damage'],
        }],
      },
    },
    SILVERFISH: {
      name: 'Silverfish',
      statModifiers: {
        defense: 1,
        health: 0.2,
      },
      abilityModifiers: {
        0: {
          true_defense: [0.05, 0.1, 0.1, 0.15, 0.15],
        },
        1: {},
        2: {
          ability: [0, 0, 0.2, 0.3, 0.3],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: '§6True Defense Boost',
          desc: [`§7Boosts your §f${symbols.true_defense} True Defense §7by §a%true_defense%`],
          func: () => {}, // TODO
        }],
        1: [],
        2: [{
          name: '§6Mining Exp Boost',
          desc: ['§7Boosts your Mining exp by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Dexterity',
          desc: ['§7Gives permanent haste III'],
        }],
      },
    },
    WITHER_SKELETON: {
      name: 'Wither Skeleton',
      statModifiers: {
        crit_chance: 0.05,
        intelligence: 0.25,
        crit_damage: 0.25,
        defense: 0.25,
        strength: 0.25,
      },
      abilityModifiers: {
        0: {
          ability: [0.05, 0.1, 0.1, 0.3, 0.3],
        },
        1: {},
        2: {
          ability: [0, 0, 0.3, 0.5, 0.5],
        },
        3: {},
        4: {
          ability: 2,
        },
      },
      abilities: {
        0: [{
          name: '§6Stronger Bones',
          desc: ['§7Take §a%ability%% §7less damage from skeletons'],
        }],
        1: [],
        2: [{
          name: '§6Wither Blood',
          desc: ['§7Deal §a%ability%% §7more damage to wither mobs'],
        }],
        3: [],
        4: [{
          name: "§6Death's Touch",
          desc: ['§7Upon hitting an enemy inflict the wither effect for §a%ability%% §7damage over 3 seconds', '§8Does not stack'],
        }],
      },
    },
    BLACK_CAT: {
      name: 'Black Cat',
      statModifiers: {
        speed: 0.25,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {
          ability: 1,
        },
        1: {},
        2: {
          ability: 0.15,
        },
        3: {},
        4: {
          ability: 0.15,
        },
      },
      abilities: {
        0: [{
          name: '§6Hunter',
          desc: ['§7Increases your speed and speed cap by +§a%ability%'],
          func: () => {}, // TODO
        }],
        1: [],
        2: [{
          name: '§6Omen',
          desc: [`§7Grants §d%ability% ${symbols.pet_luck} Pet Luck`],
          func: () => {}, // TODO
        }],
        3: [],
        4: [{
          name: '§6Supernatural',
          desc: [`§7Grants §b%ability% ${symbols.magic_find} Magic Find`],
          func: () => {}, // TODO
        }],
      },
    },
    BLAZE: {
      name: 'Blaze',
      baseStats: {
        defense: 10,
      },
      statModifiers: {
        intelligence: 1,
        defense: 0.2,
      },
      abilityModifiers: {
        0: {
          ability: [0.05, 0.05, 0.1, 0.2, 0.2],
        },
        1: {},
        2: {
          ability: [0, 0, 0.3, 0.4, 0.4],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: '§6Nether Embodiment',
          desc: ['§7Increases all stats by §a%ability%% §7while on the Blazing Fortress'],
        }],
        1: [],
        2: [{
          name: '§6Bling Armor',
          desc: ['§7Upgrades §cBlaze Armor §7stats and ability by §a%ability%%'],
          func: () => {}, // TODO
        }],
        3: [],
        4: [{
          name: '§6Fusion-Style Potato',
          desc: ['§7Doubles effects of hot potato books'],
          func: () => {}, // TODO
        }],
      },
    },
    ENDER_DRAGON: {
      name: 'Ender Dragon',
      statModifiers: {
        strength: 0.5,
        crit_chance: 0.1,
        crit_damage: 0.5,
      },
      abilityModifiers: {
        0: {
          ability: 0.25,
        },
        1: {},
        2: {
          strength: 0.5,
          damage: 0.3,
        },
        3: {},
        4: {
          ability: 0.1,
        },
      },
      abilities: {
        0: [{
          name: '§6End Strike',
          desc: ['§7Deal §a%ability%% §7more damage to end mobs'],
        }],
        1: [],
        2: [{
          name: '§6One With The Dragon',
          desc: [`§7Buffs the Aspect of the Dragons sword by §a%damage% §c${symbols.strength} Damage and §a%strength% §c${symbols.strength} Strength`],
        }],
        3: [],
        4: [{
          name: '§6Superior',
          desc: ['§7Increases all stats by §a%ability%%'],
          func: () => {}, // TODO
        }],
      },
    },
    ENDERMAN: {
      name: 'Enderman',
      statModifiers: {
        crit_damage: 0.75,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.2, 0.3, 0.3, 0.3],
        },
        1: {},
        2: {
          ability: [0, 0, 0.4, 0.5, 0.5],
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: '§6Enderian',
          desc: ['§7Take §a%ability%% §7less damage from end monsters'],
        }],
        1: [],
        2: [{
          name: '§6Teleport Savvy',
          desc: ['§7Buffs the Aspect of the End ability granting §a%ability% §7weapon damage for 5s on use.'],
        }],
        3: [],
        4: [{
          name: '§6Zealot Madness',
          desc: ['§7Increases your odds to find a special Zealot by §a%ability%%.'],
        }],
      },
    },
    GHOUL: {
      name: 'Ghoul',
      statModifiers: {
        intelligence: 0.75,
        health: 1,
        ferocity: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.25, 0.25, 0.25, 0.25],
        },
        1: {},
        2: {
          ability: [0, 0, 0.1, 0.5, 0.5],
        },
        3: {},
        4: {
          ability: 1,
        },
      },
      abilities: {
        0: [{
          name: '§6Amplified Healing',
          desc: ['§7Increase all healing by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: '§6Zombie Arm',
          desc: ['§7Increase the health and range of the Zombie sword by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Reaper Soul',
          desc: ['§7Increases the health and lifespan of the Reaper Scythe zombies by §a%ability%%'],
        }],
      },
    },
    GOLEM: {
      name: 'Golem',
      statModifiers: {
        health: 1.5,
        strength: 0.5,
      },
      abilityModifiers: {
        0: {
          ability: 0.3,
        },
        1: {},
        2: {
          ability: 0.25,
        },
        3: {},
        4: {
          ability: 3,
        },
      },
      abilities: {
        0: [{
          name: '§6Last Stand',
          desc: ['§7While less than 15% HP, deal §a%ability%% §7more damage'],
        }],
        1: [],
        2: [{
          name: '§6Ricochet',
          desc: ['§7Your iron plating causes §a%ability%% §7of attacks to rocochet and hit the attacker'],
        }],
        3: [],
        4: [{
          name: '§6Toss',
          desc: [`§7Every 5 hits, throw the enemy up into the air and deal ${200 + round(this.level * mult, 1)}% damage (10s cooldown)`],
        }],
      },
    },
    GRIFFIN: {
      name: 'Griffin',
      statModifiers: {
        strength: 0.25,
        crit_chance: 0.1,
        crit_damage: 0.5,
        intelligence: 0.1,
        magic_find: 0.1,
      },
      abilityModifiers: {
        0: {
          ability: 0.3,
        },
        1: {
          regeneration: [0, 'V', 'VI', 'VI', 'VII'],
          strength: [0, 'VII', 'VII', 'VIII', 'VIII'],
        },
        2: {},
        3: {
          ability: [0, 0, 0, 0.1625, 0.2],
        },
        4: {
          ability: 0.14,
        },
      },
      abilities: {
        0: [{
          name: '§6Odyssey',
          desc: ['§2Mythological creatures §7you find and burrows you dig scale in §cdifficulty §7and §6rewards §7based on your equipped Griffin\'s rarity.'],
        }],
        1: [{
          name: '§6Legendary Constitution',
          desc: ['§7Permanent §cRegeneration %regeneration% §7and §4Strength %strength%§7.'],
        }],
        2: [],
        3: [{
          name: '§6Perpetual Empathy',
          desc: ['§7Heal nearby players for §a%ability%% §7of the final damage you receive.', '§8Excludes other griffins.'],
        }],
        4: [{
          name: '§6King of Kings',
          desc: [`§7Gain §c+${round(1 + (this.level * 0.14), 1)}% §c❁ Strength §7when above §c85% §7health.`],
        }],
      },
    },
    GUARDIAN: {
      name: 'Guardian',
      statModifiers: {
        intelligence: 1,
        defense: 0.5,
      },
      abilityModifiers: {
        0: {
          ability: [0.02, 0.04, 0.1, 0.15, 0.2],
        },
        1: {},
        2: {
          ability: [0, 0, 0.25, 0.3, 0.3],
        },
        3: {},
        4: {
          ability: 0.14,
        },
      },
      abilities: {
        0: [{
          name: '§6Lazerbeam',
          desc: [`§7Zap your enemies for §b%ability%x §7your §b${symbols.intelligence} Intelligence §7every §a3s`],
        }],
        1: [],
        2: [{
          name: '§6Enchanting Exp Boost',
          desc: ['§7Boosts your Enchanting exp by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Mana Pool',
          desc: ['§7Regenerate §b%ability%% §7extra mana, doubled when near or in water'],
        }],
      },
    },
    HORSE: {
      name: 'Horse',
      statModifiers: {
        intelligence: 0.5,
        speed: 0.25,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {
          ability: [0, 0, 1.1, 1.2, 1.2],
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: '§6Ridable',
          desc: ['§7Right-click your summoned pet to ride it!'],
        }],
        1: [],
        2: [{
          name: '§6Run',
          desc: ['§7Increase the speed of your mount by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Ride Into Battle',
          desc: ['§7When riding your horse, gain +§a%ability%% §7bow damage'],
        }],
      },
    },
    HOUND: {
      name: 'Hound',
      statModifiers: {
        strength: 0.4,
        bonus_attack_speed: 0.15,
        ferocity: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: 0.05,
        },
        1: {},
        2: {
          ability: 0.1,
        },
        3: {},
        4: {
          ability: 0.1,
        },
      },
      abilities: {
        0: [{
          name: '§6Scavenger',
          desc: ['§7Gain +§a%ability% §7coins per monster kill'],
        }],
        1: [],
        2: [{
          name: '§6Finder',
          desc: ['§7Increases the chance for monsters to drop their armor by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Fury Claws',
          desc: [`§7Grants %ability%§e${symbols.attack_speed} Bonus Attack Speed`],
          func: () => {}, // TODO
        }],
      },
    },
    MAGMA_CUBE: {
      name: 'Magma Cube',
      statModifiers: {
        health: 0.5,
        defense: 0.33,
        strength: 0.2,
      },
      abilityModifiers: {
        0: {
          ability: [0.2, 0.25, 0.3, 0.3, 0.3],
        },
        1: {},
        2: {
          ability: 0.2,
        },
        3: {},
        4: {
          ability: 1,
        },
      },
      abilities: {
        0: [{
          name: '§6Slimy Minions',
          desc: ['§7Slime minions work §a%ability%% §7faster while on your island'],
        }],
        1: [],
        2: [{
          name: '§6Salt Blade',
          desc: ['§7Deal §a%ability%% §7more damage to slimes'],
        }],
        3: [],
        4: [{
          name: '§6Hot Ember',
          desc: ['§7Buffs the stats of Ember Armor by %ability%%'],
          func: () => {}, // TODO
        }],
      },
    },
    PHOENIX: {
      name: 'Phoenix',
      baseStats: {
        strength: 10,
        intelligence: 50,
      },
      statModifiers: {
        strength: 0.5,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
      },
      abilities: {
        0: [],
        1: [],
        2: [],
        3: [{
          name: '§6Rekindle',
          desc: [`§7Before death, become §eimmune §7and gain §c${start_strength + round(this.level * mult_strength, 1)} ${symbols.strength} Strength §7for ${2 + round(this.level * mult_time, 1)} §7seconds`, '§73 minutes cooldown'],
        },
        {
          name: '§6Fourth Flare',
          desc: [`§7On 4th melee strike, §6ignite §7mobs, dealing §c${1 + round(this.level * mult_damage, 1)}x §7your §9${symbols.crit_damage} Crit Damage §7each second for §a${2 + floor(this.level * mult_time, 0)} §7seconds`],
        }],
        4: [{
          name: '§6Magic Bird',
          desc: ['§7You may always fly on your private island'],
        },
        {
          name: '§6Eternal Coins',
          desc: ['§7Don\'t lose coins from death.'],
        }],
      },
    },
    PIGMAN: {
      name: 'Pigman',
      statModifiers: {
        strength: 0.5,
        defense: 0.5,
        ferocity: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: 0.3,
        },
        1: {},
        2: {
          damage: 0.4,
          strength: 0.25,
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: '§6Bacon Farmer',
          desc: ['§7Pig minions work §a%ability%% §7faster while on your island'],
        }],
        1: [],
        2: [{
          name: '§6Pork Master',
          desc: [`§7Buffs the Pigman sword by §a%damage% §c${symbols.strength} Damage and §7§a%strength% §c${symbols.strength} Strength`],
        }],
        3: [],
        4: [{
          name: '§6Giant Slayer',
          desc: ['§7Deal §a%ability%% §7extra damage to monsters level 100 and up'],
        }],
      },
    },
    SKELETON_HORSE: {
      name: 'Skeleton Horse',
      statModifiers: {
        speed: 0.5,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {
          ability: [0, 0, 0.1, 1.5, 1.5],
        },
        3: {},
        4: {
          ability: 0.4,
        },
      },
      abilities: {
        0: [{
          name: '§6Ridable',
          desc: ['§7Right-click your summoned pet to ride it!'],
        }],
        1: [],
        2: [{
          name: '§6Run',
          desc: ['§7Increase the speed of your mount by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Ride Into Battle',
          desc: ['§7When riding your horse, gain +§a%ability%% §7bow damage'],
        }],
      },
    },
    SKELETON: {
      name: 'Skeleton',
      statModifiers: {
        crit_chance: 0.15,
        crit_damage: 0.3,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.1, 0.2, 0.2, 0.2],
        },
        1: {},
        2: {
          ability: [0, 0, 0.17, 0.2, 0.2],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: '§6Bone Arrows',
          desc: ['§7Increase arrow damage by §a%ability%% §7which is tripled while in dungeons'],
        }],
        1: [],
        2: [{
          name: '§6Combo',
          desc: [`§7Gain a combo stack for every bow hit granting +§a3 §c${symbols.strength} Strength§7. Max §a%ability% §7stacks, stacks disappear after 8 seconds`],
        }],
        3: [],
        4: [{
          name: '§6Skeletal Defense',
          desc: [`§7Your skeleton shoots an arrow dealing §a60x §7your §9${symbols.crit_damage} Crit Damage §7when a mob gets close to you (15s cooldown)`],
        }],
      },
    },
    SNOWMAN: {
      name: 'Snowman',
      statModifiers: {
        damage: 0.25,
        strength: 0.25,
        crit_damage: 0.25,
      },
      abilityModifiers: {
        0: {
          ability: 0.04,
        },
        1: {},
        2: {
          ability: 0.15,
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: '§6Blizzard',
          desc: [`§7Slow all enemies within §a${4 + round(this.level * mult, 1)} §7blocks`],
        }],
        1: [],
        2: [{
          name: '§6Frostbite',
          desc: [`§7Your freezing aura slows enemy attacks causing you to take §a${floor(this.level * mult, 1)}% §7reduced damage`],
        }],
        3: [],
        4: [{
          name: '§6Snow Cannon',
          desc: [`§7Your snowman fires a snowball dealing §a5x §7your §c${symbols.strength} Strength §7when a mob gets close to you (1s cooldown)`],
        }],
      },
    },
    SPIDER: {
      name: 'Spider',
      statModifiers: {
        strength: 0.1,
        crit_damage: 0.1,
      },
      abilityModifiers: {
        0: {
          ability: 0.1,
        },
        1: {},
        2: {
          ability: 0.4,
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: '§6One With The Spider',
          desc: [`§7Gain §a%ability% §c${symbols.strength} Strength §7for every nearby spider`, '§8Max 10 spiders'],
        }],
        1: [],
        2: [{
          name: '§6Web-weaver',
          desc: ['§7Upon hitting a monster it becomes slowed by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Spider Whisperer',
          desc: ['§7Spider and tarantula minions work §a%ability%% §7faster while on your island'],
        }],
      },
    },
    SPIRIT: {
      name: 'Spirit',
      statModifiers: {
        intelligence: 1,
        speed: 0.29,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {
          ability: 0.45,
        },
      },
      abilities: {
        0: [{
          name: '§6Spirit Assistance',
          desc: ['§7Spawns and assists you when you are ghost in dungeons.'],
        }],
        1: [],
        2: [{
          name: '§6Spirit Leap',
          desc: ['§7Grants a §a10% §7chance for mini-bosses in dungeons to drop §b5 §7Spirit Leap Pearls.'],
        }],
        3: [],
        4: [{
          name: '§6Spirit Cooldowns',
          desc: ['§7Reduces the cooldown of your ghost abilities in dungeons by §a%ability%%§7.'],
        }],
      },
    },
    TARANTULA: {
      name: 'Tarantula',
      statModifiers: {
        crit_chance: 0.1,
        crit_damage: 0.3,
        strength: 0.1,
      },
      abilityModifiers: {
        0: {
          ability: 0.3,
        },
        1: {},
        2: {
          ability: 0.5,
        },
        3: {},
        4: {
          ability: 0.4,
        },
      },
      abilities: {
        0: [{
          name: '§6Webbed Cells',
          desc: ['§7Anti-healing is §a%ability%% §7less effective against you'],
        }],
        1: [],
        2: [{
          name: '§6Eight Legs',
          desc: ['§7Decreases the mana cost of Spider, Tarantula and Thorn\'s boots by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: '§6Arachnid Slayer',
          desc: ['§7Gain +§a%ability%% §7more combat xp from spiders'],
        }],
      },
    },
    TIGER: {
      name: 'Tiger',
      baseStats: {
        strength: 5,
      },
      statModifiers: {
        strength: 0.1,
        crit_chance: 0.05,
        crit_damage: 0.5,
        ferocity: 0.1,
      },
      abilityModifiers: {
        0: {
          ability: [0.2, 0.5, 0.5, 1, 1],
        },
        1: {},
        2: {
          ability: [0, 0, 0.3, 0.55, 0.55],
        },
        3: {},
        4: {
          ability: 0.2,
        },
      },
      abilities: {
        0: [{
          name: '§6Merciless Swipe',
          desc: [`§7Gain 	§c+%ability%% ${symbols.ferocity} Ferocity.`],
          func: () => {}, // TODO
        }],
        1: [],
        2: [{
          name: '§6Hemorrhage',
          desc: ['§7Melee attacks reduce healing by §a%ability%% §7for 10 seconds'],
        }],
        3: [],
        4: [{
          name: '§6Apex Predator',
          desc: ['§7Deal %ability%% damage against targets with no other mobs within 15 blocks'],
        }],
      },
    },
    TURTLE: {
      name: 'Turtle',
      statModifiers: {
        health: 0.5,
        defense: 1,
      },
      abilityModifiers: {
        0: {
          ability: 0.2,
        },
        1: {},
        2: {
          defense: [0, 0, 0.35, 0.35, 0.45],
          health: [0, 0, 0.2, 0.2, 0.25],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          nname: '§6Turtle Tactics',
          desc: [`§7Gain §a+%ability%% ${symbols.defense} Defense`],
          func: () => {}, // TODO
        }],
        1: [],
        2: [{
          name: '§6Genius Amniote',
          desc: [`§7Gain §a+%defense% ${symbols.defense} Defense §7and regen §c+%health%${symbols.health} §7per second when near or in water`],
        }],
        3: [],
        4: [{
          name: '§6Unflippable',
          desc: ['§7Gain §aimmunity §7to knockback'],
        }],
      },
    },
    WOLF: {
      name: 'Wolf',
      statModifiers: {
        health: 0.5,
        crit_damage: 0.1,
        speed: 0.2,
        true_defense: 0.1,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.2, 0.3, 0.3, 0.3],
        },
        1: {},
        2: {
          ability: [0, 0, 0.1, 0.15, 0.15],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: '§6Alpha Dog',
          desc: ['§7Take §a%ability%% §7less damage from wolves'],
        }],
        1: [],
        2: [{
          name: '§6Pack Leader',
          desc: [`§7Gain §a%ability% §9 ${symbols.crit_damage} Crit Damage §7for every nearby wolf monsters`, '§8Max 10 wolves'],
        }],
        3: [],
        4: [{
          name: '§6Combat Exp Boost',
          desc: ['§7Boosts your Combat exp by §a%ability%%'],
        }],
      },
    },
    ZOMBIE: {
      name: 'Zombie',
      statModifiers: {
        crit_damage: 0.3,
        health: 1,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.2, 0.3, 0.3, 0.3],
        },
        1: {},
        2: {
          ability: 0.2,
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: '§6Chomp',
          desc: ['§7Gain +§a%ability% §7hp per zombie kill'],
        }],
        1: [],
        2: [{
          name: '§6Rotten Blade',
          desc: ['Deal §a%ability% §7more damage to zombies'],
        }],
        3: [],
        4: [{
          name: '§6Living Dead',
          desc: ['§7Increases the defense of all undead armor sets by §a%ability%%'],
          func: () => {}, // TODO
        }],
      },
    },
  },

  petData: {
    BAT: {
      head: '382fc3f71b41769376a9e92fe3adbaac3772b999b219c9d6b4680ba9983e527',
      type: 'mining',
    },
    BLAZE: {
      head: 'b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0',
      type: 'combat',
    },
    CHICKEN: {
      head: '7f37d524c3eed171ce149887ea1dee4ed399904727d521865688ece3bac75e',
      type: 'farming',
    },
    HORSE: {
      head: '36fcd3ec3bc84bafb4123ea479471f9d2f42d8fb9c5f11cf5f4e0d93226',
      type: 'combat',
    },
    JERRY: {
      head: '822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b',
      type: 'combat',
    },
    OCELOT: {
      head: '5657cd5c2989ff97570fec4ddcdc6926a68a3393250c1be1f0b114a1db1',
      type: 'foraging',
    },
    PIGMAN: {
      head: '63d9cb6513f2072e5d4e426d70a5557bc398554c880d4e7b7ec8ef4945eb02f2',
      type: 'combat',
    },
    RABBIT: {
      head: '117bffc1972acd7f3b4a8f43b5b6c7534695b8fd62677e0306b2831574b',
      type: 'farming',
    },
    SHEEP: {
      head: '64e22a46047d272e89a1cfa13e9734b7e12827e235c2012c1a95962874da0',
      type: 'alchemy',
    },
    SILVERFISH: {
      head: 'da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540',
      type: 'mining',
    },
    WITHER_SKELETON: {
      head: 'f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff',
      type: 'mining',
    },
    SKELETON_HORSE: {
      head: '47effce35132c86ff72bcae77dfbb1d22587e94df3cbc2570ed17cf8973a',
      type: 'combat',
    },
    WOLF: {
      head: 'dc3dd984bb659849bd52994046964c22725f717e986b12d548fd169367d494',
      type: 'combat',
    },
    ENDERMAN: {
      head: '6eab75eaa5c9f2c43a0d23cfdce35f4df632e9815001850377385f7b2f039ce1',
      type: 'combat',
    },
    PHOENIX: {
      head: '23aaf7b1a778949696cb99d4f04ad1aa518ceee256c72e5ed65bfa5c2d88d9e',
      type: 'combat',
    },
    MAGMA_CUBE: {
      head: '38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429',
      type: 'combat',
    },
    FLYING_FISH: {
      head: '40cd71fbbbbb66c7baf7881f415c64fa84f6504958a57ccdb8589252647ea',
      type: 'fishing',
    },
    BLUE_WHALE: {
      head: 'dab779bbccc849f88273d844e8ca2f3a67a1699cb216c0a11b44326ce2cc20',
      type: 'fishing',
    },
    TIGER: {
      head: 'fc42638744922b5fcf62cd9bf27eeab91b2e72d6c70e86cc5aa3883993e9d84',
      type: 'combat',
    },
    LION: {
      head: '38ff473bd52b4db2c06f1ac87fe1367bce7574fac330ffac7956229f82efba1',
      type: 'foraging',
    },
    PARROT: {
      head: '5df4b3401a4d06ad66ac8b5c4d189618ae617f9c143071c8ac39a563cf4e4208',
      type: 'alchemy',
    },
    SNOWMAN: {
      head: '11136616d8c4a87a54ce78a97b551610c2b2c8f6d410bc38b858f974b113b208',
      type: 'combat',
    },
    TURTLE: {
      head: '212b58c841b394863dbcc54de1c2ad2648af8f03e648988c1f9cef0bc20ee23c',
      type: 'combat',
    },
    BEE: {
      head: '7e941987e825a24ea7baafab9819344b6c247c75c54a691987cd296bc163c263',
      type: 'farming',
    },
    ENDER_DRAGON: {
      head: 'aec3ff563290b13ff3bcc36898af7eaa988b6cc18dc254147f58374afe9b21b9',
      type: 'combat',
    },
    GUARDIAN: {
      head: '221025434045bda7025b3e514b316a4b770c6faa4ba9adb4be3809526db77f9d',
      type: 'enchanting',
    },
    SQUID: {
      head: '01433be242366af126da434b8735df1eb5b3cb2cede39145974e9c483607bac',
      type: 'fishing',
    },
    GIRAFFE: {
      head: '176b4e390f2ecdb8a78dc611789ca0af1e7e09229319c3a7aa8209b63b9',
      type: 'foraging',
    },
    ELEPHANT: {
      head: '7071a76f669db5ed6d32b48bb2dba55d5317d7f45225cb3267ec435cfa514',
      type: 'farming',
    },
    MONKEY: {
      head: '13cf8db84807c471d7c6922302261ac1b5a179f96d1191156ecf3e1b1d3ca',
      type: 'foraging',
    },
    SPIDER: {
      head: 'cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1',
      type: 'combat',
    },
    ENDERMITE: {
      head: '5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855',
      type: 'mining',
    },
    GHOUL: {
      head: '87934565bf522f6f4726cdfe127137be11d37c310db34d8c70253392b5ff5b',
      type: 'combat',
    },
    JELLYFISH: {
      head: '913f086ccb56323f238ba3489ff2a1a34c0fdceeafc483acff0e5488cfd6c2f1',
      type: 'alchemy',
    },
    PIG: {
      head: '621668ef7cb79dd9c22ce3d1f3f4cb6e2559893b6df4a469514e667c16aa4',
      type: 'farming',
    },
    ROCK: {
      head: 'cb2b5d48e57577563aca31735519cb622219bc058b1f34648b67b8e71bc0fa',
      type: 'mining',
    },
    SKELETON: {
      head: 'fca445749251bdd898fb83f667844e38a1dff79a1529f79a42447a0599310ea4',
      type: 'combat',
    },
    ZOMBIE: {
      head: '56fc854bb84cf4b7697297973e02b79bc10698460b51a639c60e5e417734e11',
      type: 'combat',
    },
    DOLPHIN: {
      head: 'cefe7d803a45aa2af1993df2544a28df849a762663719bfefc58bf389ab7f5',
      type: 'fishing',
    },
    BABY_YETI: {
      head: 'ab126814fc3fa846dad934c349628a7a1de5b415021a03ef4211d62514d5',
      type: 'fishing',
      emoji: '❄️',
    },
    MEGALODON: {
      head: 'a94ae433b301c7fb7c68cba625b0bd36b0b14190f20e34a7c8ee0d9de06d53b9',
      type: 'fishing',
    },
    GOLEM: {
      head: '89091d79ea0f59ef7ef94d7bba6e5f17f2f7d4572c44f90f76c4819a714',
      type: 'combat',
    },
    HOUND: {
      head: 'b7c8bef6beb77e29af8627ecdc38d86aa2fea7ccd163dc73c00f9f258f9a1457',
      type: 'combat',
    },
    TARANTULA: {
      head: '8300986ed0a04ea79904f6ae53f49ed3a0ff5b1df62bba622ecbd3777f156df8',
      type: 'combat',
      emoji: '🕸️',
    },
    BLACK_CAT: {
      head: 'e4b45cbaa19fe3d68c856cd3846c03b5f59de81a480eec921ab4fa3cd81317',
      type: 'combat',
    },
    SPIRIT: {
      head: '8d9ccc670677d0cebaad4058d6aaf9acfab09abea5d86379a059902f2fe22655',
      type: 'combat',
    },
    GRIFFIN: {
      head: '4c27e3cb52a64968e60c861ef1ab84e0a0cb5f07be103ac78da67761731f00c8',
      type: 'combat',
    },
  },

  petSkins: {
    ENDERMAN: {
      ENDERMAN: {
        name: 'Spooky',
        head: 'ea84cc8818c293484fdaafc8fa2f0bf39e55733a247d68023df2c6c6b9b671d0',
      },
    },
    GUARDIAN: {
      GUARDIAN: {
        name: 'Watcher',
        head: '37cc76e7af29f5f3fbfd6ece794160811eff96f753459fa61d7ad176a064e3c5',
      },
    },
    TIGER: {
      TIGER_TWILIGHT: {
        name: 'Twilight',
        head: '896211dc599368dbd9056c0116ab61063991db793be93066a858eb4e9ce56438',
      },
    },
    RABBIT: {
      RABBIT: {
        name: 'Pretty',
        head: 'a34631d940fddb689ddef6a3b352c50220c460dba05cd18dc83192b59dc647f8',
      },
    },
    WITHER_SKELETON: {
      WITHER: {
        name: 'Dark',
        head: '224c2d14a0219af5ccfcaa36e8a333e271724ed61276611f9529e16c10273a0d',
      },
    },
    ROCK: {
      ROCK_COOL: {
        name: 'Cool',
        head: 'fefcdbb7d95502acc1ae35a32a40ce4dec8f4c9f0da26c9d9fe7c2c3eb748f6',
      },
      ROCK_SMILE: {
        name: 'Smile',
        head: '713c8b2916a275db4c1762cf5f13d7b95b91d60baf5164a447d6efa7704cf11b',
      },
      ROCK_THINKING: {
        name: 'Thinking',
        head: 'dd2f781f03c365bbc5dd1e7186ab38dc69465e836c9fe066a9a844f34a4da92',
      },
      ROCK_LAUGH: {
        name: 'Laughing',
        head: '8cc1ef513d5f616675242174acde7b9d6259a47c4fe8f6e4b6e20920319d7073',
      },
      ROCK_DERP: {
        name: 'Derp',
        head: 'c4f89fbd12c209f7f26c1f34a1bd7f47635814759c09688dd212b205c73a8c02',
      },
      ROCK_EMBARRASSED: {
        name: 'Embarrassed',
        head: '27ff34992e66599e8529008be3fb577cb0ab545294253e25a0cc988e416c849',
      },
    },
    SHEEP: {
      SHEEP_WHITE: {
        name: 'White',
        head: 'b92a1a5c325f25f7438a0abb4f86ba6cf75552d02c7349a7292981459b31d2f7',
      },
      SHEEP_PURPLE: {
        name: 'Purple',
        head: '99a88cf7dd33063587c6b540e6130abc5d07f1a65c47573ab3c1ad3ccec8857f',
      },
      SHEEP_BLACK: {
        name: 'Black',
        head: 'aa9dcda642a807cd2daa4aa6be87cef96e08a8c8f5cec2657dda4266c6a884c2',
      },
      SHEEP_PINK: {
        name: 'Pink',
        head: 'afa7747684dcb96192d90342cea62742ec363da07cb5e6e25eecec888cd2076',
      },
      SHEEP_LIGHT_BLUE: {
        name: 'Light Blue',
        head: '722220de1a863bc5d9b9e7a6a3b03214c9f3d698ed3fe0d28220f3b93b7685c5',
      },
      SHEEP_LIGHT_GREEN: {
        name: 'Light Green',
        head: 'cf183ec2fe58faa43e568419b7a0dc446ece4ea0be52ec784c94e1d74b75939d',
      },
    },
    SILVERFISH: {
      SILVERFISH: {
        name: 'Fortified',
        head: 'd8552ff591042c4a38f8ba0626784ae28c4545a97d423fd9037c341035593273',
      },
    },
    ELEPHANT: {
      ELEPHANT_PINK: {
        name: 'Pink',
        head: '570eef474ec0e56cc34c2307eaa39f024612f8cd7248e7d5b14169ebd307c742',
      },
      ELEPHANT_BLUE: {
        name: 'Blue',
        head: '4b62969c005815d0409136380febc5ac468aaba9bda4db80954fa5426ee0a323',
      },
      ELEPHANT_ORANGE: {
        name: 'Orange',
        head: '554a34a80c474206d3700b8fced6b44fab0b0ed0b05c1293ff0c5d86eda251d1',
      },
    },
    JERRY: {
      JERRY_RED_ELF: {
        name: 'Red Elf',
        head: '1d82f9c36e824c1e37963a849bf5abd76d3b349125023504af58369086089ee9',
      },
      JERRY_GREEN_ELF: {
        name: 'Green Elf',
        head: '4ec5455f43426ca1874b5c7b4a492ec3722a502f8b9599e758e133fed8b3c1e4',
      },
    },
    BABY_YETI: {
      YETI_GROWN_UP: {
        name: 'Grown-up',
        head: 'f5f29a975529276d916fc67998833c11ee178ff21e5941afdfb0fa7010f8374e',
      },
    },
  },

  petItems: {
    PET_ITEM_ALL_SKILLS_BOOST_COMMON: {
      name: 'All Skills Exp Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a10% §7pet exp for all skills',
    },
    PET_ITEM_BIG_TEETH_COMMON: {
      name: 'Big Teeth',
      rarity: 'COMMON',
      description: `§7Increases §9${symbols.crit_chance} Crit Chance §7by §a5%`,
      stats: {
        crit_chance: 5,
      },
    },
    PET_ITEM_IRON_CLAWS_COMMON: {
      name: 'Iron Claws',
      rarity: 'COMMON',
      description: `§7Increases the pet's §9${symbols.crit_damage} Crit Damage §7by §a40% §7and §9${symbols.crit_chance} Crit Chance §7by §a40%`,
      multStats: {
        crit_chance: 1.4,
        crit_damage: 1.4,
      },
    },
    PET_ITEM_SHARPENED_CLAWS_UNCOMMON: {
      name: 'Sharpened Claws',
      rarity: 'UNCOMMON',
      description: `§7Increases §9${symbols.crit_damage} Crit Damage §7by §a15`,
      stats: {
        crit_damage: 15,
      },
    },
    PET_ITEM_HARDENED_SCALES_UNCOMMON: {
      name: 'Hardened Scales',
      rarity: 'UNCOMMON',
      description: `§7Increases §a${symbols.defense} Defense §7by §a25`,
      stats: {
        defense: 25,
      },
    },
    PET_ITEM_BUBBLEGUM: {
      name: 'Bubblegum',
      rarity: 'RARE',
      description: '§7Your pet fuses its power with placed §aOrbs §7to give them §a2x §7duration',
    },
    PET_ITEM_LUCKY_CLOVER: {
      name: 'Lucky Clover',
      rarity: 'EPIC',
      description: `§7Increases §b${symbols.magic_find} Magic Find §7by §a7`,
      stats: {
        magic_find: 7,
      },
    },
    PET_ITEM_TEXTBOOK: {
      name: 'Textbook',
      rarity: 'LEGENDARY',
      description: `§7Increases the pet's §b${symbols.intelligence} Intelligence §7by §a100%`,
      multStats: {
        intelligence: 2,
      },
    },
    PET_ITEM_SADDLE: {
      name: 'Saddle',
      rarity: 'UNCOMMON',
      description: '§7Increase horse speed by §a50% §7 and jump boost by §a100%',
    },
    PET_ITEM_EXP_SHARE: {
      name: 'Exp Share',
      rarity: 'EPIC',
      description: "§7While unequipped this pet gains §a25% §7of the equipped pet's xp, this is §7split between all pets holding the item.",
    },
    PET_ITEM_TIER_BOOST: {
      name: 'Tier Boost',
      rarity: 'LEGENDARY',
      description: '§7Boosts the §ararity §7of your pet by 1 tier!',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_COMMON: {
      name: 'Combat Exp Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a20% §7pet exp for Combat',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_UNCOMMON: {
      name: 'Combat Exp Boost',
      rarity: 'UNCOMMON',
      description: '§7Gives +§a30% §7pet exp for Combat',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_RARE: {
      name: 'Combat Exp Boost',
      rarity: 'RARE',
      description: '§7Gives +§a40% §7pet exp for Combat',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_EPIC: {
      name: 'Combat Exp Boost',
      rarity: 'EPIC',
      description: '§7Gives +§a50% §7pet exp for Combat',
    },
    PET_ITEM_FISHING_SKILL_BOOST_COMMON: {
      name: 'Fishing Exp Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a20% §7pet exp for Fishing',
    },
    PET_ITEM_FISHING_SKILL_BOOST_UNCOMMON: {
      name: 'Fishing Exp Boost',
      rarity: 'UNCOMMON',
      description: '§7Gives +§a30% §7pet exp for Fishing',
    },
    PET_ITEM_FISHING_SKILL_BOOST_RARE: {
      name: 'Fishing Exp Boost',
      rarity: 'RARE',
      description: '§7Gives +§a40% §7pet exp for Fishing',
    },
    PET_ITEM_FISHING_SKILL_BOOST_EPIC: {
      rarity: 'EPIC',
      description: '§7Gives +§a50% §7pet exp for Fishing',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_COMMON: {
      name: 'Fishing Exp Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a20% §7pet exp for Foraging',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_UNCOMMON: {
      name: 'Foraging Exp Boost',
      rarity: 'UNCOMMON',
      description: '§7Gives +§a30% §7pet exp for Foraging',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_RARE: {
      name: 'Foraging Exp Boost',
      rarity: 'RARE',
      description: '§7Gives +§a40% §7pet exp for Foraging',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_EPIC: {
      name: 'Foraging Exp Boost',
      rarity: 'EPIC',
      description: '§7Gives +§a50% §7pet exp for Foraging',
    },
    PET_ITEM_MINING_SKILL_BOOST_COMMON: {
      name: 'Mining Exp Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a20% §7pet exp for Mining',
    },
    PET_ITEM_MINING_SKILL_BOOST_UNCOMMON: {
      name: 'Mining Exp Boost',
      rarity: 'UNCOMMON',
      description: '§7Gives +§a30% §7pet exp for Mining',
    },
    PET_ITEM_MINING_SKILL_BOOST_RARE: {
      name: 'Mining Exp Boost',
      rarity: 'RARE',
      description: '§7Gives +§a40% §7pet exp for Mining',
    },
    PET_ITEM_MINING_SKILL_BOOST_EPIC: {
      rarity: 'EPIC',
      description: '§7Gives +§a50% §7pet exp for Mining',
    },
    PET_ITEM_FARMING_SKILL_BOOST_COMMON: {
      name: 'Farming Exp Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a20% §7pet exp for Farming',
    },
    PET_ITEM_FARMING_SKILL_BOOST_UNCOMMON: {
      name: 'Farming Exp Boost',
      rarity: 'UNCOMMON',
      description: '§7Gives +§a30% §7pet exp for Farming',
    },
    PET_ITEM_FARMING_SKILL_BOOST_RARE: {
      name: 'Farming Exp Boost',
      rarity: 'RARE',
      description: '§7Gives +§a40% §7pet exp for Farming',
    },
    PET_ITEM_FARMING_SKILL_BOOST_EPIC: {
      name: 'Farming Exp Boost',
      rarity: 'EPIC',
      description: '§7Gives +§a50% §7pet exp for Farming',
    },
    REINFORCED_SCALES: {
      name: 'Reinfored Scales',
      rarity: 'RARE',
      description: `§7Increases §a${symbols.defense} Defense §7by §a40`,
      stats: {
        defense: 40,
      },
    },
    GOLD_CLAWS: {
      name: 'Gold Claws',
      rarity: 'UNCOMMON',
      description: `§7Increases the pet's §9${symbols.crit_damage} Crit Damage §7by §a50% §7and §9${symbols.crit_chance} Crit Chance §7by §a50%`,
      multStats: {
        crit_chance: 1.5,
        crit_damage: 1.5,
      },
    },
    ALL_SKILLS_SUPER_BOOST: {
      name: 'All Skills Exp Super-Boost',
      rarity: 'COMMON',
      description: '§7Gives +§a20% §7pet exp for all skills',
    },
    BIGGER_TEETH: {
      name: 'Bigger Teeth',
      rarity: 'UNCOMMON',
      description: `§7Increases §9${symbols.crit_chance} Crit Chance §7by §a10`,
      stats: {
        crit_chance: 10,
      },
    },
    SERRATED_CLAWS: {
      name: 'Serrated Claws',
      rarity: 'RARE',
      description: `§7Increases §9${symbols.crit_damage} Crit Damage §7by §a25`,
      stats: {
        crit_damage: 25,
      },
    },
    WASHED_UP_SOUVENIR: {
      name: 'Washed-up Souvenir',
      rarity: 'LEGENDARY',
      description: `§7Increases §3${symbols.sea_creature_chance} Sea Creature Chance §7by §a5`,
      stats: {
        sea_creature_chance: 5,
      },
    },
    ANTIQUE_REMEDIES: {
      name: 'Antique Remedies',
      rarity: 'EPIC',
      description: `§7Increases the pet's §c${symbols.strength} Strength §7by §a80%`,
      multStats: {
        strength: 1.8,
      },
    },
    CROCHET_TIGER_PLUSHIE: {
      name: 'Crochet Tiger Plushie',
      rarity: 'EPIC',
      description: `§7Increases §e${symbols.attack_speed} Bonus Attack Speed §7by §a35`,
      stats: {
        bonus_attack_speed: 35,
      },
    },
    DWARF_TURTLE_SHELMET: {
      name: 'Dwarf Turtle Shelmet',
      rarity: 'RARE',
      description: '§7Makes the pet\'s owner immune to knockback.',
    },
    PET_ITEM_VAMPIRE_FANG: {
      name: 'Vampire Fangs',
      rarity: 'LEGENDARY',
      description: '§7Upgrades a Bat pet from §6Legendary §7to §dMythic §7adding a bonus perk and bonus stats!',
    },
    PET_ITEM_SPOOKY_CUPCAKE: {
      name: 'Spooky Cupcake',
      rarity: 'UNCOMMON',
      description: `§7Increases §c${symbols.strength} Strength §7by §a30 §7and §f${symbols.speed} Speed §7by §a20`,
      stats: {
        strength: 30,
        speed: 20,
      },
    },
    MINOS_RELIC: {
      name: 'Minos Relic',
      rarity: 'EPIC',
      description: '§7Increases all pet stats by §a33.3%',
      multAllStats: 1.333,
    },
  },
};
