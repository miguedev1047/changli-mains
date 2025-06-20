import { echoSetsOptions } from '@/constants/options'
import { lowerCaseFunc } from '@/helpers/to-lower-str'
import { RouterOutputs } from '@/trpc/react'

type EchoesProps = RouterOutputs['echoes']['getAll']
type Filters = { [k: string]: string }

export function filterEchoes(echoes: EchoesProps, filters: Filters) {
  if (!echoes) return []

  const { name, cost, class_type } = filters

  return echoes.filter((item) => {
    const matcher = [
      name ? lowerCaseFunc(item.name).includes(lowerCaseFunc(name)) : true,
      cost ? lowerCaseFunc(item.cost).includes(lowerCaseFunc(cost)) : true,
      class_type
        ? lowerCaseFunc(item.class_type).includes(lowerCaseFunc(class_type))
        : true,
    ]

    return matcher.every(Boolean)
  })
}

type echoSetProps = {
  id: string
  createdAt: string
  updatedAt: string
  echoId: string
  echoSet: string
}

export function mapEchoSetToOptions(data: echoSetProps[]) {
  return data.map((i) => {
    return echoSetsOptions.find((j) => j.value === i.echoSet)
  })
}