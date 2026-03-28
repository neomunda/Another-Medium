ServerEvents.tags('block', event => {
  event.remove('minecraft:incorrect_for_wooden_tool', '/^minecraft:.*copper.*/')
  event.remove('minecraft:needs_stone_tool', '/^minecraft:.*copper.*/')
  event.remove('minecraft:incorrect_for_gold_tool', '/^minecraft:.*copper.*/')

  event.add('minecraft:needs_iron_tool', '/^*deepslate.*/')
})