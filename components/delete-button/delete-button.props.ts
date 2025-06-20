
export type DeleteButtonProps = {
  children: React.ReactNode
  className?: string
  itemId: string
  onDelete: (itemId: string) => void
  disabled?: boolean
}

export type UseDeleteProps = {
  itemId: string
  onDelete: (itemId: string) => void
}
