import Link from 'next/link'

import { QueryInput } from '@/components/query-input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Suspense } from 'react'
import { SpinContentLoader } from '@/components/spin-loaders'
import { TeamList } from '@/app/(dashboard)/dashboard/teams/_components/team-list'

export default function DashboardTeamsPage() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <h2 className='font-black text-xl md:text-2xl uppercase'>
          Lista de equipos
        </h2>

        <div className='flex items-center gap-2'>
          <QueryInput
            queryParam='name'
            placeholder='Buscar equipo'
          />

          <Button
            variant='outline'
            size='sm'
            asChild
          >
            <Link href='/new/team'>
              <Plus />
              <span className='hidden lg:inline'>Agregar equipo</span>
            </Link>
          </Button>
        </div>
      </header>

      <section className='space-y-8'>
        {/* <TeamFilter /> */}

        <Suspense fallback={<SpinContentLoader />}>
          <TeamList />
        </Suspense>
      </section>
    </>
  )
}
