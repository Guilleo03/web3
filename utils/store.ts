import { create } from "zustand";

interface Store {
  image: File | undefined;
  setImage: (img: File | undefined) => void;

  error: string;
  setError: (msg: string) => void;

  score: number | undefined;
  setScore: (score: number) => void;

  response: string;
  setResponse: (response: string) => void;

  openFileDialog: boolean;
  setOpenFileDialog: (open: boolean) => void;

  openPhotoDialog: boolean;
  setOpenPhotoDialog: (open: boolean) => void;

  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useStore = create<Store>()((set) => ({
  image: undefined,
  setImage: (img) => set({ image: img }),

  error: "",
  setError: (msg) => set({ error: msg }),

  score: undefined,
  setScore: (msg) => set({ score: msg }),

  response: "",
  setResponse: (msg) => set({ response: msg }),

  openFileDialog: false,
  setOpenFileDialog: (open) => set({ openFileDialog: open }),

  openPhotoDialog: false,
  setOpenPhotoDialog: (open) => set({ openPhotoDialog: open }),

  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
