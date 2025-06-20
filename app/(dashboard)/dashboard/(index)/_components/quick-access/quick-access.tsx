'use client'

import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { quickLinksData } from '@/constants/data'
import { cn } from '@/lib/utils'
import { trpc } from '@/trpc/react'

export function QuickAccess() {
  const [metricsQuery] = trpc.metrics.data.useSuspenseQuery()

  return (
    <div className='grid @5xl/main:grid-cols-2 grid-cols-1 gap-4 *:data-[slot=card]:shadow-xs'>
      {quickLinksData.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
        >
          <Card
            className={cn(
              '@container/card group group/image relative h-[200px] cursor-pointer overflow-hidden border-0 p-0 text-background transition duration-300 ease-out dark:text-foreground',
              link.color
            )}
          >
            <CardContent className='size-full p-6'>
              <div className='flex h-full items-start justify-between'>
                <div className='flex h-full flex-col justify-between'>
                  <div className='grid size-16 place-items-center rounded-lg bg-white/20'>
                    <link.icon />
                  </div>

                  <h2 className='line-clamp-1 whitespace-pre-wrap font-bold text-lg uppercase leading-none xl:text-2xl'>
                    {link.title}
                  </h2>
                </div>

                <div className='text-right'>
                  <h2 className='font-semibold @[250px]/card:text-3xl text-xl tabular-nums'>
                    {metricsQuery[index].count}
                  </h2>
                  <p>{link.title} totales</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
