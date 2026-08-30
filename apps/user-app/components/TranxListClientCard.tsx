'use client'

import { useTranxList } from "@repo/store"
import { TranxListCard } from "./TranxListCard"

export const TranxListClient = () => {
    const tranxList = useTranxList((s) => s.tranxList)

    return <TranxListCard tranxList={tranxList} /> 
}