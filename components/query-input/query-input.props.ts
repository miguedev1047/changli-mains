import { Input } from '@/components/ui/input'

export type QueryInputProps = React.ComponentProps<typeof Input> & {
  queryParam: string
}
