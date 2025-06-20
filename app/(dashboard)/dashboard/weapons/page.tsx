import Link from 'next/link'

import { QueryInput } from '@/components/query-input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { WeaponFilter } from '@/app/(dashboard)/dashboard/weapons/_components/weapon-filter'
import { Suspense } from 'react'
import { WeaponList } from '@/app/(dashboard)/dashboard/weapons/_components/weapon-list'
import { SpinContentLoader } from '@/components/spin-loaders'
import { HydrateClient } from '@/trpc/server'

export default function DashboardWeaponsPage() {
  return (
    <HydrateClient>
      <header className='flex items-center justify-between'>
        <h2 className='font-black text-xl md:text-2xl uppercase'>
          Lista de armas
        </h2>

        <div className='flex items-center gap-2'>
          <QueryInput
            queryParam='name'
            placeholder='Buscar arma'
          />

          <Button
            variant='outline'
            size='sm'
            asChild
          >
            <Link href='/new/weapon'>
              <Plus />
              <span className='hidden lg:inline'>Agregar arma</span>
            </Link>
          </Button>
        </div>
      </header>

      <section className='space-y-8'>
        <WeaponFilter />

        <Suspense fallback={<SpinContentLoader />}>
          <WeaponList />
        </Suspense>
      </section>
    </HydrateClient>
  )
}
