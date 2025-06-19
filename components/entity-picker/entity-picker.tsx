'use client'

import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query'
import { MultipleSelect, Option } from '@/components/ui/multiple-select'

type EntityPickerProps<T> = {
  queryOpts: UseSuspenseQueryOptions<T[], Error>
} & Omit<React.ComponentProps<typeof MultipleSelect>, 'options'>

export function EntityPicker<T extends { id: string | number; name: string }>({
  queryOpts,
  ...props
}: EntityPickerProps<T>) {
  const { data } = useSuspenseQuery<T[]>(queryOpts)

  const formattedData = data.map((item) => ({
    value: item.id,
    label: item.name, 
  })) as Option[] || []

  return (
    <MultipleSelect
      defaultOptions={formattedData}
      hidePlaceholderWhenSelected
      {...props}
    />
  )
}
