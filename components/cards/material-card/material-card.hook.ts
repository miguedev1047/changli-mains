import { useRouter } from 'next/navigation'
import { trpc } from '@/trpc/react'
import { toast } from 'sonner'

export function useDeleteMaterial(id: string) {
  const utils = trpc.useUtils()

  const deleteMaterial = trpc.materials.delete.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.materials.getAll.invalidate()
    },
  })

  const isPending = deleteMaterial.isPending

  const onDeleteMaterial = () => deleteMaterial.mutate({ id })

  return { onDeleteMaterial, isPending }
}

export function useMaterialNavigation(id: string) {
  const { push } = useRouter()

  const goToMaterialEditPage = () => {
    push(`/edit/material/${id}`)
  }

  return { goToMaterialEditPage }
}
