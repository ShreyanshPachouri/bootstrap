"use client"

import { TransferCard } from "../../../packages/ui/src/TransferCard"
import { Title } from "../../../packages/ui/src/Title"
import { useSession } from "next-auth/react"
import { useP2P } from "@repo/store"
import { ScrollShell } from "../../../packages/ui/src/ScrollShell"
import { Card } from "../../../packages/ui/src/Card"

export const P2PTxn = () => {
    const session = useSession()
    const p2pTransfers = useP2P((s) => s.p2pTransfers).reverse()

    return <Card>
    <div className="h-full p-5 pb-15 w-full ">
            <Title title="Transfer History" />
            <div className="pt-4 flex flex-col gap-4 overflow-y-auto noscrollbar h-[51.5vh]">
                {p2pTransfers.map((x) => <div key={x.id}>
                    <TransferCard tranx={x}  id={session.data?.user.id || ""}/>
                </div>)}
                <ScrollShell />
            </div>
    </div>
    </Card>
    
}