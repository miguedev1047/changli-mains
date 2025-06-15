import { elementOptions, weaponOptions } from '@/constants/options'
import { trpc } from '@/app/_trpc/client'
import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { inferOutput } from '@trpc/tanstack-react-query'
import { rarityColorsData } from '@/constants/data'

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
  const RARITY_COLOR = rarityColorsData[rarity as keyof typeof rarityColorsData]
  return RARITY_COLOR
}
