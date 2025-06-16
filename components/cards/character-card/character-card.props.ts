import { type trpc } from "@/app/_trpc/client"
import { type inferOutput } from "@trpc/tanstack-react-query"

export type CharacterCardProps = {
  data: inferOutput<typeof trpc.characters.getUnique>
  showDeleteButton?: boolean
  showElementAndWeaponIcons?: boolean
}