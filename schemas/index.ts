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

export const weaponSchema = z.object({
  id: z.string().optional(),

  name: z
    .string({
      required_error: 'El nombre del arma es obligatorio',
      invalid_type_error: 'El nombre del arma debe ser una cadena de texto',
    })
    .min(2, 'El nombre debe tener al menos 2 caracteres'),

  description: z
    .string({
      required_error: 'La descripción del arma es obligatoria',
      invalid_type_error: 'La descripción debe ser una cadena de texto',
    })
    .min(10, 'La descripción debe tener al menos 10 caracteres'),

  icon_image: z
    .string({
      required_error: 'La URL de la imagen es obligatoria',
      invalid_type_error: 'La URL de la imagen debe ser una cadena de texto',
    })
    .url('El formato de la URL de la imagen no es válido'),

  rarity: z
    .string({
      required_error: 'La rareza del arma es obligatoria',
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
})
export type WeaponSchema = z.infer<typeof weaponSchema>

export const echoSchema = z.object({
  id: z.string().optional(),

  name: z
    .string({
      required_error: 'El nombre del eco es obligatorio',
      invalid_type_error: 'El nombre del eco debe ser una cadena de texto',
    })
    .min(2, 'El nombre debe tener al menos 2 caracteres'),

  description_skill: z
    .string({
      required_error: 'La descripción del eco es obligatoria',
      invalid_type_error: 'La descripción debe ser una cadena de texto',
    })
    .min(10, 'La descripción debe tener al menos 10 caracteres'),

  icon_image: z
    .string({
      required_error: 'La URL de la imagen es obligatoria',
      invalid_type_error: 'La URL de la imagen debe ser una cadena de texto',
    })
    .url('El formato de la URL de la imagen no es válido'),

  class_type: z
    .string({
      required_error: 'La clase del eco es obligatoria',
      invalid_type_error: 'La clase del eco seleccionada no es válida',
    })
    .min(1, 'Debes seleccionar la clase del eco'),

  cost: z
    .string({
      required_error: 'El costo del eco es obligatorio',
      invalid_type_error: 'El costo del eco debe ser un valor valido',
    })
    .min(1, 'El costo es requerido'),

  is_new: z.boolean(),

  is_public: z.boolean(),

  echoes_sets: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1)
    .nonempty('Debes seleccionar al menos un estilo de combate'),
})
export type EchoSchema = z.infer<typeof echoSchema>

export const materialSchema = z.object({
  id: z.string().optional(),

  name: z
    .string({
      required_error: 'El nombre del material es obligatorio',
      invalid_type_error: 'El nombre del material debe ser una cadena de texto',
    })
    .min(2, 'El nombre debe tener al menos 2 caracteres'),

  description: z
    .string({
      required_error: 'La descripción del material es obligatoria',
      invalid_type_error: 'La descripción debe ser una cadena de texto',
    })
    .min(10, 'La descripción debe tener al menos 10 caracteres'),

  icon_image: z
    .string({
      required_error: 'La URL de la imagen es obligatoria',
      invalid_type_error: 'La URL de la imagen debe ser una cadena de texto',
    })
    .url('El formato de la URL de la imagen no es válido'),

  rarity: z
    .string({
      required_error: 'La rareza del material es obligatoria',
      invalid_type_error: 'La rareza debe ser un valor valido',
    })
    .min(1, 'Debes seleccionar una rareza'),

  is_new: z.boolean(),

  is_public: z.boolean(),
})
export type MaterialSchema = z.infer<typeof materialSchema>

export const teamSchema = z.object({
  id: z.string().optional(),

  name: z
    .string({
      required_error: 'El nombre del equipo es obligatorio',
      invalid_type_error: 'El nombre del equipo debe ser una cadena de texto',
    })
    .min(2, 'El nombre debe tener al menos 2 caracteres'),

  characters: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(3, 'Debes seleccionar 3 personajes')
    .max(3, 'Debes seleccionar un máximo de 3 personajes'),
})
export type TeamSchema = z.infer<typeof teamSchema>
