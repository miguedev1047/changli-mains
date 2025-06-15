import Link from 'next/link'

import { Plus } from 'lucide-react'
import { QueryInput } from '@/components/query-input'
import { Button } from '@/components/ui/button'
import { CharacterList } from '@/app/(dashboard)/dashboard/characters/_components/character-list'
import { CharacterFilter } from '@/app/(dashboard)/dashboard/characters/_components/character-filter'
import { Suspense } from 'react'
import { SpinContentLoader } from '@/components/spin-loaders'

export default function DashboardCharactersPage() {
  return (
    <>
      <header className='flex items-center justify-between'>
        <h2 className='font-black text-xl md:text-2xl uppercase'>
          Lista de personajes
        </h2>

        <div className='flex items-center gap-2'>
          <QueryInput
            queryParam='name'
            placeholder='Buscar personaje'
          />

          <Button
            variant='outline'
            size='sm'
            asChild
          >
            <Link href='/new/character'>
              <Plus />
              <span className='hidden lg:inline'>Agregar personaje</span>
            </Link>
          </Button>
        </div>
      </header>

      <section className='space-y-8'>
        <CharacterFilter />

        <Suspense fallback={<SpinContentLoader />}>
          <CharacterList />
        </Suspense>
      </section>
    </>
  )
}
