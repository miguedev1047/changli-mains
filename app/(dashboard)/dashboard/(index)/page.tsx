import { QuickAccess } from '@/app/(dashboard)/dashboard/(index)/_components/quick-access'
import { SpinContentLoader } from '@/components/spin-loaders'
import { HydrateClient } from '@/trpc/server'
import { Suspense } from 'react'

export default function DashboardIndexPage() {
  return (
    <HydrateClient>
      <section className='space-y-8'>
        <header>
          <h2 className='font-black text-2xl uppercase'>Accesos Rápidos</h2>
        </header>

        <section className='space-y-6'>
          <Suspense fallback={<SpinContentLoader />}>
            <QuickAccess />
          </Suspense>
        </section>
      </section>
    </HydrateClient>
  )
}
