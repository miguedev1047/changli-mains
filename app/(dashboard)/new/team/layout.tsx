import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardNewTeamLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Agregar equipo'>
      {children}
    </DashboardSidebarWrapper>
  )
}
