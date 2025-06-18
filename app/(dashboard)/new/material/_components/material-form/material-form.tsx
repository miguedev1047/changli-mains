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
import { rarityOptions } from '@/constants/options'
import { Textarea } from '@/components/ui/textarea'
import { CardFormWrapper } from '@/components/card-form-wrapper'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useMaterialForm } from '@/app/(dashboard)/new/material/_components/material-form/material-form.hook'

export function MaterialForm() {
  const { form, isSubmitting, onSubmit } = useMaterialForm()

  return (
    <CardFormWrapper
      title='Nuevo material'
      formId='material-form'
      disabled={isSubmitting}
      backButton
    >
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          id='material-form'
          className='grid md:grid-cols-2 grid-cols-1 gap-4'
        >
          <FormField
            name='name'
            control={form.control}
            render={({ field }) => (
              <FormItem className='md:col-span-2 col-span-1'>
                <FormLabel>Nombre del material</FormLabel>

                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder='Flor de Pecok'
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
            name='rarity'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rareza del material</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isSubmitting}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Seleccione una rareza' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {rarityOptions.map((item) => (
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
            name='description'
            control={form.control}
            render={({ field }) => (
              <FormItem className='md:col-span-2 col-span-1'>
                <FormLabel>Descripción del material</FormLabel>

                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isSubmitting}
                    placeholder='Escribe una descripción del material'
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
                  <FormLabel>Material nuevo</FormLabel>
                  <FormDescription>
                    Alternar si el material es nuevo
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
                    Alternar si el material es publico
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
