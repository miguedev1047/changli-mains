'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Toggle } from '@/components/ui/toggle'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Suspense } from 'react'
import { SpinLoaderInput } from '@/components/spin-loaders'
import { cn } from '@/lib/utils'
import { WAIT_BEFORE_DEBOUNCE } from '@/constants/misc'
import { QueryToggleProps } from '@/components/query-toggle/query-toggle.props'


function QueryComponent(props: QueryToggleProps) {
  const {
    queryKey,
    children,
    className,
    queryValue,
    name,
    variant = 'outline',
  } = props

  const { replace } = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const searchParams = new URLSearchParams(params)

  const isPressed = searchParams.get(queryKey) === queryValue.toLowerCase()

  const handleToggle = useDebouncedCallback((value: boolean) => {
    if (value) {
      searchParams.set(queryKey, queryValue.toLowerCase())
    } else {
      searchParams.delete(queryKey)
    }

    replace(`${pathname}?${searchParams.toString()}`, { scroll: false })
  }, WAIT_BEFORE_DEBOUNCE)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle
            className={cn(
              'size-10 p-1.5 relative cursor-pointer',
              'bg-card-foreground data-[state=on]:bg-muted-foreground hover:bg-muted-foreground',
              'dark:bg-card data-[state=on]:dark:bg-accent dark:hover:bg-accent',
              'text-secondary dark:text-secondary-foreground',
              className
            )}
            variant={variant}
            pressed={isPressed}
            defaultPressed={isPressed}
            onPressedChange={handleToggle}
          >
            {children}
          </Toggle>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <span>{name}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function QueryToggle(props: QueryToggleProps) {
  return (
    <Suspense fallback={<SpinLoaderInput />}>
      <QueryComponent {...props} />
    </Suspense>
  )
}
