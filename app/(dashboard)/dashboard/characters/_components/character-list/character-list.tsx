'use client'

import { CharacterCard } from '@/components/cards/character-card'
import { trpc } from '@/trpc/react'
import { filterCharacters } from '@/utils/character'
import { useSearchParams } from 'next/navigation'

export function CharacterList() {
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries(searchParams.entries())

  const [characters] = trpc.characters.getAll.useSuspenseQuery()
  const filteredCharacters = filterCharacters(characters, queryParams)

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

  return (
    <ul className='grid @5xl/main:grid-cols-6 @3xl/main:grid-cols-4 @xl/main:grid-cols-3 @lg/main:grid-cols-2 grid-cols-2 gap-4'>
      {characterList}
    </ul>
  )
}
