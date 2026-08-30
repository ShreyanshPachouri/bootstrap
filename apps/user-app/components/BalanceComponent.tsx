"use client"

import { Card } from "../../../packages/ui/src/Card" 
import { Title } from "../../../packages/ui/src/Title" 
import { TableItem } from "../../../packages/ui/src/TableItem";
import { useBalance } from "@repo/store";

export const BalanceCard = () => {
    const amount = useBalance((s) => s.amount);
    const locked = useBalance((s) => s.locked);
    const total = useBalance((s) => s.locked + s.amount); // using selector

    return <>
        <Card>
            <Title title="Balance List" />
            <TableItem name="Unlocked Balance" value={amount + " INR"}/>
            <TableItem name="Total Locked Balance" value={locked + " INR"}/>
            <TableItem name="Total Balance" value={ total + " INR"}/>
        </Card>
    </>
} 