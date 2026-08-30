"use client"

import { useTranx } from "@repo/store";
import { Card } from "../../../packages/ui/src/Card" 
import { Center } from "../../../packages/ui/src/Center" 
import { ScrollShell } from "../../../packages/ui/src/ScrollShell"
import { Title } from "../../../packages/ui/src/Title" 
import { TranxCard } from "../../../packages/ui/src/TranxCard";

export const OnRampCard = () => {
    const transactions = useTranx((s) => s.transactions.reverse())
    

    return <div>
        <Card>
            <ScrollShell/>
            <Title title="On Ramp Card" />
            <div className="h-[30vh] overflow-y-scroll noscrollbar oveflow-x-hidden">
                { transactions.length > 0 ? 
                    transactions.map((x) => <div key={x.id}> 
                        <TranxCard amount={x.amount} provider={x.provider} startTime={x.startTime} status={x.status}/> 
                    </div>) : 
                    <Center> 
                        <div className="text-md font-light font-sans">No Recent transactions</div>
                    </Center>
                    }
            </div>
        </Card>
    </div>
} 