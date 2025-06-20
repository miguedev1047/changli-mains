import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { weaponSchema, WeaponSchema } from '@/schemas'
import { trpc } from '@/trpc/react'

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
  const form = useForm<WeaponSchema>({
    resolver: zodResolver(weaponSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const { push } = useRouter()
  const utils = trpc.useUtils()

  const createWeapon = trpc.weapons.create.useMutation({
    onSuccess: async ({ message, success }) => {
      if (!success) return toast.error(message)

      toast.success(message)
      await utils.weapons.invalidate()
      push('/dashboard/weapons')
    },
  })

  const isSubmitting = createWeapon.isPending

  const onSubmit = form.handleSubmit((values) => {
    createWeapon.mutate(values)
  })

  return { form, isSubmitting, onSubmit }
}
