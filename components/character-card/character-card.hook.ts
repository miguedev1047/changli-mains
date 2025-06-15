import { trpc } from "@/app/_trpc/client"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export function useDeleteCharacter(id: string) {
  const characterMutationOpts = trpc.characters.delete.mutationOptions()
  const characterMutation = useMutation(characterMutationOpts)
  const characterQueryKey = trpc.characters.getAll.queryKey()

  const onDeleteCharacter = async () => {
    return await characterMutation.mutateAsync({ id })
  }

  return { onDeleteCharacter, characterQueryKey }
}

export function useCharacterNavigation() {
  const { push } = useRouter()

  const goToCharacterEditPage = () => {
    push(`/dashboard/edit/character`)
  }

  return { goToCharacterEditPage }
}