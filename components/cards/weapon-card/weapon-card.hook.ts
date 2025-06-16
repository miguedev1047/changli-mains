import { trpc } from '@/app/_trpc/client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useDeleteWeapon(id: string) {
  const weaponMutationOpts = trpc.weapons.delete.mutationOptions()
  const weaponMutation = useMutation(weaponMutationOpts)
  const weaponQueryKey = trpc.weapons.getAll.queryKey()

  const onDeleteWeapon = async () => {
    return await weaponMutation.mutateAsync({ id })
  }

  return { onDeleteWeapon, weaponQueryKey }
}

export function useWeaponNavigation(id: string) {
  const { push } = useRouter()

  const goToWeaponEditPage = () => {
    push(`/edit/weapon/${id}`)
  }

  return { goToWeaponEditPage }
}
