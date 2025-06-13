import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarStore {
  isOpen: boolean
  onToggle: (value: boolean) => void
}

export const useSidebarStore = create(
  persist<SidebarStore>(
    (set) => ({
      isOpen: true,
      onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: 'sidebar' }
  )
)
