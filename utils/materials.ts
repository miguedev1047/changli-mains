import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { RouterOutputs } from '@/trpc/react'

type MaterialsProps = RouterOutputs['materials']['getAll']
type Filters = { [k: string]: string }

export function filterMaterials(material: MaterialsProps, filters: Filters) {
  if (!material) return []

  const { name, stars } = filters

  return material.filter((item) => {
    const matcher = [
      name ? lowerCaseFunc(item.name).includes(lowerCaseFunc(name)) : true,
      stars ? lowerCaseFunc(item.rarity) === stars : true,
    ]

    return matcher.every(Boolean)
  })
}
