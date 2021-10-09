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
  mining_speed: '↑',
  fortune: '☘',
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
          name: 'Hive',
          desc: [`§7Gain §b+%intelligence%${symbols.intelligence} Intelligence §7and §c+%strength%${symbols.strength} Strength §7for each nearby bee.`, '§8Max 15 bees'],
          func: () => ([]), // TODO
        }],
        1: [],
        2: [{
          name: 'Busy Buzz Buzz',
          desc: ['§7Has §a%ability%% §7chance for flowers to drop an extra one'],
        }],
        3: [],
        4: [{
          name: 'Weaponized Honey',
          desc: [`§7Gain §a%ability%% §7of received damage as §6${symbols.health} Absorption`],
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
          ability: [0, 0, 0.8, 1, 2],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: 'Light Feet',
          desc: ['§7Reduces fall damage by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Eggstra',
          desc: ['§7Killing chickens has a §a%ability%% §7chance to drop an egg'],
        }],
        3: [],
        4: [{
          name: 'Mighty Chickens',
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
          ability: [0.1, 0.15, 0.2, 0.2, 0.2],
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
          name: 'Stomp',
          desc: [`§7Gain §a%ability% ${symbols.defense} Defense §7for every §f100 ${symbols.speed} Speed`],
          func: () => ([]), // TODO
        }],
        1: [],
        2: [{
          name: 'Walking Fortress',
          desc: [`§7Gain §c%ability% ${symbols.health} Health §7for every §a10 ${symbols.defense} Defense`],
          func: () => ([]), // TODO
        }],
        3: [],
        4: [{
          name: 'Trunk Efficiency',
          desc: [`§7Grants §a+%ability% §6${symbols.fortune} Farming Fortune§7, which increases your chance for multiple drops`],
          func: () => ([]), // TODO
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
          ability: [0.3, 0.4, 0.4, 0.5, 0.5],
        },
        1: {},
        2: {
          ability: [0, 0, 0.4, 0.5, 0.5],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: 'Ridable',
          desc: ['§7Right-click your summoned pet to ride it!'],
        },
        {
          name: 'Run',
          desc: ['§7Increases the speed of your mount by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Sprint',
          desc: ['§7While holding an Enchanted Carrot on a Stick, increase the speed of your mount by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Trample',
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
          ability: [0.3, 0.4, 0.4, 0.5, 0.5],
        },
        1: {},
        2: {
          ability: [0, 0, 0.25, 0.3, 0.3],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: 'Happy Feet ',
          desc: ['§7Jump Potions also give §a+%ability% §7speed'],
        }],
        1: [],
        2: [{
          name: 'Farming Exp Boost ',
          desc: ['§7Boosts your Farming Exp by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Efficient Farming',
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
          sea_creature_chance: 0.25,
        },
      },
      abilities: {
        0: [{
          name: 'Candy Lover',
          desc: ['§7Increases the chance for mobs to drop Candy by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Nightmare',
          desc: [`§7During night, gain §a%intelligence% §9${symbols.intelligence} Intelligence, §a%speed% §f${symbols.speed} Speed§7, and night vision`],
          func: () => ([]),
        }],
        3: [],
        4: [{
          name: 'Wings of Steel',
          desc: ['§7Deals §a+%ability%% §7damage to §6Spooky §7enemies during the §6Spooky Festival'],
        }],
        5: [{
          name: 'Sonar',
          desc: ['§7+§a%sea_creature_chance%% §7chance to fish up spooky sea creatures'],
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
          ability: [0.3, 0.4, 0.5, 0.5, 0.5],
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
          name: 'More Stonks',
          desc: ['§7Gain more exp orbs for breaking end stone and gain a +§a%ability%% §7chance to get an extra block dropped.'],
        }],
        1: [],
        2: [{
          name: 'Pearl Muncher',
          desc: ['§7Upon picking up an ender pearl, consume it and gain §a%ability% §6coins'],
        }],
        3: [],
        4: [{
          name: 'Pearl Powered',
          desc: ['§7Upon consuming an ender pearl, gain +§a%ability% §7speed for 10 seconds'],
        }],
      },
    },
    MITHRIL_GOLEM: {
      name: 'Mithril Golem',
      statModifiers: {
        true_defense: 0.5,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {},
        3: {
          ability: 1,
          ability2: 0.2,
        },
        4: {
          ability: 0.2,
        },
      },
      abilities: {
        0: [],
        1: [],
        2: [],
        3: [{
          name: 'Mithril Affinity',
          desc: [`§7Gain +§a%ability% §6${symbols.mining_speed} Mining Speed §7when mining §eMithril`],
        },
        {
          name: 'The Smell Of Powder',
          desc: ['§7Gain +§a%ability2%% §7more §2Mithril Powder'],
        }],
        4: [{
          name: 'Danger Averse',
          desc: ['§7Increases your combat stats by +§a%ability%% §7on mining islands'],
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
          ability: [0, 0, 0.2, 0.25, 0.25],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: 'Ridable',
          desc: ['§7Right-click on your summoned pet to ride it!'],
        },
        {
          name: 'Sailing Stone',
          desc: ['§7Sneak to move your rock to your location (15s cooldown)'],
        }],
        1: [],
        2: [{
          name: 'Fortify',
          desc: ['§7While sitting on your rock, gain +§a%ability%% §7defense'],
        }],
        3: [],
        4: [{
          name: 'Steady Ground',
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
          ability: [0, 0, 0.25, 0.3, 0.3],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: 'True Defense Boost',
          desc: [`§7Boosts your §f${symbols.true_defense} True Defense §7by §a%true_defense%`],
        }],
        1: [],
        2: [{
          name: 'Mining Exp Boost',
          desc: ['§7Boosts your Mining exp by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Dexterity',
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
          name: 'Stronger Bones',
          desc: ['§7Take §a%ability%% §7less damage from skeletons'],
        }],
        1: [],
        2: [{
          name: 'Wither Blood',
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
          pet_luck: 0.15,
        },
        3: {},
        4: {
          magic_find: 0.15,
        },
      },
      abilities: {
        0: [{
          name: 'Hunter',
          desc: ['§7Increases your speed and speed cap by +§a%ability%'],
          func: () => ([]), // TODO
        }],
        1: [],
        2: [{
          name: 'Omen',
          desc: [`§7Grants §d%pet_luck% ${symbols.pet_luck} Pet Luck`],
        }],
        3: [],
        4: [{
          name: 'Supernatural',
          desc: [`§7Grants §b%magic_find% ${symbols.magic_find} Magic Find`],
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
          name: 'Nether Embodiment',
          desc: ['§7Increases all stats by §a%ability%% §7while on the Blazing Fortress'],
        }],
        1: [],
        2: [{
          name: 'Bling Armor',
          desc: ['§7Upgrades §cBlaze Armor §7stats and ability by §a%ability%%'],
          func: () => ([]), // TODO
        }],
        3: [],
        4: [{
          name: 'Fusion-Style Potato',
          desc: ['§7Doubles effects of hot potato books'],
          func: () => ([]), // TODO
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
          name: 'End Strike',
          desc: ['§7Deal §a%ability%% §7more damage to end mobs'],
        }],
        1: [],
        2: [{
          name: 'One With The Dragon',
          desc: [`§7Buffs the Aspect of the Dragons sword by §a%damage% §c${symbols.strength} Damage and §a%strength% §c${symbols.strength} Strength`],
        }],
        3: [],
        4: [{
          name: 'Superior',
          desc: ['§7Increases all stats by §a%ability%%'],
          func: () => ([]), // TODO
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
        5: {
          ability: 0.4,
        },
      },
      abilities: {
        0: [{
          name: 'Enderian',
          desc: ['§7Take §a%ability%% §7less damage from end monsters'],
        }],
        1: [],
        2: [{
          name: 'Teleport Savvy',
          desc: ['§7Buffs the Aspect of the End ability granting §a%ability% §7weapon damage for 5s on use.'],
        }],
        3: [],
        4: [{
          name: 'Zealot Madness',
          desc: ['§7Increases your odds to find a special Zealot by §a%ability%%.'],
        }],
        5: [{
          name: 'Enderman Slayer',
          desc: ['§7Gain +§a%ability%% §7more combat xp from endermen'],
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
          name: 'Amplified Healing',
          desc: ['§7Increase all healing by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Zombie Arm',
          desc: ['§7Increase the health and range of the Zombie sword by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Reaper Soul',
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
          ability: [0, 0, 0, 0.2, 0.25],
        },
        3: {},
        4: {
          ability: 3,
        },
      },
      abilities: {
        0: [{
          name: 'Last Stand',
          desc: ['§7While less than 15% HP, deal §a%ability%% §7more damage'],
        }],
        1: [],
        2: [{
          name: 'Ricochet',
          desc: ['§7Your iron plating causes §a%ability%% §7of attacks to ricochet and hit the attacker'],
        }],
        3: [],
        4: [{
          name: 'Toss',
          desc: ['§7Every 5 hits, throw the enemy up into the air and deal %%ability% damage (10s cooldown)'],
          descFn: ({ round }, level, multiplier) => 200 + round(level * multiplier),
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
          name: 'Odyssey',
          desc: ['§2Mythological creatures §7you find and burrows you dig scale in §cdifficulty §7and §6rewards §7based on your equipped Griffin\'s rarity.'],
        }],
        1: [{
          name: 'Legendary Constitution',
          desc: ['§7Permanent §cRegeneration %regeneration% §7and §4Strength %strength%§7.'],
        }],
        2: [],
        3: [{
          name: 'Perpetual Empathy',
          desc: ['§7Heal nearby players for §a%ability%% §7of the final damage you receive.', '§8Excludes other griffins.'],
        }],
        4: [{
          name: 'King of Kings',
          desc: ['§7Gain §c+%ability%% §c❁ Strength §7when above §c85% §7health.'],
          descFn: ({ round }, level, multiplier) => round(1 + (level * multiplier)),
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
          name: 'Lazerbeam',
          desc: [`§7Zap your enemies for §b%ability%x §7your §b${symbols.intelligence} Intelligence §7every §a3s`],
        }],
        1: [],
        2: [{
          name: 'Enchanting Exp Boost',
          desc: ['§7Boosts your Enchanting exp by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Mana Pool',
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
          name: 'Ridable',
          desc: ['§7Right-click your summoned pet to ride it!'],
        }],
        1: [],
        2: [{
          name: 'Run',
          desc: ['§7Increase the speed of your mount by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Ride Into Battle',
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
          bonus_attack_speed: 0.1,
        },
      },
      abilities: {
        0: [{
          name: 'Scavenger',
          desc: ['§7Gain +§a%ability% §7coins per monster kill'],
        }],
        1: [],
        2: [{
          name: 'Finder',
          desc: ['§7Increases the chance for monsters to drop their armor by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Fury Claws',
          desc: [`§7Grants %bonus_attack_speed%§e${symbols.attack_speed} Bonus Attack Speed`],
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
          ability: [0.2, 0.2, 0.25, 0.3, 0.3],
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
          name: 'Slimy Minions',
          desc: ['§7Slime minions work §a%ability%% §7faster while on your island'],
        }],
        1: [],
        2: [{
          name: 'Salt Blade',
          desc: ['§7Deal §a%ability%% §7more damage to slimes'],
        }],
        3: [],
        4: [{
          name: 'Hot Ember',
          desc: ['§7Buffs the stats of Ember Armor by §a%ability%%'],
          func: () => ([]), // TODO
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
          name: 'Rekindle',
          desc: ['§7Before death, become §eimmune §7and gain §c%ability% §7seconds', '§73 minutes cooldown'],
          descFn: ({ round }, level, multiplier, rarity) => {
            const startStrength = rarity > 3 ? 15 : 10;
            const multStrength = rarity > 3 ? 0.15 : 0.1;
            return `${startStrength + round(level * multStrength)} ${symbols.strength} Strength §7for ${2 + round(level * 0.02)}`;
          },
        },
        {
          name: 'Fourth Flare',
          desc: ['§7On 4th melee strike, §6ignite §7mobs, dealing §c%ability% §7seconds'],
          descFn: ({ round, floor }, level, multiplier, rarity) => {
            const multDamage = rarity > 3 ? 0.14 : 0.12;
            return `${1 + round(level * multDamage)}x §7your §9${symbols.crit_damage} Crit Damage §7each second for §a${2 + floor(level * 0.04, 0)}`;
          },
        }],
        4: [{
          name: 'Magic Bird',
          desc: ['§7You may always fly on your private island'],
        },
        {
          name: 'Eternal Coins',
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
          name: 'Bacon Farmer',
          desc: ['§7Pig minions work §a%ability%% §7faster while on your island'],
        }],
        1: [],
        2: [{
          name: 'Pork Master',
          desc: [`§7Buffs the Pigman sword by §a%damage% §c${symbols.strength} Damage and §7§a%strength% §c${symbols.strength} Strength`],
        }],
        3: [],
        4: [{
          name: 'Giant Slayer',
          desc: ['§7Deal §a%ability%% §7extra damage to monsters level 100 and up'],
        }],
      },
    },
    RAT: {
      name: 'Rat',
      statModifiers: {
        strength: 0.5,
        health: 1,
        crit_damage: 0.1,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {},
        3: {
          ability: 1, // placeholder value
        },
        4: {},
      },
      abilities: {
        0: [{
          name: 'Morph',
          desc: ['§7Right-click your summoned pet to morph into it!'],
        }],
        1: [],
        2: [{
          name: 'CHEESE!',
          desc: ['§7As a Rat, you smell §e§lCHEESE §r§7nearby! Yummy!'],
        }],
        3: [{
          name: "Rat's Blessing",
          desc: ['§7Has a chance to grant a random player §b+%ability% §7seconds after finding a yummy piece of Cheese! If the player gets a drop during this buff, you have a §a20% §7to get it too.'],
          descFn: ({ round, floor }, level) => {
            const multMf = 0.05;
            const multTime = 0.2;
            return `${floor(2 + level * multMf)}${symbols.magic_find} Magic Find §7for §a${round(20 + level * multTime)}`;
          },
        }],
        4: [],
      },
    },
    SKELETON_HORSE: {
      name: 'Skeleton Horse',
      lore: '§7Run around town on your scary, yet trusty, steed!',
      statModifiers: {
        speed: 0.5,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {
          ability: 1.5,
        },
        3: {},
        4: {
          ability: 0.4,
        },
      },
      abilities: {
        0: [{
          name: 'Ridable',
          desc: ['§7Right-click your summoned pet to ride it!'],
        }],
        1: [],
        2: [{
          name: 'Run',
          desc: ['§7Increase the speed of your mount by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Ride Into Battle',
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
          ability: [0.1, 0.15, 0.2, 0.2, 0.2],
        },
        1: {},
        2: {
          ability: [0, 0, 0.15, 0.17, 0.2],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: 'Bone Arrows',
          desc: ['§7Increase arrow damage by §a%ability%% §7which is tripled while in dungeons'],
        }],
        1: [],
        2: [{
          name: 'Combo',
          desc: [`§7Gain a combo stack for every bow hit granting +§a3 §c${symbols.strength} Strength§7. Max §a%ability% §7stacks, stacks disappear after 8 seconds`],
        }],
        3: [],
        4: [{
          name: 'Skeletal Defense',
          desc: [`§7Your skeleton shoots an arrow dealing §a30x §7your §9${symbols.crit_damage} Crit Damage §7when a mob gets close to you (15s cooldown)`],
        }],
      },
    },
    SNOWMAN: {
      name: 'Snowman',
      lore: '§7Fight alongside your pet Snowman!',
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
          name: 'Blizzard',
          desc: ['§7Slow all enemies within §a%ability% §7blocks'],
          descFn: ({ round }, level, multiplier) => 4 + round(level * multiplier),
        }],
        1: [],
        2: [{
          name: 'Frostbite',
          desc: ['§7Your freezing aura slows enemy attacks causing you to take §a%ability%% §7reduced damage'],
          descFn: ({ floor }, level, multiplier) => floor(level * multiplier, 1),
        }],
        3: [],
        4: [{
          name: 'Snow Cannon',
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
          name: 'One With The Spider',
          desc: [`§7Gain §a%ability% §c${symbols.strength} Strength §7for every nearby spider`, '§8Max 10 spiders'],
        }],
        1: [],
        2: [{
          name: 'Web-weaver',
          desc: ['§7Upon hitting a monster it becomes slowed by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Spider Whisperer',
          desc: ['§7Spider and tarantula minions work §a%ability%% §7faster while on your island'],
        }],
      },
    },
    SPIRIT: {
      name: 'Spirit',
      statModifiers: {
        intelligence: 1,
        speed: 0.3,
      },
      abilityModifiers: {
        0: {},
        1: {
          ability: 0.45,
        },
        2: {},
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: 'Spirit Assistance',
          desc: ['§7Spawns and assists you when you are ghost in dungeons.'],
        }],
        1: [],
        2: [{
          name: 'Spirit Cooldowns',
          desc: ['§7Reduces the cooldown of your ghost abilities in dungeons by §a%ability%%§7.'],
          descFn: ({ round }, level, multiplier) => round(5 + level * multiplier),
        }],
        3: [],
        4: [{
          name: '§6Half Life',
          desc: ['§7If you are the first player to die in a dungeon, the score penalty for that death is reduced to §a1§7.'],
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
          name: 'Webbed Cells',
          desc: ['§7Anti-healing is §a%ability%% §7less effective against you'],
        }],
        1: [],
        2: [{
          name: 'Eight Legs',
          desc: ['§7Decreases the mana cost of Spider, Tarantula and Thorn\'s boots by §a%ability%%'],
        }],
        3: [],
        4: [{
          name: 'Arachnid Slayer',
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
        ferocity: 0.25,
      },
      abilityModifiers: {
        0: {
          ability: [0.15, 0.33, 0.33, 0.33, 0.5],
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
          name: 'Merciless Swipe',
          desc: [`§7Gain §c+%ability%% ${symbols.ferocity} Ferocity.`],
          func: () => ([]), // TODO
        }],
        1: [],
        2: [{
          name: 'Hemorrhage',
          desc: ['§7Melee attacks reduce healing by §6%ability%% §7for §a10s'],
        }],
        3: [],
        4: [{
          name: 'Apex Predator',
          desc: ['§7Deal §c+%ability%% §7damage against targets with no other mobs within §a15 §7blocks'],
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
          name: 'Turtle Tactics',
          desc: [`§7Gain §a+%ability%% ${symbols.defense} Defense`],
          func: () => ([]), // TODO
        }],
        1: [],
        2: [{
          name: 'Genius Amniote',
          desc: [`§7Gain §a+%defense% ${symbols.defense} Defense §7and regen §c+%health%${symbols.health} §7per second when near or in water`],
        }],
        3: [],
        4: [{
          name: 'Unflippable',
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
          name: 'Alpha Dog',
          desc: ['§7Take §a%ability%% §7less damage from wolves'],
        }],
        1: [],
        2: [{
          name: 'Pack Leader',
          desc: [`§7Gain §a%ability% §9 ${symbols.crit_damage} Crit Damage §7for every nearby wolf monsters`, '§8Max 10 wolves'],
        }],
        3: [],
        4: [{
          name: 'Combat Exp Boost',
          desc: ['§7Boosts your Combat exp by §a%ability%%'],
        }],
      },
    },
    GRANDMA_WOLF: {
      name: 'Grandma Wolf',
      statModifiers: {
        health: 1,
        strength: 0.25,
      },
      abilityModifiers: {
        0: {
          ability_1: 0.02,
          ability_2: 0.02,
          ability_3: 0.02,
          ability_4: 0.02,
          ability_5: 0.01,
          ability_6: 0.01,
        },
        1: {},
        2: {},
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: 'Kill Combo',
          desc: [
            '§7Gain buffs for combo kills.',
            '§7Effects stack as you increase',
            '§7your combo. This pet does not',
            '§7need to be spawned for combos to',
            '§7be active!',
            '',
            '§a5 Combo §8(lasts §a%ability_1%s§8)',
            `§8+§b3% §b${symbols.magic_find} Magic Find`,
            '§a10 Combo §8(lasts §a%ability_2%s§8)',
            '§8+§610 §7coins per kill',
            '§a15 Combo §8(lasts §a%ability_3%s§8)',
            `§8+§b3% §b${symbols.magic_find} Magic Find`,
            '§a20 Combo §8(lasts §a%ability_4%s§8)',
            '§8+§315% §7Combat Exp',
            '§a25 Combo §8(lasts §a%ability_5%s§8)',
            `§8+§b3% §b${symbols.magic_find} Magic Find`,
            '§a30 Combo §8(lasts §a%ability_6%s§8)',
            '§8+§610 §7coins per kill',
          ],
          descFn: (util, level, multiplier, rarity, stat) => {
            const x = {
              ability_1: Math.floor((8 + level * multiplier) * 10) / 10,
              ability_2: Math.floor((6 + level * multiplier) * 10) / 10,
              ability_3: Math.floor((4 + level * multiplier) * 10) / 10,
              ability_4: Math.floor((3 + level * multiplier) * 10) / 10,
              ability_5: Math.floor((3 + level * multiplier) * 10) / 10,
              ability_6: Math.floor((2 + level * multiplier) * 10) / 10,
            };

            return x[stat];
          },
        }],
        1: [],
        2: [],
        3: [],
        4: [],
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
          ability: [0.1, 0.2, 0.25, 0.25, 0.25],
        },
        1: {},
        2: {
          ability: 0.25,
        },
        3: {},
        4: {
          ability: 0.2,
        },
      },
      abilities: {
        0: [{
          name: 'Chomp',
          desc: ['§7Gain +§a%ability% §7hp per zombie kill'],
        }],
        1: [],
        2: [{
          name: 'Rotten Blade',
          desc: ['§7Deal §a%ability%% §7more damage to zombies'],
        }],
        3: [],
        4: [{
          name: 'Living Dead',
          desc: ['§7Increases the defense of all undead armor sets by §a%ability%%'],
          func: () => ([]), // TODO
        }],
      },
    },
    GIRAFFE: {
      name: 'Giraffe',
      statModifiers: {
        health: 1,
        crit_damage: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: [0.1, 0.15, 0.15, 0.2, 0.25],
        },
        1: {},
        2: {
          strength: [0, 0, 0.4, 0.5, 0.5],
          crit_damage: [0, 0, 0.1, 0.25, 0.4],
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: 'Good Heart',
          desc: [`§7Regen §c%ability% ${symbols.health} §7per second`],
        }],
        1: [],
        2: [{
          name: 'Higher Ground',
          desc: [`§7Grants §c+%strength% ${symbols.strength} Strength §7and §9+%ability% ${symbols.crit_damage} Crit Damage §7when mid air or jumping`],
          descFn: ({ round }, level, multiplier, rarity) => {
            const cdMult = [0, 0, 0.1, 0.25, 0.4][rarity];
            return round(level * cdMult + 20);
          },
        }],
        3: [],
        4: [{
          name: 'Long Neck',
          desc: ['§7See enemies from afar and gain §a%ability%% §7dodge chance'],
        }],
      },
    },
    LION: {
      name: 'Lion',
      statModifiers: {
        strength: 0.5,
        speed: 0.25,
        ferocity: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: [0.025, 0.05, 0.1, 0.15, 0.2],
        },
        1: {},
        2: {
          ability: [0, 0, 0.75, 1, 1],
        },
        3: {},
        4: {
          ability: 0.15,
        },
      },
      abilities: {
        0: [{
          name: 'Primal Force',
          desc: [`§7Adds §c+%ability%${symbols.strength} Damage §7to your weapons`],
        }],
        1: [],
        2: [{
          name: 'First Pounce',
          desc: ['§7First Strike, Triple-Strike, and §d§lCombo §r§7are §a%ability%% §7more effective.'],
        }],
        3: [],
        4: [{
          name: 'King of the Jungle',
          desc: [`§7Deal §c+%ability%% ${symbols.strength} Damage §7against mobs that have attacked you.`],
        }],
      },
    },
    MONKEY: {
      name: 'Monkey',
      statModifiers: {
        speed: 0.2,
        intelligence: 0.5,
      },
      abilityModifiers: {
        0: {
          ability: [0.4, 0.5, 0.5, 0.6, 0.6],
        },
        1: {},
        2: {
          ability: [0, 0, 0.8, 1, 1],
        },
        3: {},
        4: {
          ability: 0.5,
        },
      },
      abilities: {
        0: [{
          name: 'Treeborn',
          desc: [`§7Grants §a+%ability% §6${symbols.fortune} Foraging Fortune§7, which increases your chance at double logs`],
          func: () => ([]), // TODO
        }],
        1: [],
        2: [{
          name: 'Vine Swing',
          desc: [`§7Gain +§a%ability% §f${symbols.speed} Speed §7while in The Park`],
        }],
        3: [],
        4: [{
          name: 'Evolved Axes',
          desc: ['§7Reduce the cooldown of Jungle Axe and Treecapitator by §a%ability%%'],
        }],
      },
    },
    OCELOT: {
      name: 'Ocelot',
      statModifiers: {
        speed: 0.5,
        ferocity: 0.1,
      },
      abilityModifiers: {
        0: {
          ability: [0.4, 0.5, 0.5, 0.6, 0.6],
        },
        1: {},
        2: {
          ability: 0.3,
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: 'Foraging Exp Boost',
          desc: ['§7Boosts your Foraging exp by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Tree Hugger',
          desc: ['§7Foraging minions work §a%ability%% §7faster while on your island'],
        }],
        3: [],
        4: [{
          name: 'Tree Essence',
          desc: ['§7Gain a §a%ability%% §7chance to get exp from breaking a log'],
        }],
      },
    },
    BABY_YETI: {
      name: 'Baby Yeti',
      statModifiers: {
        intelligence: 0.75,
        strength: 0.4,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {},
        3: {
          first: 0.5,
          second: 1,
        },
        4: {
          ability: 1,
        },
      },
      abilities: {
        0: [],
        1: [],
        2: [],
        3: [{
          name: 'Cold Breeze',
          desc: [`§7Gives §a%first% §c${symbols.strength} Strength §7and §9${symbols.crit_damage} Crit Damage §7when near snow`],
        },
        {
          name: 'Ice Shields',
          desc: [`§7Gain §a%second%% §7of your strength as §a${symbols.defense} Defense`],
        }],
        4: [{
          name: 'Yeti Fury',
          desc: [`§7Buff the Yeti sword by §a%ability% §c${symbols.strength} Damage §7and §9${symbols.intelligence} Intelligence`],
        }],
      },
    },
    BLUE_WHALE: {
      name: 'Blue Whale',
      statModifiers: {
        health: 2,
      },
      abilityModifiers: {
        0: {
          ability: [0.5, 1, 1.5, 2, 2.5],
        },
        1: {},
        2: {
          defense: 0.03,
          health: [0, 0, 30, 25, 20],
        },
        3: {},
        4: {
          ability: 0.2,
        },
      },
      abilities: {
        0: [{
          name: 'Ingest',
          desc: [`§7All potions heal §c+%ability%${symbols.health}`],
        }],
        1: [],
        2: [{
          name: 'Bulk',
          desc: [`§7Gain §a%defense% ${symbols.defense} Defense §7per §c%health% Max ${symbols.health} Health`],
          func: () => ([]), // TODO
        }],
        3: [],
        4: [{
          name: 'Archimedes',
          desc: [`§7Gain §c+%ability%% Max ${symbols.health} Health`],
          func: () => ([]), // TODO
        }],
      },
    },
    DOLPHIN: {
      name: 'Dolphin',
      statModifiers: {
        sea_creature_chance: 0.05,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {
          ability: [0.03, 0.04, 0.05, 0.05, 0.05],
          max: [15, 20, 25, 25, 25],
        },
        1: {},
        2: {
          ability: [0, 0, 0.07, 0.1, 0.1],
        },
        3: {},
        4: {},
      },
      abilities: {
        0: [{
          name: 'Pod Tactics',
          desc: ['§7Increases your fishing speed by §a%ability%% §7for each nearby player within 10 blocks up to §a%max%%'],
        }],
        1: [],
        2: [{
          name: 'Echolocation',
          desc: ['§7Increases sea creatures catch chance by §a%ability%%'],
          func: () => ([]), // TODO
        }],
        3: [],
        4: [{
          name: 'Splash Surprise',
          desc: ['§7Stun sea creatures for §a5s §7after fishing them up'],
        }],
      },
    },
    FLYING_FISH: {
      name: 'Flying Fish',
      statModifiers: {
        defense: 0.5,
        strength: 0.5,
      },
      abilityModifiers: {
        0: {
          ability: [0.3, 0.3, 0.4, 0.4, 0.4],
        },
        1: {},
        2: {
          ability: [0, 0, 0.4, 0.5, 0.5],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: 'Quick Reel',
          desc: ['§7Increases fishing speed by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Water Bender',
          desc: [`§7Gives §a%ability% §c${symbols.strength} Strength §7and §a${symbols.defense} Defense §7when near water`],
        }],
        3: [],
        4: [{
          name: 'Deep Sea Diver',
          desc: ['§7Increases the stats of Diver Armor by §a%ability%%'],
          func: () => ([]), // TODO
        }],
      },
    },
    MEGALODON: {
      name: 'Megalodon',
      statModifiers: {
        strength: 0.5,
        magic_find: 0.1,
        ferocity: 0.05,
      },
      abilityModifiers: {
        0: {
          ability: 0.25,
        },
        1: {},
        2: {
          ability: 0.2,
        },
        3: {},
        4: {
          ability: 0.5,
        },
      },
      abilities: {
        0: [{
          name: 'Blood Scent',
          desc: [`§7Deal up to §c+%ability%% ${symbols.strength} §7Damage based on the enemy's missing health`],
        }],
        1: [],
        2: [{
          name: 'Enhanced scales',
          desc: ['§7Increases the stats of Shark Armor by §a%ability%%'],
          func: () => ([]), // TODO
        }],
        3: [],
        4: [{
          name: 'Feeding frenzy',
          desc: [`§7On kill gain §c%ability%${symbols.strength} Damage §7and §f${symbols.speed} Speed §7for 5 seconds`],
        }],
      },
    },
    SQUID: {
      name: 'Squid',
      statModifiers: {
        health: 0.5,
        intelligence: 0.5,
      },
      abilityModifiers: {
        0: {
          ability: [0.5, 0.75, 0.75, 1, 1],
        },
        1: {},
        2: {
          damage: [0, 0, 0.3, 0.4, 0.4],
          strength: [0, 0, 0.1, 0.2, 0.2],
        },
        3: {},
        4: {
          ability: 0.3,
        },
      },
      abilities: {
        0: [{
          name: 'More Ink',
          desc: ['§7Gain a §a%ability%% §7chance to get double drops from squids'],
        }],
        1: [],
        2: [{
          name: 'Ink Specialty',
          desc: [`§7Buffs the Ink Wand by §a%damage% §c${symbols.strength} Damage §7and §a%strength% §c${symbols.strength} Strength`],
        }],
        3: [],
        4: [{
          name: 'Fishing Exp Boost',
          desc: ['§7Boosts your Fishing exp by §a%ability%%'],
        }],
      },
    },
    JELLYFISH: {
      name: 'Jellyfish',
      statModifiers: {
        health: 2,
      },
      abilityModifiers: {
        0: {
          ability: 1,
        },
        1: {},
        2: {},
        3: {},
        4: {
          ability: 0.5,
        },
      },
      abilities: {
        0: [{
          name: 'Radiant Regeneration',
          desc: ['§7While in dungeons, increase your base health regen by §a%ability%% §7and heals players within 8 blocks by up to 10hp/s'],
        }],
        1: [],
        2: [{
          name: 'Hungry Healer',
          desc: ['§7While in dungeons, for every 1000 you heal teammates apply the §aenchanted golden apple §7effect to all players within 10 blocks (10s cooldown)'],
        }],
        3: [],
        4: [{
          name: 'Powerful Potions',
          desc: ['§7While in dungeons, increase the effectiveness of Instant Health and Mana splash potions by §a%ability%%'],
        }],
      },
    },
    PARROT: {
      name: 'Parrot',
      statModifiers: {
        crit_damage: 0.1,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {
          ability: 1,
        },
        1: {},
        2: {
          ability: 0.35,
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: 'Flamboyant',
          desc: ['§7Adds §a%ability% §7levels to intimidation accessories'],
          descFn: ({ round }, level, multiplier) => Math.max(round(level * multiplier, 0), 1),
        }],
        1: [],
        2: [{
          name: 'Repeat',
          desc: ['§7Boosts potion duration by §a%ability%%'],
          descFn: ({ round }, level, multiplier) => round(5 + (level * multiplier)),
        }],
        3: [],
        4: [{
          name: 'Bird Discourse',
          desc: [`§7Gives §c+${symbols.strength}%ability% Strength §7to players within §a20 §7blocks`, '§7Doesn\'t stack'],
          descFn: ({ round }, level, multiplier) => round(5 + (level * multiplier)),
        }, {
          name: 'Parrot Feather Infusion',
          desc: ['§7When summoned or in your pets menu, boost the duration of consumed §cGod Potions§7 by §e%ability%%'],
        }],
      },
    },
    SHEEP: {
      name: 'Sheep',
      statModifiers: {
        ability_damage: 0.2,
        intelligence: 1,
      },
      abilityModifiers: {
        0: {
          ability: [0.05, 0.05, 0.125, 0.2, 0.2],
        },
        1: {},
        2: {
          ability: 0.1,
        },
        3: {},
        4: {
          ability: 0.25,
        },
      },
      abilities: {
        0: [{
          name: 'Mana Saver',
          desc: ['§7Reduces the mana cost of abilites by §a%ability%%'],
        }],
        1: [],
        2: [{
          name: 'Overheal',
          desc: ['§7Gives a §a%ability%% §7shield after not taking damage for 10s'],
        }],
        3: [],
        4: [{
          name: 'Dungeon Wizard',
          desc: ['§7Increases your total mana by §a%ability%% §7while in dungeons'],
        }],
      },
    },
    JERRY: {
      name: 'Jerry',
      statModifiers: {
        intelligence: -1,
      },
      abilityModifiers: {
        0: {
          first: 50,
          second: 100,
        },
        1: {},
        2: {},
        3: {},
        4: {
          ability: [0.1, 0.1, 0.1, 0.1, 0.5],
        },
        5: {},
      },
      abilities: {
        0: [{
          name: 'Jerry',
          desc: ['§7Gain §a%ability%% §7chance to deal your regular damage'],
        },
        {
          name: 'Jerry',
          desc: ['§7Gain §a%ability%% §7chance to receive a normal amount of drops from mobs'],
        }],
        1: [],
        2: [],
        3: [],
        4: [{
          name: 'Jerry',
          desc: ['§7Actually adds §c%ability% damage §7to the Aspect of the Jerry.'],
          descFn: (level, multiplier) => Math.floor(level * multiplier),
          func: () => ([]), // TODO
        }],
        5: [{
          name: '§6Jerry',
          desc: ['§7Tiny chance to find Jerry Candies when killing mobs'],
        }],
      },
    },
    BAL: {
      name: 'Bal',
      statModifiers: {
        strength: 0.25,
        ferocity: 0.1,
      },
      abilityModifiers: {
        0: {},
        1: {},
        2: {
          ability: [0.1, 0.1],
        },
        3: {
          ability: [0.15],
          4: {},
        },
        abilities: {
          0: [{
            name: 'Protective Skin',
            desc: ['§7Gives Heat immunity'],
          }],
          1: [],
          2: [{
            name: 'Fire Whip',
            desc: ['§7Every 5s while in combat the Balrog will strike nearby enemies with his fire whip dealing §a%ability%% of your damage as True Damage'],
            descFn: (level, multiplier) => Math.floor(level * multiplier),
            func: () => ([]), // TODO
          }],
          3: [{
            name: 'Made of Lava',
            desc: ['§7Gain §a%ability%% on ALL stats when inside the Magma Fields'],
            descFn: (level, multiplier) => Math.floor(level * multiplier),
            func: () => ([]), // TODO
          }],
          4: [],
        },
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
    MITHRIL_GOLEM: {
      head: 'c1b2dfe8ed5dffc5b1687bc1c249c39de2d8a6c3d90305c95f6d1a1a330a0b1',
      type: 'mining',
    },
    GRANDMA_WOLF: {
      head: '4e794274c1bb197ad306540286a7aa952974f5661bccf2b725424f6ed79c7884',
      type: 'combat',
    },
    RAT: {
      head: 'a8abb471db0ab78703011979dc8b40798a941f3a4dec3ec61cbeec2af8cffe8',
      type: 'combat',
    },
  },

  petSkins: {
    ENDERMAN: {
      ENDERMAN: {
        name: 'Spooky',
        head: 'ea84cc8818c293484fdaafc8fa2f0bf39e55733a247d68023df2c6c6b9b671d0',
      },
      ENDERMAN_SLAYER: {
        name: 'Void Conqueror',
        head: '8fff41e1afc597b14f77b8e44e2a134dabe161a1526ade80e6290f2df331dc11',
      },
    },
    ENDERMITE: {
      ENDERMITE_RADIANT: {
        name: 'Radiant',
        head: '3840ad985c0b08811ab0a137ca736119d079dbf2143462145eb62b6ecbd2d7cc',
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
      RABBIT_AQUAMARINE: {
        name: 'Aquamarine',
        head: '35a2119d122961852c010c1007ab2aff95b4bbeb74407463f6d2e1ff0792c812',
      },
      RABBIT_ROSE: {
        name: 'Rose',
        head: 'd7cddf5b20cb50d6600e5333c6bb3fb15b4741f17e3675fc2bfc09c2cd09e619',
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
      SHEEP_NEON_YELLOW: {
        name: 'Neon Yellow',
        head: '94263428c23da9165b2639a8f2428ff4835227945c9e1038461cf644d67cc82a',
      },
      SHEEP_NEON_RED: {
        name: 'Neon Red',
        head: '4918be142a20b2b39bc582f421f6ae87b3184b5c9523d16fbe6d69530107886a',
      },
      SHEEP_NEON_BLUE: {
        name: 'Neon Blue',
        head: 'e55b3fe9311c99342ea565483cbf9e969a258faf7afa30270fb9a0929377acfd',
      },
      SHEEP_NEON_GREEN: {
        name: 'Neon Green',
        head: '2c14d66911554bd0882339074bf6b8110c2d3509b69e7a6144e4d5a7164bacc8',
      },
    },
    SILVERFISH: {
      SILVERFISH: {
        name: 'Fortified',
        head: 'd8552ff591042c4a38f8ba0626784ae28c4545a97d423fd9037c341035593273',
      },
      SILVERFISH_FOSSILIZED: {
        name: 'Fossilized',
        head: 'ca3a363368ed1e06cee3900717f062e02ec39aee1747675392255b48f7f83600',
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
      ELEPHANT_RED: {
        name: 'Red',
        head: 'ba5c66ec66cb6b4b5550085f583b4e5c1cee5247bec5fbcc5c318c30c66cab42',
      },
      ELEPHANT_PURPLE: {
        name: 'Purple',
        head: '5ff9df290b6c5a4984fc6e516605f9816b9882f7bf04db08d3f7ee32d1969a44',
      },
      ELEPHANT_GREEN: {
        name: 'Green',
        head: '360c122ade5b2fedca14aa78c834a7b0ac9cb5da2a0c93112163086f90c13b68',
      },
      ELEPHANT_MONOCHROME: {
        name: 'Monochrome',
        head: '4bdf0f628c05e86cabdee2f5858dd5def7f8b8d940cbf25f9937e2ffb53432f4',
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
    MONKEY: {
      MONKEY_GOLDEN: {
        name: 'Golden',
        head: 'e9281c4d87d68526b0749d4361e6ef786c8a35717aa053da704b1d53410d37a6',
      },
      MONKEY_GORILLA: {
        name: 'Gorilla',
        head: 'c3eb3e37e9873bfc176b9ed8ef4fbef833de144546bfaefdf24863c3eb87bb86',
      },
    },
    SKELETON_HORSE: {
      HORSE_ZOMBIE: {
        name: 'Zombie',
        head: '578211e1b4d99d1c7bfda4838e48fc884c3eae376f58d932bc2f78b0a919f8e7',
      },
    },
    ENDER_DRAGON: {
      DRAGON_NEON_BLUE: {
        name: 'Neon Blue',
        head: '96a4b9fbcf8c3e7e1232e57d6a2870ba3ea30f76407ae1197fd52e9f76ca46ac',
      },
      DRAGON_NEON_PURPLE: {
        name: 'Neon Purple',
        head: '54bdf5ba6289b29e27c57db1ec7f76151c39492d409268e00a9838e8c963159',
      },
      DRAGON_NEON_RED: {
        name: 'Neon Red',
        head: 'e05c9b4f4218677c5b4bcc9c7d9e29e18d1684a536781fede1280fc5e6961538',
      },
    },
    BLUE_WHALE: {
      WHALE_ORCA: {
        name: 'Orca',
        head: 'b008ca9c00cecf499685030e8ef0c230a32908619ce9dc10690b69111591faa1',
      },
    },
    CHICKEN: {
      CHICKEN_BABY_CHICK: {
        name: 'Baby Chick',
        head: '1bde55ed54cb5c87661b86c349186a9d5baffb3cb934b449a2d329e399d34bf',
      },
    },
    BLACK_CAT: {
      BLACK_CAT_IVORY: {
        name: 'Ivory',
        head: 'f51b17d7ded6c7e8f3b2dac12378a6fc4e9228b911986f64c8af45837ae6d9e1',
      },
      BLACK_CAT_ONYX: {
        name: 'Onyx',
        head: 'be924115d3a8bbacfd4fafb6cc70f99a2f7580e4583a50fa9b9c285a98ac0c56',
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
    PET_ITEM_TOY_JERRY: {
      name: 'Jerry 3D Glasses',
      rarity: 'LEGENDARY',
      description: '§7Upgrades a Jerry pet from §6Legendary §7to §dMythic §7and granting it a new perk!',
    },
    REAPER_GEM: {
      name: 'Reaper Gem',
      rarity: 'LEGENDARY',
      description: `§7Gain §c8 ${symbols.ferocity} Ferocity §7for 5s on kill`,
    },
    PET_ITEM_FLYING_PIG: {
      name: 'Flying Pig',
      tier: 'UNCOMMON',
      description: '§7Grants your pig pet the ability to fly while on your private island! You also don\'t need to hold a carrot on a stick to control your pig.',
    },
  },
};
