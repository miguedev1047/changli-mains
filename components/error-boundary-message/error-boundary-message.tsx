import { ErrorBoundaryProps } from '@/types/error-boundary'
import { Button } from '@/components/ui/button'

export function ErrorBoundaryMessage(props: ErrorBoundaryProps) {
  const { reset } = props

  return (
    <section className='w-full h-full grid place-content-center'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-xl md:text-2xl'>
          Ha ocurrido un error inesperado.
        </h2>
        <Button onClick={() => reset()}>Recargar</Button>
      </div>
    </section>
  )
}
