'use client'

import Image from 'next/image'

import {
  useCharacterNavigation,
  useDeleteCharacter,
} from '@/components/cards/character-card/character-card.hook'
import { Card } from '@/components/ui/card'
import { getIconElement, getIconWeapon, getRarityClass } from '@/utils/_general'
import { DeleteButton } from '@/components/delete-button'
import { Trash } from 'lucide-react'
import { CharacterCardProps } from '@/components/cards/character-card/character-card.props'
import { cn } from '@/lib/utils'

export function CharacterCard(props: CharacterCardProps) {
  const {
    data,
    showDeleteButton = false,
    showElementAndWeaponIcons = false,
  } = props
  
  const { splash_image, name, id, element_type, rarity, weapon_type } = data!

  const { goToCharacterEditPage } = useCharacterNavigation(id)
  const { characterQueryKey, onDeleteCharacter } = useDeleteCharacter(id)

  const ELEMENT_ICON = getIconElement(element_type)
  const WEAPON_ICON = getIconWeapon(weapon_type)
  const RARITY_CLASS = getRarityClass(rarity)

  if (!data) return null

  return (
    <>
      <Card
        onClick={goToCharacterEditPage}
        className={cn(
          'group/item relative aspect-[2/3] select-none overflow-hidden rounded-[1rem] transition cursor-pointer',
          `after:absolute after:inset-0 ${RARITY_CLASS}`,
          '[&>*]:z-10'
        )}
      >
        <figure className='absolute translate-y-[1rem] select-none pointer-events-none'>
          <Image
            src={splash_image}
            width={500}
            height={500}
            alt={`Personaje: ${name}`}
            className='size-full object-cover transition-all duration-300 ease-in-out group-hover/item:scale-110 group-hover/item:grayscale-0 '
          />
        </figure>

        <p className='writing-vertical absolute top-3 right-1 z-20 line-clamp-1 font-extrabold text-xl uppercase opacity-50 group-hover/item:opacity-100 md:text-2xl'>
          {name}
        </p>

        {showElementAndWeaponIcons && (
          <div className='absolute bottom-3 right-3 select-none flex items-center'>
            <figure className='select-none pointer-events-none size-12'>
              <Image
                src={WEAPON_ICON?.src || ''}
                width={500}
                height={500}
                alt={`Arma: ${WEAPON_ICON?.label}`}
                className='size-full object-cover transition-all duration-300 ease-in-out opacity-0 scale-0 group-hover/item:opacity-100 group-hover/item:scale-110'
              />
            </figure>

            <figure className='select-none pointer-events-none size-12'>
              <Image
                src={ELEMENT_ICON?.src || ''}
                width={500}
                height={500}
                alt={`Elemento: ${ELEMENT_ICON?.label}`}
                className='size-full object-cover transition-all duration-300 ease-in-out opacity-0 scale-0 group-hover/item:opacity-100 group-hover/item:scale-110'
              />
            </figure>
          </div>
        )}
      </Card>

      {showDeleteButton && (
        <DeleteButton
          queryKey={characterQueryKey}
          onDelete={onDeleteCharacter}
          itemId={id}
          className='absolute bottom-3 left-3'
        >
          <Trash />
        </DeleteButton>
      )}
    </>
  )
}
