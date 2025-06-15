import {
  CharactersImg,
  EchoesImg,
  MaterialsImg,
  WeaponsImg,
} from '@/assets/images/_index'
import { Box, Database, Sword, Table, Users } from 'lucide-react'

export const sidebarData = {
  navMain: [
    {
      title: 'Personajes',
      url: '/dashboard/characters',
      icon: Users,
    },
    {
      title: 'Armas',
      url: '/dashboard/weapons',
      icon: Sword,
    },
    {
      title: 'Ecos',
      url: '/dashboard/echoes',
      icon: Database,
    },
    {
      title: 'Materiales',
      url: '/dashboard/materials',
      icon: Box,
    },
    {
      title: 'Equipos',
      url: '/dashboard/teams',
      icon: Table,
    },
  ],
}

export const quickLinksData = [
  {
    title: 'Personajes',
    href: '/dashboard/characters',
    src: CharactersImg,
    color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    icon: Users,
  },
  {
    title: 'Armas',
    href: '/dashboard/weapons',
    src: WeaponsImg,
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    icon: Sword,
  },
  {
    title: 'Ecos',
    href: '/dashboard/echoes',
    src: EchoesImg,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    icon: Database,
  },
  {
    title: 'Materiales',
    href: '/dashboard/materials',
    src: MaterialsImg,
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    icon: Box,
  },
]

export const rarityColorsData = {
  ONE_STAR: 'after:bg-gradient-to-t after:from-gray-300/15 after:to-transparent',
  TWO_STAR: 'after:bg-gradient-to-t after:from-green-300/15 after:to-transparent',
  THREE_STAR: 'after:bg-gradient-to-t after:from-blue-300/15 after:to-transparent',
  FOUR_STAR: 'after:bg-gradient-to-t after:from-purple-300/15 after:to-transparent',
  FIVE_STAR: 'after:bg-gradient-to-t after:from-yellow-300/15 after:to-transparent',
}
