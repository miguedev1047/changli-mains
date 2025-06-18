'use client'

import Image from 'next/image'

import { rarityOptions } from '@/constants/options'
import { QueryToggle } from '@/components/query-toggle'

export function MaterialFilter() {
  return (
    <div className='flex flex-row flex-wrap @5xl/main:gap-6 gap-4'>
      <ul className='flex space-x-2'>
        {rarityOptions.map((filter) => (
          <QueryToggle
            key={filter.value}
            queryKey='stars'
            queryValue={filter.value}
            className='flex items-center gap-1'
            name={filter.label}
          >
            <Image
              src={filter.src}
              alt={filter.label}
              width={128}
              height={128}
            />
          </QueryToggle>
        ))}
      </ul>
    </div>
  )
}
