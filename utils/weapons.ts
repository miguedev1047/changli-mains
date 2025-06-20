import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { RouterOutputs } from '@/trpc/react'

type WeaponsProps = RouterOutputs['weapons']['getAll']
type Filters = { [k: string]: string }

export function filterWeapons(weapons: WeaponsProps, filters: Filters) {
  if (!weapons) return []

  const { name, weapon, stars } = filters

  return weapons.filter((item) => {
    const matcher = [
      name ? lowerCaseFunc(item.name).includes(lowerCaseFunc(name)) : true,
      weapon
        ? lowerCaseFunc(item.weapon_type).includes(lowerCaseFunc(weapon))
        : true,
      stars ? lowerCaseFunc(item.rarity) === stars : true,
    ]

    return matcher.every(Boolean)
  })
}
