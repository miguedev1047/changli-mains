import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { weaponSchema, WeaponSchema } from '@/schemas'
import { trpc } from '@/app/_trpc/client'
import { invalidateQuery } from '@/helpers/invalidate-query'

const DEFAULT_VALUES: WeaponSchema = {
  name: '',
  description: '',
  icon_image: '',
  rarity: '',
  weapon_type: '',
  is_new: false,
  is_public: false,
}

export function useWeaponForm() {
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const weaponMutationOpts = trpc.weapons.create.mutationOptions()
  const weaponMutation = useMutation(weaponMutationOpts)
  const weaponQueryKey = trpc.weapons.getAll.queryKey()

  const form = useForm<WeaponSchema>({
    resolver: zodResolver(weaponSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = form.handleSubmit(async (values) => {
    const { success, message } = await weaponMutation.mutateAsync(values)

    if (!success) return toast.error(message)

    invalidateQuery(weaponQueryKey, queryClient)
    toast.success(message)
    push('/dashboard/weapons')
  })

  return { form, isSubmitting, onSubmit }
}
