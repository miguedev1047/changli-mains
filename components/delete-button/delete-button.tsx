'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DeleteButtonProps } from '@/components/delete-button/delete-button.type'
import { useDelete } from '@/components/delete-button/delete-button.hook'

export function DeleteButton(props: DeleteButtonProps) {
  const { children, className, itemId, disabled, onDelete, queryKey } = props
  const deleteHook = useDelete({ itemId, onDelete, queryKey })

  return (
    <TooltipProvider>
      <Tooltip>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                disabled={deleteHook.isPending || disabled}
                variant='destructive'
                size='icon'
                className={cn(className, 'p-1 z-40')}
              >
                {children}
              </Button>
            </TooltipTrigger>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Si estas seguro, presiona el
                botón de eliminar.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={deleteHook.isPending || disabled}>
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={deleteHook.onDeleteItem}
                disabled={deleteHook.isPending || disabled}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <TooltipContent side='bottom'>
          <p>Eliminar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
