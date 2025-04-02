// src/hooks/use-toast.ts
'use client'

export interface Toast {
  id: string
  title?: string
  description?: string
}

export const useToast = () => {
  // Implementation would go here in a real application
  return {
    toast: () => {},
    dismiss: () => {},
  }
}
