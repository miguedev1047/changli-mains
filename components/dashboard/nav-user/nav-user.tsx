'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { EllipsisVertical, LogOut, Moon, Sun } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
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

export function NavUser() {
  const { isMobile } = useSidebar()
  const { isDarkMode, isPending, onLogout, onToggleTheme, userSession } =
    useNavUser()

  if (isPending || !userSession) return null

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='h-8 w-8 rounded-lg grayscale'>
                <AvatarImage
                  src={userSession.image || ''}
                  alt={userSession.name}
                />
                <AvatarFallback className='rounded-lg text-muted-foreground'>
                  {userSession.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>{userSession.name}</span>
                <span className='truncate text-xs'>{userSession.email}</span>
              </div>
              <EllipsisVertical className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage
                    src={userSession?.image || ''}
                    alt={userSession?.name}
                  />
                  <AvatarFallback className='rounded-lg'>
                    {userSession?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>
                    {userSession?.name}
                  </span>
                  <span className='truncate text-muted-foreground text-xs'>
                    {userSession?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='flex items-center justify-between'
              onClick={onToggleTheme}
            >
              <div className='flex items-center'>
                {isDarkMode ? (
                  <Moon className='mr-2 h-4 w-4' />
                ) : (
                  <Sun className='mr-2 h-4 w-4' />
                )}
                <span>Modo oscuro</span>
              </div>
              <Switch
                checked={isDarkMode}
                aria-label='Alternar modo oscuro'
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout}>
              <LogOut />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
