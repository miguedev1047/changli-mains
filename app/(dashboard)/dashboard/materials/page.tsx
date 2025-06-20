import Link from 'next/link'

import { QueryInput } from '@/components/query-input'
import { SpinContentLoader } from '@/components/spin-loaders'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Suspense } from 'react'
import { MaterialList } from '@/app/(dashboard)/dashboard/materials/_components/material-list'
import { MaterialFilter } from '@/app/(dashboard)/dashboard/materials/_components/material-filter'
import { HydrateClient } from '@/trpc/server'

export default function DashboardMaterialsPage() {
  return (
    <HydrateClient>
      <header className='flex items-center justify-between'>
        <h2 className='font-black text-xl md:text-2xl uppercase'>
          Lista de materiales
        </h2>

        <div className='flex items-center gap-2'>
          <QueryInput
            queryParam='name'
            placeholder='Buscar material'
          />

          <Button
            variant='outline'
            size='sm'
            asChild
          >
            <Link href='/new/material'>
              <Plus />
              <span className='hidden lg:inline'>Agregar material</span>
            </Link>
          </Button>
        </div>
      </header>

      <section className='space-y-8'>
        <MaterialFilter />

        <Suspense fallback={<SpinContentLoader />}>
          <MaterialList />
        </Suspense>
      </section>
    </HydrateClient>
  )
}
