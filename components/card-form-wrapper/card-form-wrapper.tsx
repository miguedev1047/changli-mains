import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { CardFormWrapperProps } from '@/components/card-form-wrapper/card-form-wrapper.props'

export function CardFormWrapper(props: CardFormWrapperProps) {
  const {
    title,
    description = '',
    formId,
    isEditing = false,
    disabled = false,
    children,
    backButton = false,
  } = props
  const { back } = useRouter()

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-1'>
          {backButton && (
            <Button
              variant='link'
              onClick={back}
              size='icon'
            >
              <ChevronLeft />
            </Button>
          )}
          
          <CardTitle className='text-xl uppercase'>{title}</CardTitle>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      
      <CardContent>{children}</CardContent>

      <CardFooter className='justify-end'>
        <Button
          type='submit'
          form={formId}
          disabled={disabled}
        >
          {isEditing ? 'Guardar' : 'Crear'}
        </Button>
      </CardFooter>
    </Card>
  )
}
