import { Button } from '@/components/ui/button'
import { Loader2, LoaderCircle } from 'lucide-react'
import { Loader } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'

type SpinLoaderSquareCardProps = { fullSize?: boolean }

export function SpinContentLoader() {
  return (
    <div className='flex h-full items-center justify-center pt-8'>
      <Loader2 className='animate-spin' />
    </div>
  )
}

export function SpinCardLoader() {
  return (
    <Card className='p-5 w-full h-24 flex items-center'>
      <Loader className='animate-spin' />
    </Card>
  )
}

export function SpinLoaderSquareCard(props: SpinLoaderSquareCardProps) {
  const { fullSize = false } = props
  return (
    <Card
      className={cn(
        'aspect-square grid place-items-center',
        fullSize ? 'size-full' : 'size-20'
      )}
    >
      <Loader className='animate-spin' />
    </Card>
  )
}

export function SpinLoaderAspectRatio() {
  return (
    <Card className='size-full aspect-2/3 grid place-items-center'>
      <Loader className='animate-spin' />
    </Card>
  )
}

export function SpinLoaderInput() {
  return <Skeleton className='w-full h-9 rounded-md border-input border' />
}

export function SpinLoaderButton() {
  return (
    <Button
      disabled
      size='icon'
    >
      <LoaderCircle
        className='animate-spin'
        size={16}
        strokeWidth={2}
        aria-hidden='true'
      />
    </Button>
  )
}
