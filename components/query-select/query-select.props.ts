import { Input } from '@/components/ui/input'

export type QuerySelectProps = React.ComponentProps<typeof Input> & {
  queryParam: string
  queryItems: { value: string; label: string }[]
}
