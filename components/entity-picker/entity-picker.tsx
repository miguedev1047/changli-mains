'use client'

import { MultipleSelect, Option } from '@/components/ui/multiple-select'
import { UseQueryResult } from '@tanstack/react-query'
import { SpinLoaderInput } from '@/components/spin-loaders'

type EntityPickerProps<T> = {
  queryData: UseQueryResult<T[]>
} & Omit<React.ComponentProps<typeof MultipleSelect>, 'options'>

export function EntityPicker<T extends { id: string | number; name: string }>({
  queryData,
  ...props
}: EntityPickerProps<T>) {
  const { data, isLoading, isError } = queryData

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
