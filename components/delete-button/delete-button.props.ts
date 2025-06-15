import { TRPCQueryKey } from "@trpc/tanstack-react-query"

export type DeleteButtonProps = {
  children: React.ReactNode
  className?: string
  itemId: string
  queryKey: TRPCQueryKey
  onDelete: (itemId: string) => Promise<{ message: string; success: boolean }> 
  disabled?: boolean
}

export type UseDeleteProps = {
  itemId: string
  queryKey: TRPCQueryKey
  onDelete: (itemId: string) => Promise<{ message: string; success: boolean }> 
}
