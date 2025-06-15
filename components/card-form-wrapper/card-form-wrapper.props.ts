export type CardFormWrapperProps = {
  title: string
  description?: string
  isEditing?: boolean
  isPending?: boolean
  canSubmit?: boolean
  backButton?: boolean
  disabled?: boolean
  formId: string
  children: React.ReactNode
}
