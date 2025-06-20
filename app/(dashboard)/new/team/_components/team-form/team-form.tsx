'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  useOptsQuery,
  useTeamForm,
} from '@/app/(dashboard)/new/team/_components/team-form/team-form.hook'
import { CardFormWrapper } from '@/components/card-form-wrapper'
import { Input } from '@/components/ui/input'
import { EntityPicker } from '@/components/entity-picker'
import { Suspense } from 'react'
import { SpinContentLoader } from '@/components/spin-loaders'

export function TeamForm() {
  const { form, isSubmitting, onSubmit } = useTeamForm()
  const { charactersQuery } = useOptsQuery()

  return (
    <CardFormWrapper
      title='Nuevo equipo'
      formId='team-form'
      disabled={isSubmitting}
      backButton
    >
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          id='team-form'
          className='grid gap-4'
        >
          <FormField
            name='name'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del equipo</FormLabel>

                <FormControl>
                  <Input
                    placeholder='Changli Quickswap'
                    disabled={isSubmitting}
                    autoComplete='off'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='characters'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personajes</FormLabel>

                <FormControl>
                  <Suspense fallback={<SpinContentLoader />}>
                    <EntityPicker
                      queryData={charactersQuery}
                      onChange={field.onChange}
                      commandProps={{ label: 'Selecciona un personaje' }}
                      emptyIndicator={
                        <p className='text-center text-sm'>
                          No hay personajes disponibles.
                        </p>
                      }
                      placeholder='Selecciona personajes'
                    />
                  </Suspense>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </CardFormWrapper>
  )
}
