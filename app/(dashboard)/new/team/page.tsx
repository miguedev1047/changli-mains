import { TeamForm } from '@/app/(dashboard)/new/team/_components/team-form'
import { HydrateClient } from '@/trpc/server'

export default function DashboardNewTeamPage() {
  return (
    <HydrateClient>
      <section>
        <TeamForm />
      </section>
    </HydrateClient>
  )
}
