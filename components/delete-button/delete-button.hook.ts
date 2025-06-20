'use client'

import { useTransition } from 'react'
import { UseDeleteProps } from '@/components/delete-button/delete-button.props'

export function useDelete(props: UseDeleteProps) {
  const { itemId, onDelete } = props

  const [isPending, startTransition] = useTransition()

  function onDeleteItem() {
    startTransition(async () => {
      await onDelete(itemId)
    })
  }

  return { onDeleteItem, isPending }
}
