import { LucideProps } from 'lucide-react'

export type NavMainProps = {
  items: {
    title: string
    url: string
    icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
  }[]
}
