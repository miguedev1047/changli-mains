import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { loginSchema, LoginSchema } from '@/schemas'

export function useLogin() {
  const { push } = useRouter()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = form.handleSubmit(async (value) => {
    await authClient.signIn.email(
      { email: value.email, password: value.password },
      {
        onSuccess: () => {
          push('/dashboard')
          toast.success('Inicio de sesión exitoso')
        },
        onError: (error) => {
          toast.error(error.error.message)
        },
      }
    )
  })

  const isSubmitting = form.formState.isSubmitting

  return { form, isSubmitting, onSubmit }
}
