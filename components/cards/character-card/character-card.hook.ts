import { trpc } from '@/trpc/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useDeleteCharacter(id: string) {
  const utils = trpc.useUtils()

  const deleteCharacter = trpc.characters.delete.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.characters.invalidate()
    },
  })

  const isPending = deleteCharacter.isPending

  const onDeleteCharacter = () => deleteCharacter.mutate({ id })

  return { onDeleteCharacter, isPending }
}

export function useCharacterNavigation(id: string) {
  const { push } = useRouter()

  const goToCharacterEditPage = () => {
    push(`/edit/character/${id}`)
  }

  return { goToCharacterEditPage }
}
