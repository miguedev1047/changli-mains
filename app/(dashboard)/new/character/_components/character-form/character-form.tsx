'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  combatStylesOptions,
  elementOptions,
  rarityOptions,
  weaponOptions,
} from '@/constants/options'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { CardFormWrapper } from '@/components/card-form-wrapper'
import { Input } from '@/components/ui/input'
import { MultipleSelect } from '@/components/ui/multiple-select'
import { Switch } from '@/components/ui/switch'
import { useCharacterForm } from '@/app/(dashboard)/new/character/_components/character-form/character-form.hook'

export function CharacterForm() {
  const { form, isSubmitting, onSubmit } = useCharacterForm()

  return (
    <CardFormWrapper
      title='Nuevo personaje'
      formId='character-form'
      disabled={form.formState.isSubmitting}
      backButton
    >
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          id='character-form'
          className='grid md:grid-cols-2 grid-cols-1 gap-4'
        >
          <FormField
            name='name'
            control={form.control}
            render={({ field }) => (
              <FormItem className='md:col-span-2 col-span-1'>
                <FormLabel>Nombre del personaje</FormLabel>

                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder='Changli'
                    autoComplete='off'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='splash_image'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL del splash art</FormLabel>

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
            name='element_type'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Elemento</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Seleccione un elemento' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {elementOptions.map((item) => (
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
            name='weapon_type'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de arma</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
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
                <FormLabel>Rareza del personaje</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Seleccione una rareza' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {rarityOptions.slice(3, 5).map((item) => (
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
            name='combat_styles'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estilo de combates</FormLabel>

                <FormControl>
                  <MultipleSelect
                    onChange={field.onChange}
                    commandProps={{ label: 'Seleccione un estilo de combate' }}
                    defaultOptions={combatStylesOptions}
                    disabled={isSubmitting}
                    placeholder='Seleccione un estilo de combate'
                    hidePlaceholderWhenSelected
                    emptyIndicator={
                      <p className='text-center text-sm'>
                        No se encontraron estilos de combate
                      </p>
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='description'
            control={form.control}
            render={({ field }) => (
              <FormItem className='md:col-span-2 col-span-1'>
                <FormLabel>Descripción del personaje</FormLabel>

                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isSubmitting}
                    placeholder='Escribe una descripción del personaje'
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
                  <FormLabel>Personaje nuevo</FormLabel>
                  <FormDescription>
                    Alternar si el personaje es nuevo
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
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
                    Alternar si el personaje es publico
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
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
