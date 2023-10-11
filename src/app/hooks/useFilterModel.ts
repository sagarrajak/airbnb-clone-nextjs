
import React from 'react'
import { create } from 'zustand';

interface FilterModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFilterModel =  create<FilterModelStore>((set) => ({
  isOpen: false,
  onClose: () => set({isOpen: false}),
  onOpen: () => set({isOpen: true})
}))

export default useFilterModel