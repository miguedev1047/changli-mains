import { elementOptions, weaponOptions } from '@/constants/options'
import { trpc } from '@/app/_trpc/client'
import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { inferOutput } from '@trpc/tanstack-react-query'

type CharactersProps = inferOutput<typeof trpc.characters.getAll>
type Filters = { [k: string]: string }

// -------------------
// Filter characters
// -------------------

export function filterCharacters(
  characters: CharactersProps,
  filters: Filters
) {
  if (!characters) return []

  const { name, weapon, element, stars } = filters

  return characters.filter((item) => {
    const matcher = [
      name ? lowerCaseFunc(item.name).includes(lowerCaseFunc(name)) : true,
      weapon
        ? lowerCaseFunc(item.weapon_type).includes(lowerCaseFunc(weapon))
        : true,
      element
        ? lowerCaseFunc(item.element_type).includes(lowerCaseFunc(element))
        : true,
      stars ? lowerCaseFunc(item.rarity) === stars : true,
    ]

    return matcher.every(Boolean)
  })
}

// -------------------
// Other functions
// -------------------

export function getIconElement(element: string) {
  if (!element) return
  const ICON = elementOptions.find((el) => el.value === element)
  return ICON
}

export function getIconWeapon(weapon: string) {
  if (!weapon) return
  const ICON = weaponOptions.find((we) => we.value === weapon)
  return ICON
}

export function getRarityClass(rarity: string) {
  if (!rarity) return

  switch (rarity) {
    case 'FIVE_STAR':
      return 'after:bg-gradient-to-t after:from-yellow-300/15 after:to-transparent'
    case 'FOUR_STAR':
      return 'after:bg-gradient-to-t after:from-purple-300/15 after:to-transparent'
    case 'THREE_STAR':
      return 'after:bg-gradient-to-t after:from-blue-300/15 after:to-transparent'
    case 'TWO_STAR':
      return 'after:bg-gradient-to-t after:from-green-300/15 after:to-transparent'
    case 'ONE_STAR':
      return 'after:bg-gradient-to-t after:from-gray-300/15 after:to-transparent'
  }
}
