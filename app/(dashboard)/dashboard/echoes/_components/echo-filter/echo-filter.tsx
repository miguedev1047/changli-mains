import {
  echoClassTypeOptions,
  echoCostOptions,
  echoSetsOptions,
} from '@/constants/options'
import { QuerySelect } from '@/components/query-select'

export function EchoFilter() {
  const formattedEchoOptions = echoSetsOptions.map((i) => ({
    label: i.label,
    value: i.value,
  }))

  return (
    <div className='flex flex-row flex-wrap @5xl/main:gap-6 gap-4'>
      <QuerySelect
        queryItems={echoCostOptions}
        queryParam='cost'
        placeholder='Filtrar por costo'
      />

      <QuerySelect
        queryItems={echoClassTypeOptions}
        queryParam='class_type'
        placeholder='Filtrar por clase'
      />

      <QuerySelect
        queryItems={formattedEchoOptions}
        queryParam='set'
        placeholder='Filtrar por conjunto'
      />
    </div>
  )
}
