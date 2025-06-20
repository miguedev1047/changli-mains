import { QuickAccess } from '@/app/(dashboard)/dashboard/(index)/_components/quick-access'
import { HydrateClient } from '@/trpc/server'

export default function DashboardIndexPage() {
  return (
    <HydrateClient>
      <section className='space-y-8'>
        <header>
          <h2 className='font-black text-2xl uppercase'>Accesos Rápidos</h2>
        </header>

        <section className='space-y-6'>
          <QuickAccess />
        </section>
      </section>
    </HydrateClient>
  )
}
