import { RouterOutputs } from "@/trpc/react"

export type CharacterCardProps = {
  data: RouterOutputs["characters"]["getUnique"]
  showDeleteButton?: boolean
  showElementAndWeaponIcons?: boolean
}