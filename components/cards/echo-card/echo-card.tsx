'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  useDeleteEcho,
  useEchoNavigation,
} from '@/components/cards/echo-card/echo-card.hook'
import { EchoCardProps } from '@/components/cards/echo-card/echo-card.props'
import { cn } from '@/lib/utils'
import { Card, CardImage } from '@/components/ui/card'
import { DeleteButton } from '@/components/delete-button'
import { Trash } from 'lucide-react'
import { mapEchoSetToOptions } from '@/utils/echoes'

export function EchoCard(props: EchoCardProps) {
  const { data, showDeleteButton } = props
  const { icon_image, name, id, sets } = data!

  const mappedEchoOptions = mapEchoSetToOptions(sets)

  const { goToEchoEditPage } = useEchoNavigation(id)
  const { onDeleteEcho } = useDeleteEcho(id)

  if (!data) return null

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            onClick={goToEchoEditPage}
            className={cn(
              'group/item relative aspect-square select-none overflow-hidden rounded-[1rem] transition cursor-pointer',
              '[&>*]:z-10'
            )}
          >
            <figure className='absolute select-none pointer-events-none size-full'>
              <CardImage
                src={icon_image}
                fill
                alt={`Eco: ${name}`}
                className='size-full object-cover transition-all duration-300 ease-in-out group-hover/item:scale-110 group-hover/item:grayscale-0'
              />
            </figure>

            <ul className='absolute top-3 right-3 space-y-1'>
              {mappedEchoOptions.map((item) => {
                if (!item) return

                return (
                  <figure
                    key={item.value}
                    className='size-8 relative'
                  >
                    <CardImage
                      fill
                      key={item.value}
                      src={item.src}
                      alt={item.label}
                    />
                  </figure>
                )
              })}
            </ul>
          </Card>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>

      {showDeleteButton && (
        <DeleteButton
          onDelete={onDeleteEcho}
          itemId={id}
          className='absolute bottom-3 left-3'
        >
          <Trash />
        </DeleteButton>
      )}
    </>
  )
}
