import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardNewEchoLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Agregar eco'>
      {children}
    </DashboardSidebarWrapper>
  )
}
