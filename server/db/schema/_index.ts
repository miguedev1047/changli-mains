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
import {
  teams,
  teamsRelations,
  teamsCharacters,
  teamsCharactersRelations,
} from '@/server/db/schema/teams'

import { weapons } from '@/server/db/schema/weapons'
import { materials } from '@/server/db/schema/materials'
import { account, user, verification, session } from '@/server/db/schema/auth'

export const schemas = {
  characters,
  characterRelations,
  charactersRoles,
  charactersRolesRelations,
  echoes,
  echoesRelations,
  echoesSets,
  echoesSetsRelations,
  teams,
  teamsRelations,
  teamsCharacters,
  teamsCharactersRelations,
  weapons,
  materials,
  user,
  account,
  verification,
  session,
}
