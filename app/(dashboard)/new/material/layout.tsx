import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardNewMaterialLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Agregar material'>
      {children}
    </DashboardSidebarWrapper>
  )
}
