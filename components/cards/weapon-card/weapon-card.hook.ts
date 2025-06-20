import { trpc } from '@/trpc/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useDeleteWeapon(id: string) {
  const utils = trpc.useUtils()

  const deleteWeapon = trpc.weapons.delete.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.weapons.invalidate()
    },
  })

  const isPending = deleteWeapon.isPending

  const onDeleteWeapon = () => deleteWeapon.mutate({ id })

  return { onDeleteWeapon, isPending }
}

export function useWeaponNavigation(id: string) {
  const { push } = useRouter()

  const goToWeaponEditPage = () => {
    push(`/edit/weapon/${id}`)
  }

  return { goToWeaponEditPage }
}
