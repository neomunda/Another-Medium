ServerEvents.recipes(event => {

///// Rock Knapping

// Flint Sword Head
event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "x"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_sword_blade",
    "Count": 1
  }
})

// Flint Axe Head
event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "xx",
    " x"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_axe_head",
    "Count": 1
  }
})

event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "xx",
    "x"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_axe_head",
    "Count": 1
  }
})

// Flint Pickaxe Head
event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "xxx"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_pickaxe_head",
    "Count": 1
  }
})

// Flint Shovel Head
event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "x"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_shovel_head",
    "Count": 1
  }
})

// Flint Hoe Head
event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "xx"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_hoe_head",
    "Count": 1
  }
})

// Flint Hammer Head
event.custom({
  "type": "overgeared:rock_knapping",
  "pattern": [
    "xxx",
    "xxx"
  ],
  "ingredient": {
    "item": "minecraft:flint"
  },
  "result": {
    "id": "overgeared:stone_hammer_head",
    "Count": 1
  }
})

///// Forging
/// Copper

// Copper Plate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_quality": false,
  "key": {
    "#": {
      "item": "minecraft:copper_ingot"
    }
  },
  "need_quenching": false,
  "pattern": [
    "#"
  ],
  "result": {
    "id": "create:copper_sheet"
  }
})

// Copper Sword Blade
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot"
    }
  },
  "pattern": [
    "#",
    "#"
  ],
  "result": {
    "id": "overgeared:copper_sword_blade"
  },
  "tier": "stone"
})

// Copper Axe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot"
    }
  },
  "pattern": [
    "##",
    "# "
  ],
  "result": {
    "id": "overgeared:copper_axe_head"
  },
  "tier": "stone"
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot"
    }
  },
  "pattern": [
    "##",
    " #"
  ],
  "result": {
    "id": "overgeared:copper_axe_head"
  },
  "tier": "stone"
})

// Copper Pickaxe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot"
    }
  },
  "pattern": [
    "###"
  ],
  "result": {
    "id": "overgeared:copper_pickaxe_head"
  },
  "tier": "stone"
})

// Copper Shovel Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot"
    }
  },
  "pattern": [
    "#"
  ],
  "result": {
    "id": "overgeared:copper_shovel_head"
  },
  "tier": "stone"
})

// Copper Hoe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot"
    }
  },
  "pattern": [
    "##"
  ],
  "result": {
    "id": "overgeared:copper_hoe_head"
  },
  "tier": "stone"
})

// Copper Hammer Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "minecraft:copper_block"
    },
    "C": {
      "item": "minecraft:copper_ingot"
    } 
  },
  "pattern": [
    "C#C"
  ],
  "result": {
    "count": 1,
    "id": "overgeared:copper_hammer_head"
  },
  "tier": "stone"
})

// Heavy Copper Helmet
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "minecraft:copper_block"
    }
  },
  "pattern": [
    "###",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:copper_helmet"
  },
  "tier": "stone"
})

// Heavy Coppper Chestplate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "minecraft:copper_block"
    }
  },
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:copper_chestplate"
  },
  "tier": "stone"
})

// Heavy Copper Leggings
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "minecraft:copper_block"
    }
  },
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:copper_leggings"
  },
  "tier": "stone"
})

// Heavy Copper Boots
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "minecraft:copper_block"
    }
  },
  "pattern": [
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:copper_boots"
  },
  "tier": "stone"
})

/// Gold

// Golden Plate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_quality": false,
  "key": {
    "#": {
      "item": "minecraft:gold_ingot"
    }
  },
  "need_quenching": false,
  "pattern": [
    "#"
  ],
  "result": {
    "id": "create:golden_sheet"
  }
})

// golden Sword Blade
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "kubejs:heated_gold_ingot"
    }
  },
  "pattern": [
    "#",
    "#"
  ],
  "result": {
    "id": "overgeared:golden_sword_blade"
  },
  "tier": "stone"
})

// golden Axe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "kubejs:heated_gold_ingot"
    }
  },
  "pattern": [
    "##",
    "# "
  ],
  "result": {
    "id": "overgeared:golden_axe_head"
  },
  "tier": "stone"
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "kubejs:heated_gold_ingot"
    }
  },
  "pattern": [
    "##",
    " #"
  ],
  "result": {
    "id": "overgeared:golden_axe_head"
  },
  "tier": "stone"
})

// golden Pickaxe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "kubejs:heated_gold_ingot"
    }
  },
  "pattern": [
    "###"
  ],
  "result": {
    "id": "overgeared:golden_pickaxe_head"
  },
  "tier": "stone"
})

// gGlden Shovel Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "kubejs:heated_gold_ingot"
    }
  },
  "pattern": [
    "#"
  ],
  "result": {
    "id": "overgeared:golden_shovel_head"
  },
  "tier": "stone"
})

// Golden Hoe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "kubejs:heated_gold_ingot"
    }
  },
  "pattern": [
    "##"
  ],
  "result": {
    "id": "overgeared:golden_hoe_head"
  },
  "tier": "stone"
})

// golden Helmet
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:golden_sheet"
    }
  },
  "pattern": [
    "###",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:golden_helmet"
  },
  "tier": "stone"
})

// golden Chestplate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:golden_sheet"
    }
  },
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:golden_chestplate"
  },
  "tier": "stone"
})

// golden Leggings
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:golden_sheet"
    }
  },
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:golden_leggings"
  },
  "tier": "stone"
})

// golden Boots
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:golden_sheet"
    }
  },
  "pattern": [
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:golden_boots"
  },
  "tier": "stone"
})

/// Iron

// Iron Plate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_quality": false,
  "key": {
    "#": {
      "item": "minecraft:iron_ingot"
    }
  },
  "need_quenching": false,
  "pattern": [
    "#"
  ],
  "result": {
    "id": "create:iron_sheet"
  }
})

// iron Sword Blade
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot"
    }
  },
  "pattern": [
    "#",
    "#"
  ],
  "result": {
    "id": "overgeared:iron_sword_blade"
  },
  "tier": "stone"
})

// iron Axe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot"
    }
  },
  "pattern": [
    "##",
    "# "
  ],
  "result": {
    "id": "overgeared:iron_axe_head"
  },
  "tier": "stone"
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot"
    }
  },
  "pattern": [
    "##",
    " #"
  ],
  "result": {
    "id": "overgeared:iron_axe_head"
  },
  "tier": "stone"
})

// iron Pickaxe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot"
    }
  },
  "pattern": [
    "###"
  ],
  "result": {
    "id": "overgeared:iron_pickaxe_head"
  },
  "tier": "stone"
})

// iron Shovel Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot"
    }
  },
  "pattern": [
    "#"
  ],
  "result": {
    "id": "overgeared:iron_shovel_head"
  },
  "tier": "stone"
})

// iron Hoe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot"
    }
  },
  "pattern": [
    "##"
  ],
  "result": {
    "id": "overgeared:iron_hoe_head"
  },
  "tier": "stone"
})

// iron Hammer Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "minecraft:iron_block"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    } 
  },
  "pattern": [
    "C#C"
  ],
  "result": {
    "count": 1,
    "id": "overgeared:steel_hammer_head"
  },
  "tier": "stone"
})

// Iron Helmet
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:iron_sheet"
    }
  },
  "pattern": [
    "###",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:iron_helmet"
  },
  "tier": "stone"
})

// Iron Chestplate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:iron_sheet"
    }
  },
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:iron_chestplate"
  },
  "tier": "stone"
})

// Iron Leggings
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:iron_sheet"
    }
  },
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:iron_leggings"
  },
  "tier": "stone"
})

// Iron Boots
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "create:iron_sheet"
    }
  },
  "pattern": [
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:iron_boots"
  },
  "tier": "stone"
})









/// Silver

// silver Sword Blade
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_silver_ingot"
    }
  },
  "pattern": [
    "#",
    "#"
  ],
  "result": {
    "id": "kubejs:silver_sword_blade"
  },
  "tier": "stone"
})

// silver Axe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_silver_ingot"
    }
  },
  "pattern": [
    "##",
    "# "
  ],
  "result": {
    "id": "kubejs:silver_axe_head"
  },
  "tier": "stone"
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_silver_ingot"
    }
  },
  "pattern": [
    "##",
    " #"
  ],
  "result": {
    "id": "kubejs:silver_axe_head"
  },
  "tier": "stone"
})

// silver Pickaxe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_silver_ingot"
    }
  },
  "pattern": [
    "###"
  ],
  "result": {
    "id": "kubejs:silver_pickaxe_head"
  },
  "tier": "stone"
})

// silver Shovel Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_silver_ingot"
    }
  },
  "pattern": [
    "#"
  ],
  "result": {
    "id": "kubejs:silver_shovel_head"
  },
  "tier": "stone"
})

// silver Hoe Head
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "hammering": 3,
  "key": {
    "#": {
      "item": "overgeared:heated_silver_ingot"
    }
  },
  "pattern": [
    "##"
  ],
  "result": {
    "id": "kubejs:silver_hoe_head"
  },
  "tier": "stone"
})

// silver Helmet
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "kubejs:silver_plate"
    }
  },
  "pattern": [
    "###",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:silver_helmet"
  },
  "tier": "stone"
})

// silver Chestplate
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "kubejs:silver_plate"
    }
  },
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:silver_chestplate"
  },
  "tier": "stone"
})

// silver Leggings
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "kubejs:silver_plate"
    }
  },
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:silver_leggings"
  },
  "tier": "stone"
})

// silver Boots
event.custom({
  "type": "overgeared:forging",
  "hammering": 3,
  "has_polishing": false,
  "key": {
    "#": {
      "item": "kubejs:silver_plate"
    }
  },
  "pattern": [
    "# #",
    "# #"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:silver_boots"
  },
  "tier": "stone"
})




////// Sanguine
// Sanguine Helmet 
event.custom({
  "type": "alloyed:forging_shaped",
  "key": {
    "A": {"item": "caverns_and_chasms:living_flesh"}
  },
  "pattern": [
    "AAA",
    "A A"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:sanguine_helmet"
  }
})

// Sanguine Chestplate
event.custom({
  "type": "alloyed:forging_shaped",
  "key": {
    "A": {"item": "caverns_and_chasms:living_flesh"}
  },
  "pattern": [
    "A A",
    "AAA",
    "AAA"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:sanguine_chestplate"
  }
})

// Sanguine Leggings
event.custom({
  "type": "alloyed:forging_shaped",
  "key": {
    "A": {"item": "caverns_and_chasms:living_flesh"}
  },
  "pattern": [
    "AAA",
    "A A",
    "A A"
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:sanguine_leggings"
  }
})

// Sanguine Boots
event.custom({
  "type": "alloyed:forging_shaped",
  "key": {
    "A": {"item": "caverns_and_chasms:living_flesh"}
  },
  "pattern": [
    "A A",
    "A A",
  ],
  "result": {
    "count": 1,
    "id": "caverns_and_chasms:sanguine_boots"
  }
})



})