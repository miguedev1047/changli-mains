import { account, user, verification, session } from '@/server/db/schema/auth'

import {
  characters,
  characterRelations,
  charactersRoles,
  charactersRolesRelations,
} from '@/server/db/schema/characters'
import {
  echoes,
  echoesRelations,
  echoesSets,
  echoesSetsRelations,
} from '@/server/db/schema/echoes'

import { weapons } from '@/server/db/schema/weapons'

export const schemas = {
  characters,
  characterRelations,
  charactersRoles,
  charactersRolesRelations,
  echoes,
  echoesRelations,
  echoesSets,
  echoesSetsRelations,
  weapons,
  user,
  account,
  verification,
  session,
}
