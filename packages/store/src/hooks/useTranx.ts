import { create } from "zustand";

interface useTranxState {
    transactions : {
        id: string,
        status: "Success" | "Failure" | "Processing",
        token: string,
        provider: string,
        amount: number,
        startTime: Date
    }[]
}

interface useTranxAction {
    updateTransactions : (transactions : useTranxState['transactions']) => void
}

export const useTranx = create<useTranxState & useTranxAction>( (set) => ({
    transactions : [],
    updateTransactions : (transactions) => set(() => ({ transactions : transactions}))
}))