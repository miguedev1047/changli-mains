import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardNewCharacterLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Agregar personaje'>
      {children}
    </DashboardSidebarWrapper>
  )
}
