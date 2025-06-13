import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardTeamsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Personjes'>{children}</DashboardSidebarWrapper>
  )
}
