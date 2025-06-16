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
import { rarityOptions, weaponOptions } from '@/constants/options'
import { Textarea } from '@/components/ui/textarea'
import { CardFormWrapper } from '@/components/card-form-wrapper'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useWeaponForm } from '@/app/(dashboard)/new/weapon/_components/weapon-form/weapon-form.hook'

export function WeaponForm() {
  const { form, isSubmitting, onSubmit } = useWeaponForm()

  return (
    <CardFormWrapper
      title='Nueva arma'
      formId='weapon-form'
      disabled={isSubmitting}
      backButton
    >
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          id='weapon-form'
          className='grid md:grid-cols-2 grid-cols-1 gap-4'
        >
          <FormField
            name='name'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del arma</FormLabel>

                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder='Brillo abrasador'
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
            name='weapon_type'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de arma</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isSubmitting}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Seleccione un tipo de arma' />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {weaponOptions.map((item) => (
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
            name='rarity'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rareza del arma</FormLabel>

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
                    {rarityOptions.slice(2, 5).map((item) => (
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
                <FormLabel>Descripción del arma</FormLabel>

                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isSubmitting}
                    placeholder='Escribe una descripción del arma'
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
                  <FormLabel>Arma nueva</FormLabel>
                  <FormDescription>
                    Alternar si el arma es nuevo
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
                    Alternar si el arma es publica
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
