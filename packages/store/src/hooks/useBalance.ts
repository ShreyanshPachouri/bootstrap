import { create } from 'zustand'

interface useBalanceState{
    amount: number,
    locked: number
}

interface useBalanceAction{
    updateAmount: (amount: useBalanceState['amount']) => void
    updateLocked: (locked: useBalanceState['locked']) => void
}

export const useBalance = create< useBalanceAction & useBalanceState>((set) => ({
    amount : 0,
    locked : 0,
    updateAmount : (amount) => set(() => ({ amount: amount })),
    updateLocked: (locked) => set(() => ({ locked: locked }))
}))