import Link from 'next/link'

import { QueryInput } from '@/components/query-input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { SpinContentLoader } from '@/components/spin-loaders'
import { Suspense } from 'react'
import { EchoList } from '@/app/(dashboard)/dashboard/echoes/_components/echo-list'
import { EchoFilter } from '@/app/(dashboard)/dashboard/echoes/_components/echo-filter'

export default function DashboardEchoesPage() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <h2 className='font-black text-xl md:text-2xl uppercase'>
          Lista de ecos
        </h2>

        <div className='flex items-center gap-2'>
          <QueryInput
            queryParam='name'
            placeholder='Buscar eco'
          />

          <Button
            variant='outline'
            size='sm'
            asChild
          >
            <Link href='/new/echo'>
              <Plus />
              <span className='hidden lg:inline'>Agregar eco</span>
            </Link>
          </Button>
        </div>
      </header>

      <section className='space-y-8'>
        <EchoFilter />

        <Suspense fallback={<SpinContentLoader />}>
          <EchoList />
        </Suspense>
      </section>
    </>
  )
}
