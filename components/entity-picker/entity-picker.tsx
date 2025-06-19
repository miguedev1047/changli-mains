'use client'

import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { MultipleSelect, Option } from '@/components/ui/multiple-select'
import { SpinLoaderInput } from '@/components/spin-loaders'

type EntityPickerProps<T> = {
  queryOpts: UseQueryOptions<T[], Error>
} & Omit<React.ComponentProps<typeof MultipleSelect>, 'options'>

export function EntityPicker<T extends { id: string | number; name: string }>({
  queryOpts,
  ...props
}: EntityPickerProps<T>) {
  const { data, isLoading, isError } = useQuery<T[]>(queryOpts)

  if (isLoading || isError) return <SpinLoaderInput />

  const formattedData =
    (data?.map((item) => ({
      value: item.id,
      label: item.name,
    })) as Option[]) || []

  return (
    <MultipleSelect
      defaultOptions={formattedData}
      hidePlaceholderWhenSelected
      {...props}
    />
  )
}
