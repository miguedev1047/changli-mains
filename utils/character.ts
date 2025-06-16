import { trpc } from '@/app/_trpc/client'
import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { inferOutput } from '@trpc/tanstack-react-query'

type CharactersProps = inferOutput<typeof trpc.characters.getAll>
type Filters = { [k: string]: string }

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
