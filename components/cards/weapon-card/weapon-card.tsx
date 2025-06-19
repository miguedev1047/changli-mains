'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useDeleteWeapon, useWeaponNavigation } from '@/components/cards/weapon-card/weapon-card.hook'
import { WeaponCardProps } from '@/components/cards/weapon-card/weapon-card.props'
import { Card, CardImage } from '@/components/ui/card'
import { getIconWeapon, getRarityClass } from '@/utils/_general'
import { DeleteButton } from '@/components/delete-button'
import { Trash } from 'lucide-react'


export function WeaponCard(props: WeaponCardProps) {
  const { data, showDeleteButton = false, showWeaponIcon = false } = props
  const { icon_image, name, id, rarity, weapon_type } = data!

  const { goToWeaponEditPage } = useWeaponNavigation(id)
  const { onDeleteWeapon, weaponQueryKey } = useDeleteWeapon(id)

  const WEAPON_ICON = getIconWeapon(weapon_type)
  const RARITY_CLASS = getRarityClass(rarity)

  if (!data) return null

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            onClick={goToWeaponEditPage}
            className={cn(
              'group/item relative aspect-square select-none overflow-hidden rounded-[1rem] transition cursor-pointer',
              `after:absolute after:inset-0 ${RARITY_CLASS}`,
              '[&>*]:z-10'
            )}
          >
            <figure className='absolute select-none pointer-events-none size-full'>
              <CardImage
                src={icon_image}
                fill
                alt={`Arma: ${name}`}
                className='size-full object-cover transition-all duration-300 ease-in-out group-hover/item:scale-110 group-hover/item:grayscale-0 '
              />
            </figure>

            {showWeaponIcon && (
              <div className='absolute bottom-3 right-3 select-none flex items-center'>
                <figure className='select-none pointer-events-none size-8'>
                  <CardImage
                    src={WEAPON_ICON?.src || ''}
                    width={32}
                    height={32}
                    alt={`Arma: ${WEAPON_ICON?.label}`}
                    className='size-full object-cover transition-all duration-300 ease-in-out opacity-0 scale-0 group-hover/item:opacity-100 group-hover/item:scale-110'
                  />
                </figure>
              </div>
            )}
          </Card>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>

      {showDeleteButton && (
        <DeleteButton
          queryKey={weaponQueryKey}
          onDelete={onDeleteWeapon}
          itemId={id}
          className='absolute bottom-3 left-3'
        >
          <Trash />
        </DeleteButton>
      )}
    </>
  )
}
