'use client'

import { TeamCardProps } from '@/components/cards/team-card/team-card.props'
import { useDeleteTeam } from '@/components/cards/team-card/team-card.hook'
import { Card } from '@/components/ui/card'
import { DeleteButton } from '@/components/delete-button'
import { Trash } from 'lucide-react'
import { CardHeader } from '@/components/ui/card'
import { CardTitle } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { CharacterCard } from '@/components/cards/character-card'

export function TeamCard(props: TeamCardProps) {
  const { data, showDeleteButton } = props
  const { name, id, characters } = data!

  const { onDeleteTeam, teamQueryKey } = useDeleteTeam(id)

  const characterList = characters.map(({ characterInfo }) => (
    <li key={`${characterInfo.id}-${characterInfo.name}`}>
      <CharacterCard data={characterInfo} />
    </li>
  ))

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-2 justify-between'>
          <CardTitle className='text-xl uppercase'>{name}</CardTitle>

          {showDeleteButton && (
            <DeleteButton
              queryKey={teamQueryKey}
              onDelete={onDeleteTeam}
              itemId={id}
            >
              <Trash />
            </DeleteButton>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <ul className='grid grid-cols-3 gap-2'>{characterList}</ul>
      </CardContent>
    </Card>
  )
}
