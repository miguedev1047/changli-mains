import { rarityColorsData } from "@/constants/data"
import { elementOptions, weaponOptions } from "@/constants/options"

export function getIconElement(element: string) {
  if (!element) return
  const ICON = elementOptions.find((el) => el.value === element)
  return ICON
}

export function getIconWeapon(weapon: string) {
  if (!weapon) return
  const ICON = weaponOptions.find((we) => we.value === weapon)
  return ICON
}

export function getRarityClass(rarity: string) {
  if (!rarity) return
  const RARITY_COLOR = rarityColorsData[rarity as keyof typeof rarityColorsData]
  return RARITY_COLOR
}