'use client'

import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  useDeleteMaterial,
  useMaterialNavigation,
} from '@/components/cards/material-card/material-card.hook'
import { MaterialCardProps } from '@/components/cards/material-card/material-card.props'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { DeleteButton } from '@/components/delete-button'
import { Trash } from 'lucide-react'

export function MaterialCard(props: MaterialCardProps) {
  const { data, showDeleteButton } = props
  const { icon_image, name, id } = data!

  const { goToMaterialEditPage } = useMaterialNavigation(id)
  const { onDeleteMaterial, materialQueryKey } = useDeleteMaterial(id)

  if (!data) return null

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            onClick={goToMaterialEditPage}
            className={cn(
              'group/item relative aspect-square select-none overflow-hidden rounded-[1rem] transition cursor-pointer',
              '[&>*]:z-10 grid place-items-center'
            )}
          >
            <figure className='absolute select-none pointer-events-none size-full'>
              <Image
                src={icon_image}
                fill
                alt={`Eco: ${name}`}
                className='size-full object-cover transition-all duration-300 ease-in-out group-hover/item:scale-110 group-hover/item:grayscale-0'  
              />
            </figure>
          </Card>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>

      {showDeleteButton && (
        <DeleteButton
          queryKey={materialQueryKey}
          onDelete={onDeleteMaterial}
          itemId={id}
          className='absolute bottom-3 left-3'
        >
          <Trash />
        </DeleteButton>
      )}
    </>
  )
}
