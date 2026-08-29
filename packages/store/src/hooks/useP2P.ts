import { create } from "zustand"

export interface p2pTransferType{
    id: string,
    timestamp: Date,
    amount: number,
    toUserId: string,
    toUser: {
        name: string | null,
        number: string
    },
    fromUserId: string,
    fromUser: {
        name: string | null,
        number: string
    } 
}

interface p2pState{
    p2pTransfers: p2pTransferType[]
}

interface p2pAction{
    updateP2PTransfers: (p2pTransfers: p2pState['p2pTransfers']) => void
}

export const useP2P = create<p2pState & p2pAction>((set) => ({
    p2pTransfers: [],
    updateP2PTransfers: (p2pTransfers) => set(() => ({ p2pTransfers: p2pTransfers}))
}))