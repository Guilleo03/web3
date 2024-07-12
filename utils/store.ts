import { create } from "zustand"

interface Store {
  image: File | undefined
  setImage: (img: File) => void
}

export const useStore = create<Store>()((set) => ({
  image: undefined,
  setImage: (img: File) => set({ image: img }),
}))
