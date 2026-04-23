
StartupEvents.registry('item', event => {
// Heated Ingots
  event.create('heated_gold_ingot')
  .displayName('Heated Gold Ingot')
  .glow(true)
  .tag('overgeared:heated_metals')

  event.create('heated_zinc_ingot')
  .displayName('Heated Zinc Ingot')
  .glow(true)
  .tag('overgeared:heated_metals')

  event.create('heated_nickel_ingot')
  .displayName('Heated Nickel Ingot')
  .glow(true)
  .tag('overgeared:heated_metals')

  event.create('heated_aluminium_ingot')
  .displayName('Heated Aluminium Ingot')
  .glow(true)
  .tag('overgeared:heated_metals')

  event.create('heated_silver_ingot')
  .displayName('Heated Silver Ingot')
  .glow(true)
  .tag('overgeared:heated_metals')

// Tool Parts (Knifes)
  event.create('flint_knife_blade')
  .displayName('Flint Knife Blade')

  event.create('copper_knife_blade')
  .displayName('Copper Knife Blade')

  event.create('iron_knife_blade')
  .displayName('Iron Knife Blade')

  event.create('gold_knife_blade')
  .displayName('Gold Knife Blade')

  event.create('steel_knife_blade')
  .displayName('Steel Knife Blade')



// Tool Parts (New Materials)

/// Aluminium
  event.create('aluminium_sword_blade')
  .displayName('Aluminium Sword Blade')

  event.create('aluminium_pickaxe_head')
  .displayName('Aluminium Pickaxe Head')

  event.create('aluminium_axe_head')
  .displayName('Aluminium Axe Head')

  event.create('aluminium_shovel_head')
  .displayName('Aluminium Shovel head')

  event.create('aluminium_hoe_head')
  .displayName('Aluminium Hoe head')

  event.create('aluminium_knife_blade')
  .displayName('Aluminium Knife Blade')

  /// Silver
  event.create('silver_sword_blade')
  .displayName('Silver Sword Blade')

  event.create('silver_pickaxe_head')
  .displayName('Silver Pickaxe Head')

  event.create('silver_axe_head')
  .displayName('Silver Axe Head')

  event.create('silver_shovel_head')
  .displayName('Silver Shovel head')

  event.create('silver_hoe_head')
  .displayName('Silver Hoe head')

  event.create('silver_knife_blade')
  .displayName('Silver Knife Blade')
})