import { toast } from 'sonner'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { useGetSession } from '@/hooks/use-session'

export function useNavUser() {
  const { push } = useRouter()
  const { setTheme, theme } = useTheme()

  const { data: session, isPending } = useGetSession()
  const userSession = session?.user

  const isDarkMode = theme === 'dark'

  const onToggleTheme = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const onLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          push('/login')
          toast.success('Cierre de sesión exitoso')
        },
        onError: () => {
          toast.error('Error al cerrar sesión')
        },
      },
    })
  }

  return { isPending, userSession, isDarkMode, onToggleTheme, onLogout }
}
