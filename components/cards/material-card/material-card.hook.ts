import { trpc } from '@/app/_trpc/client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useDeleteMaterial(id: string) {
  const materialMutationOpts = trpc.materials.delete.mutationOptions()
  const materialMutation = useMutation(materialMutationOpts)
  const materialQueryKey = trpc.materials.getAll.queryKey()

  const onDeleteMaterial = async () => {
    return await materialMutation.mutateAsync({ id })
  }

  return { onDeleteMaterial, materialQueryKey }
}

export function useMaterialNavigation(id: string) {
  const { push } = useRouter()

  const goToMaterialEditPage = () => {
    push(`/edit/material/${id}`)
  }

  return { goToMaterialEditPage }
}
