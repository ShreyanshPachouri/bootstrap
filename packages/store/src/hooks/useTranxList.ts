import { create } from "zustand";

export interface TranxState {
    tranxList : {
        from : {
            name: string | null,
            num: string | null,
        },
        to : {
            name: string | null,
            num: string | null,
        },
        amount : number,
        time: Date
    }[]
}

interface TranxAction {
    updateTranxList: (tranxList: TranxState['tranxList']) => void 
}

export const useTranxList = create<TranxAction & TranxState>((set) => ({
    tranxList : [],
    updateTranxList: (tranxList) => set(() => ({tranxList: tranxList}))
}))