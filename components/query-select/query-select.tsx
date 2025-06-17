'use client'

import { SpinLoaderInput } from '@/components/spin-loaders'
import { Suspense } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { WAIT_BEFORE_DEBOUNCE } from '@/constants/misc'
import { QuerySelectProps } from '@/components/query-select/query-select.props'
import { Combobox } from '@/components/ui/combobox'

function QueryComponent(props: QuerySelectProps) {
  const { queryParam, placeholder, queryItems, className } = props

  const { replace } = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const searchParams = new URLSearchParams(params)
  const currentValue = searchParams.get(queryParam)?.toString() || ''

  const handleSearch = useDebouncedCallback((value: string) => {
    if (value) {
      searchParams.set(queryParam, value)
    } else {
      searchParams.delete(queryParam)
    }
    replace(`${pathname}?${searchParams.toString()}`, { scroll: false })
  }, WAIT_BEFORE_DEBOUNCE)

  return (
    <div className='relative lg:w-64'>
      <Combobox
        items={queryItems}
        onChange={handleSearch}
        value={currentValue}
        className={className}
        placeholder={placeholder}
      />
    </div>
  )
}

export function QuerySelect(props: QuerySelectProps) {
  return (
    <Suspense fallback={<SpinLoaderInput />}>
      <QueryComponent {...props} />
    </Suspense>
  )
}
