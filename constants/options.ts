import {
  ElectroIcon,
  AeroIcon,
  FusionIcon,
  GlacioIcon,
  HavocIcon,
  SpectroIcon,
} from '@/assets/elements/_index'

import {
  BoardbladeIcon,
  GuantletsIcon,
  PistolsIcon,
  RectifierIcon,
  SwordIcon,
} from '@/assets/weapons/_index'

export const elementOptions = [
  {
    label: 'Fusion',
    value: 'FUSION',
    src: FusionIcon,
  },
  {
    label: 'Electro',
    value: 'ELECTRO',
    src: ElectroIcon,
  },
  {
    label: 'Aero',
    value: 'AERO',
    src: AeroIcon,
  },
  {
    label: 'Destruction',
    value: 'HAVOC',
    src: HavocIcon,
  },
  {
    label: 'Espectro',
    value: 'SPECTRO',
    src: SpectroIcon,
  },
  {
    label: 'Glacio',
    value: 'GLACIO',
    src: GlacioIcon,
  },
]

export const weaponOptions = [
  {
    label: 'Espada',
    value: 'SWORD',
    src: SwordIcon,
  },
  {
    label: 'Mandoble',
    value: 'BOARD_BLADE',
    src: BoardbladeIcon,
  },
  {
    label: 'Rectificador',
    value: 'RECTIFIER',
    src: RectifierIcon,
  },
  {
    label: 'Guanteletes',
    value: 'GUANTLETS',
    src: GuantletsIcon,
  },
  {
    label: 'Pistolas',
    value: 'PISTOLS',
    src: PistolsIcon,
  },
]

export const rarityOptions = [
  {
    label: '1 Estrella',
    value: 'ONE_STAR',
    star: 1,
  },
  {
    label: '2 Estrellas',
    value: 'TWO_STAR',
    star: 2,
  },
  {
    label: '3 Estrellas',
    value: 'THREE_STAR',
    star: 3,
  },
  {
    label: '4 Estrellas',
    value: 'FOUR_STAR',
    star: 4,
  },
  {
    label: '5 Estrellas',
    value: 'FIVE_STAR',
    star: 5,
  },
]

export const combatStylesOptions = [
  {
    label: 'Apoyo y sanador',
    description: 'Mejora la supervivencia del equipo.',
    value: 'SUPPORT_AND_HEALER',
  },
  {
    label: 'Proveedor de daño principal',
    description: 'Poderoso proveedor de daño del equipo.',
    value: 'MAIN_DAMAGE_DEALER',
  },
  {
    label: 'Eficiencia de Concierto',
    description: 'Regeneración rápida de Energía de Concierto.',
    value: 'CONCERTO_EFFICIENCY',
  },
  {
    label: 'Daño de ataque básico',
    description: 'Inflige mayor daño de ataque básico.',
    value: 'BASIC_ATTACK_DAMAGE',
  },
  {
    label: 'Daño de ataque cargado',
    description: 'Inflige mayor daño de ataque cargado.',
    value: 'CHARGED_ATTACK_DAMAGE',
  },
  {
    label: 'Daño de Habilidad de resonancia',
    description: 'Inflige mayor daño de Habilidad de resonancia.',
    value: 'RESONANCE_SKILL_DAMAGE',
  },
  {
    label: 'Daño de Liberación de resonancia',
    description: 'Inflige mayor daño de Liberación de resonancia.',
    value: 'RESONANCE_RELEASE_DAMAGE',
  },
  {
    label: 'Tracción',
    description:
      'Atrae a los objetivos dentro del rango hacia una posición específica.',
    value: 'PULL',
  },
  {
    label: 'Ataque coordinado',
    description: 'Sobresalir en ataques coordinados.',
    value: 'COORDINATED_ATTACK',
  },
  {
    label: 'Estancamiento',
    description: 'Ralentiza a los objetivos dentro de un cierto rango.',
    value: 'SLOW',
  },
  {
    label: 'Regen. de Liberación de resonancia',
    description:
      'Recupera la Energía de Resonancia de un compañero de equipo específico.',
    value: 'RESONANCE_ENERGY_REGEN',
  },
  {
    label: 'Reducción de Fuerza de vibración',
    description:
      'Reduce más eficazmente la Fuerza de vibración de los objetivos.',
    value: 'VIBRATION_FORCE_REDUCTION',
  },
  {
    label: 'Anti-interrupción',
    description: 'Mejora la anti-interrupción de un compañero específico.',
    value: 'ANTI_INTERRUPT',
  },
  {
    label: 'Amplificación de daño',
    description: 'Amplifica el daño de un compañero específico.',
    value: 'DAMAGE_AMPLIFICATION',
  },
  {
    label: 'Amplificación de Daño Destrucción',
    description: 'Amplifica el Daño Destrucción de un compañero específico.',
    value: 'DESTRUCTION_DAMAGE_AMP',
  },
  {
    label: 'Amplificación de Daño Aero',
    description: 'Amplifica el Daño Aero de un compañero específico.',
    value: 'AERO_DAMAGE_AMP',
  },
  {
    label: 'Amplificación de Daño Electro',
    description: 'Amplifica el Daño Electro de un compañero específico.',
    value: 'ELECTRO_DAMAGE_AMP',
  },
  {
    label: 'Amplificación de Daño Fusión',
    description: 'Amplifica el Daño Fusión de un compañero específico.',
    value: 'FUSION_DAMAGE_AMP',
  },
  {
    label: 'Amplificación de Daño Gelio',
    description: 'Amplifica el Daño Gelio de un compañero específico.',
    value: 'GLACIO_DAMAGE_AMP',
  },
  {
    label: 'Amplificación de Daño Espectro',
    description: 'Amplifica el Daño Espectro de un compañero específico.',
    value: 'SPECTRO_DAMAGE_AMP',
  },
  {
    label: 'Amplificación del ataque básico',
    description:
      'Amplifica el daño del ataque básico de un compañero específico.',
    value: 'BASIC_ATTACK_AMP',
  },
  {
    label: 'Amplificación del ataque cargado',
    description:
      'Amplifica el daño del ataque cargado de un compañero específico.',
    value: 'CHARGED_ATTACK_AMP',
  },
  {
    label: 'Amplificación de Habilidad de resonancia',
    description:
      'Amplifica el daño de la Habilidad de resonancia de un compañero específico.',
    value: 'RESONANCE_SKILL_AMP',
  },
  {
    label: 'Amplificación de Liberación de resonancia',
    description:
      'Amplifica el daño de la Liberación de resonancia de un compañero específico.',
    value: 'RESONANCE_RELEASE_AMP',
  },
  {
    label: 'Amplificación de ataque coordinado',
    description:
      'Proporciona amplificación de daño de ataque coordinado para un personaje específico del equipo.',
    value: 'COORDINATED_ATTACK_AMP',
  },
  {
    label: 'Erosión eólica',
    description:
      'Usa el efecto de erosión eólica para ganar ventaja en combate.',
    value: 'WIND_EROSION',
  },
  {
    label: 'Llamarada eléctrica',
    description:
      'Usa el efecto de llamarada eléctrica para ganar ventaja en combate.',
    value: 'ELECTRIC_FLARE',
  },
  {
    label: 'Rozadura gélida',
    description:
      'Usa el efecto de rozadura gélida para ganar ventaja en combate.',
    value: 'FROSTBITE',
  },
  {
    label: 'Estallido de fusión',
    description:
      'Usa el efecto de estallido de fusión para ganar ventaja en combate.',
    value: 'FUSION_BURST',
  },
  {
    label: 'Espectro estridente',
    description:
      'Usa el efecto de espectro estridente para ganar ventaja en combate.',
    value: 'STRIDENT_SPECTRO',
  },
  {
    label: 'Ruina de destrucción',
    description:
      'Usa el efecto de ruina de destrucción para ganar ventaja en combate.',
    value: 'DESTRUCTION_RUIN',
  },
]
