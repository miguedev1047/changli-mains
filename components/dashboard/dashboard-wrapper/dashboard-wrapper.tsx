'use client'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { SiteHeader } from '@/components/dashboard/site-header'
import { useStore } from 'zustand'
import { useSidebarStore } from '@/stores/use-sidebar'
import { DashboardWrapperProps } from '@/components/dashboard/dashboard-wrapper/dashboard-wrapper.props'

export function DashboardSidebarWrapper(props: DashboardWrapperProps) {
  const { children, title } = props
  const sidebarStore = useStore(useSidebarStore, (state) => state)

  return (
    <SidebarProvider
      open={sidebarStore.isOpen}
      onOpenChange={sidebarStore.onToggle}
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <DashboardSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader title={title} />

        <div className='flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-6 md:gap-8 p-4 md:p-6 h-full'>
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
