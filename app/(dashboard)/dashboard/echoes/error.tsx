'use client'

import { ErrorBoundaryMessage } from '@/components/error-boundary-message'
import { ErrorBoundaryProps } from '@/types/error-boundary'

export default function ErrorPage(props: ErrorBoundaryProps) {
  return <ErrorBoundaryMessage {...props} />
}
