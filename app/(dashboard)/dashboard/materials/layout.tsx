import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardMaterialsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Materiales'>
      {children}
    </DashboardSidebarWrapper>
  )
}
