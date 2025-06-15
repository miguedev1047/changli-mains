'use client'

import Image from 'next/image'

import {
  elementOptions,
  rarityOptions,
  weaponOptions,
} from '@/constants/options'
import { QueryToggle } from '@/components/query-toggle'

export function CharacterFilter() {
  return (
    <div className='flex flex-row flex-wrap gap-4 md:gap-8'>
      <ul className='flex space-x-2'>
        {rarityOptions.slice(3, 5).map((filter) => (
          <QueryToggle
            key={filter.value}
            queryKey='stars'
            queryValue={filter.value}
            className='flex items-center gap-1'
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

      <ul className='flex space-x-3'>
        {elementOptions.map((filter) => (
          <QueryToggle
            key={filter.value}
            queryKey='element'
            queryValue={filter.value}
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

      <ul className='flex space-x-3'>
        {weaponOptions.map((filter) => (
          <QueryToggle
            key={filter.value}
            queryKey='weapon'
            queryValue={filter.value}
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
