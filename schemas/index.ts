import { z } from 'zod'

export const recordIdSchema = z.object({
  id: z
    .string({
      required_error: 'El ID es obligatorio',
      invalid_type_error: 'El ID debe ser una cadena de texto',
    })
    .min(1, 'Debes proporcionar un ID'),
})

export const recordNameSchema = z.object({
  name: z
    .string({
      required_error: 'El nombre es obligatorio',
      invalid_type_error: 'El ID debe ser una cadena de texto',
    })
    .min(1, 'Debes proporcionar un nombre'),
})

export const loginSchema = z.object({
  email: z.string().email('Este email es invalido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
})
export type LoginSchema = z.infer<typeof loginSchema>

export const characterSchema = z.object({
  name: z
    .string({
      required_error: 'El nombre del personaje es obligatorio',
      invalid_type_error:
        'El nombre del personaje debe ser una cadena de texto',
    })
    .min(2, 'El nombre debe tener al menos 2 caracteres'),

  description: z
    .string({
      required_error: 'La descripción del personaje es obligatoria',
      invalid_type_error: 'La descripción debe ser una cadena de texto',
    })
    .min(10, 'La descripción debe tener al menos 10 caracteres'),

  splash_image: z
    .string({
      required_error: 'La URL de la imagen es obligatoria',
      invalid_type_error: 'La URL de la imagen debe ser una cadena de texto',
    })
    .url('El formato de la URL de la imagen no es válido'),

  icon_image: z
    .string({
      required_error: 'La URL de la imagen es obligatoria',
      invalid_type_error: 'La URL de la imagen debe ser una cadena de texto',
    })
    .url('El formato de la URL de la imagen no es válido'),

  element_type: z
    .string({
      required_error: 'El tipo de elemento es obligatorio',
      invalid_type_error: 'El tipo de elemento seleccionado no es válido',
    })
    .min(1, 'Debes seleccionar un tipo de elemento'),

  rarity: z
    .string({
      required_error: 'La rareza del personaje es obligatoria',
      invalid_type_error: 'La rareza debe ser un valor válido',
    })
    .min(1, 'Debes seleccionar una rareza'),

  weapon_type: z
    .string({
      required_error: 'El tipo de arma es obligatorio',
      invalid_type_error: 'El tipo de arma seleccionado no es válido',
    })
    .min(1, 'Debes seleccionar un tipo de arma'),

  is_new: z.boolean(),

  is_public: z.boolean(),

  combat_styles: z
    .array(
      z.object({
        label: z.string(),
        description: z.string(),
        value: z.string(),
      })
    )
    .min(1)
    .nonempty('Debes seleccionar al menos un estilo de combate'),
})
export type CharacterSchema = z.infer<typeof characterSchema>
