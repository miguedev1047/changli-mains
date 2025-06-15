'use client'

import { trpc } from '@/app/_trpc/client'
import { CharacterCard } from '@/components/character-card'
import { SpinContentLoader } from '@/components/spin-loaders'
import { filterCharacters } from '@/utils/character'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function CharacterList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const characterQueryOpts = trpc.characters.getAll.queryOptions()
  const { data: characters, isError, isLoading } = useQuery(characterQueryOpts)

  if (isLoading || isError) return <SpinContentLoader />

  const filteredCharacters = filterCharacters(characters!, queryParams)

  const characterList = filteredCharacters?.map((character) => (
    <li
      key={`${character.id}-${character.name}`}
      className='relative'
    >
      <CharacterCard
        data={character}
        showDeleteButton
        showElementAndWeaponIcons
      />
    </li>
  ))

  return <ul className='grid @5xl/main:grid-cols-6 @3xl/main:grid-cols-4 @xl/main:grid-cols-3 @lg/main:grid-cols-2 grid-cols-2 gap-4'>{characterList}</ul>
}
