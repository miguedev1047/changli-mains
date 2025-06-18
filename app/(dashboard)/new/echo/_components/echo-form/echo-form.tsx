'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  echoClassTypeOptions,
  echoCostOptions,
  echoSetsOptions,
} from '@/constants/options'
import { Textarea } from '@/components/ui/textarea'
import { CardFormWrapper } from '@/components/card-form-wrapper'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useEchoForm } from '@/app/(dashboard)/new/echo/_components/echo-form/echo-form.hook'
import { MultipleSelect } from '@/components/ui/multiple-select'

export function EchoForm() {
  const { form, isSubmitting, onSubmit } = useEchoForm()

  const formattedEchoSets = echoSetsOptions.map((i) => ({
    label: i.label,
    value: i.value,
  }))

  return (
    <CardFormWrapper
      title='Nuevo eco'
      formId='echo-form'
      disabled={isSubmitting}
      backButton
    >
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          id='echo-form'
          className='grid md:grid-cols-2 grid-cols-1 gap-4'
        >
          <FormField
            name='name'
            control={form.control}
            render={({ field }) => (
              <FormItem className='md:col-span-2 col-span-1'>
                <FormLabel>Nombre del eco</FormLabel>

                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder='Inferno Rider'
                    autoComplete='off'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='icon_image'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL del icono</FormLabel>

                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder='https://example.com/image.jpg'
                    autoComplete='off'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='cost'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coste del eco</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isSubmitting}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Seleccione un coste' />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {echoCostOptions.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='class_type'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Clase del eco</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isSubmitting}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Seleccione una clase de eco' />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {echoClassTypeOptions.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='echoes_sets'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sets de eco</FormLabel>

                <FormControl>
                  <MultipleSelect
                    onChange={field.onChange}
                    commandProps={{ label: 'Seleccione un set de eco' }}
                    defaultOptions={formattedEchoSets}
                    disabled={isSubmitting}
                    placeholder='Seleccione un set de eco'
                    hidePlaceholderWhenSelected
                    emptyIndicator={
                      <p className='text-center text-sm'>
                        No se encontraron sets de eco
                      </p>
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='description_skill'
            control={form.control}
            render={({ field }) => (
              <FormItem className='md:col-span-2 col-span-1'>
                <FormLabel>Descripción del eco</FormLabel>

                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isSubmitting}
                    placeholder='Escribe una descripción del eco'
                    className='min-h-[100px] resize-none'
                    autoComplete='off'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='is_new'
            render={({ field }) => (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                <div className='space-y-0.5'>
                  <FormLabel>Eco nuevo</FormLabel>
                  <FormDescription>
                    Alternar si el eco es nuevo
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='is_public'
            render={({ field }) => (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                <div className='space-y-0.5'>
                  <FormLabel>Publico para todos</FormLabel>
                  <FormDescription>
                    Alternar si el eco es publico
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </CardFormWrapper>
  )
}
