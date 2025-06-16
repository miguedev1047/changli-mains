'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { UseDeleteProps } from '@/components/delete-button/delete-button.props'
import { useQueryClient } from '@tanstack/react-query'
import { invalidateQuery } from '@/helpers/invalidate-query'

export function useDelete(props: UseDeleteProps) {
  const { itemId, onDelete, queryKey } = props
  const queryClient = useQueryClient()

  const [isPending, startTransition] = useTransition()

  function onDeleteItem() {
    startTransition(async () => {
      const { message, success } = await onDelete(itemId)
      
      if (!success) {
        toast.error(message)
        return
      }

      invalidateQuery(queryKey, queryClient)
      toast.success(message)
    })
  }

  return { onDeleteItem, isPending }
}
