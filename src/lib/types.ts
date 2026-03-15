import type { LucideIcon } from "lucide-react"

export type NavPrimaryProps = {
  projects: {
    title: string
    to: string
    icon: LucideIcon
    activeOptions: {exact: boolean}
  }[]
}