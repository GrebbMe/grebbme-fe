import { create } from 'zustand';

export type ToastSize = 'sm' | 'lg';

export interface ToastProps {
  content: string;
  size: ToastSize;
}

export interface ToastState {
  toast: ToastProps | null;
  setToast: (toast: ToastProps) => void;
  clearToast: () => void;
}

export const useToastStore: () => ToastState = create<ToastState>()((set) => ({
  toast: null,
  setToast: (toast: ToastProps) => set({ toast }),
  clearToast: () => set({ toast: null }),
}));