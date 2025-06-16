import { DashboardSidebarWrapper } from '@/components/dashboard/dashboard-wrapper'

export default function DashboardNewWeaponLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <DashboardSidebarWrapper title='Agregar arma'>
      {children}
    </DashboardSidebarWrapper>
  )
}
