'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SpinLoaderInput } from '@/components/spin-loaders'
import { Suspense } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { WAIT_BEFORE_DEBOUNCE } from '@/constants/misc'

export type QueryInputProps = React.ComponentProps<typeof Input> & {
  queryParam: string
}

export function QueryInput(props: QueryInputProps) {
  return (
    <Suspense fallback={<SpinLoaderInput />}>
      <QueryComponent {...props} />
    </Suspense>
  )
}

function QueryComponent(props: QueryInputProps) {
  const { queryParam, placeholder, className } = props

  const { replace } = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const searchParams = new URLSearchParams(params)

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
      <Input
        className={cn('pe-9 ps-9 peer w-full h-8', className)}
        defaultValue={searchParams.get(queryParam)?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
      />
      <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50'>
        <Search
          size={16}
          strokeWidth={2}
        />
      </div>
    </div>
  )
}
