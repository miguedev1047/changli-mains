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
    <div className='flex flex-row flex-wrap @5xl/main:gap-6 gap-4'>
      <ul className='flex space-x-2'>
        {rarityOptions.slice(3, 5).map((filter) => (
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

      <ul className='flex space-x-2'>
        {elementOptions.map((filter) => (
          <QueryToggle
            key={filter.value}
            queryKey='element'
            queryValue={filter.value}
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

      <ul className='flex space-x-2'>
        {weaponOptions.map((filter) => (
          <QueryToggle
            key={filter.value}
            queryKey='weapon'
            queryValue={filter.value}
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
