import { create } from 'zustand'

interface LoginModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginModel = create<LoginModelStore>((set) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true})
}))

export default useLoginModel