import { account, user, verification, session } from '@/server/db/schema/auth'

import {
  characters,
  characterRelations,
  charactersRoles,
  charactersRolesRelations,
} from '@/server/db/schema/characters'
import { weapons } from '@/server/db/schema/weapons'

export const schemas = {
  characters,
  characterRelations,
  charactersRoles,
  charactersRolesRelations,
  user,
  account,
  verification,
  session,
  weapons,
}
