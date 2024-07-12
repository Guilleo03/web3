import { create } from "zustand";

interface Store {
  image: File | undefined;
  setImage: (img: File | undefined) => void;

  error: string;
  setError: (msg: string) => void;
}

export const useStore = create<Store>()((set) => ({
  image: undefined,
  setImage: (img) => set({ image: img }),

  error: "",
  setError: (msg) => set({ error: msg }),
}));
