module.exports = {
  petRarityOffset: {
    common: 0,
    uncommon: 6,
    rare: 11,
    epic: 16,
    legendary: 20,
  },

  petValue: {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5,
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
      type: 'Combat Pet',
      statModifiers: {
        strength: 0.25,
        intelligence: 0.5,
        speed: 0.1,
      },
      abilities: {
        1: {

        },
      },
    },
  },

  petItems: {
    PET_ITEM_ALL_SKILLS_BOOST_COMMON: {
      description: '§7Gives +§a10% §7pet exp for all skills',
    },
    PET_ITEM_BIG_TEETH_COMMON: {
      description: '§7Increases §9Crit Chance §7by §a5%',
      stats: {
        crit_chance: 5,
      },
    },
    PET_ITEM_IRON_CLAWS_COMMON: {
      description: "§7Increases the pet's §9Crit Damage §7by §a40% §7and §9Crit Chance §7by §a40%",
    },
    PET_ITEM_SHARPENED_CLAWS_UNCOMMON: {
      description: '§7Increases §9Crit Damage §7by §a15%',
      stats: {
        crit_damage: 15,
      },
    },
    PET_ITEM_HARDENED_SCALES_UNCOMMON: {
      description: '§7Increases §aDefense §7by §a25',
      stats: {
        defense: 25,
      },
    },
    PET_ITEM_BUBBLEGUM: {
      description: '§7Your pet fuses its power with placed §aOrbs §7to give them §a2x §7duration',
    },
    PET_ITEM_LUCKY_CLOVER: {
      description: '§7Increases §bMagic Find §7by §a7',
      stats: {
        magic_find: 7,
      },
    },
    PET_ITEM_TEXTBOOK: {
      description: "§7Increases the pet's §bIntelligence §7by §a100%",
    },
    PET_ITEM_SADDLE: {
      description: '§7Increase horse speed by §a50% §7 and jump boost by §a100%',
    },
    PET_ITEM_EXP_SHARE: {
      description: "§7While unequipped this pet gains §a25% §7of the equipped pet's xp, this is §7split between all pets holding the item.",
    },
    PET_ITEM_TIER_BOOST: {
      description: '§7Boosts the §ararity §7of your pet by 1 tier!',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_COMMON: {
      description: '§7Gives +§a20% §7pet exp for Combat',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_UNCOMMON: {
      description: '§7Gives +§a30% §7pet exp for Combat',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_RARE: {
      description: '§7Gives +§a40% §7pet exp for Combat',
    },
    PET_ITEM_COMBAT_SKILL_BOOST_EPIC: {
      description: '§7Gives +§a50% §7pet exp for Combat',
    },
    PET_ITEM_FISHING_SKILL_BOOST_COMMON: {
      description: '§7Gives +§a20% §7pet exp for Fishing',
    },
    PET_ITEM_FISHING_SKILL_BOOST_UNCOMMON: {
      description: '§7Gives +§a30% §7pet exp for Fishing',
    },
    PET_ITEM_FISHING_SKILL_BOOST_RARE: {
      description: '§7Gives +§a40% §7pet exp for Fishing',
    },
    PET_ITEM_FISHING_SKILL_BOOST_EPIC: {
      description: '§7Gives +§a50% §7pet exp for Fishing',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_COMMON: {
      description: '§7Gives +§a20% §7pet exp for Foraging',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_UNCOMMON: {
      description: '§7Gives +§a30% §7pet exp for Foraging',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_RARE: {
      description: '§7Gives +§a40% §7pet exp for Foraging',
    },
    PET_ITEM_FORAGING_SKILL_BOOST_EPIC: {
      description: '§7Gives +§a50% §7pet exp for Foraging',
    },
    PET_ITEM_MINING_SKILL_BOOST_COMMON: {
      description: '§7Gives +§a20% §7pet exp for Mining',
    },
    PET_ITEM_MINING_SKILL_BOOST_UNCOMMON: {
      description: '§7Gives +§a30% §7pet exp for Mining',
    },
    PET_ITEM_MINING_SKILL_BOOST_RARE: {
      description: '§7Gives +§a40% §7pet exp for Mining',
    },
    PET_ITEM_MINING_SKILL_BOOST_EPIC: {
      description: '§7Gives +§a50% §7pet exp for Mining',
    },
    PET_ITEM_FARMING_SKILL_BOOST_COMMON: {
      description: '§7Gives +§a20% §7pet exp for Farming',
    },
    PET_ITEM_FARMING_SKILL_BOOST_UNCOMMON: {
      description: '§7Gives +§a30% §7pet exp for Farming',
    },
    PET_ITEM_FARMING_SKILL_BOOST_RARE: {
      description: '§7Gives +§a40% §7pet exp for Farming',
    },
    PET_ITEM_FARMING_SKILL_BOOST_EPIC: {
      description: '§7Gives +§a50% §7pet exp for Farming',
    },
  },
};
