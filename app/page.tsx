import { View } from '@/components/view'
import { ModeSwitch } from '@/components/mode-switch'

export default function Home() {
  return (
    <main className='space-y-4'>
      <header className='flex items-center gap-4'>
        <h2>Personajes</h2>
        <ModeSwitch />
      </header>

      <View />
    </main>
  )
}
