"use client"
import { useTranxList } from "@repo/store";
import { Card } from "../../../packages/ui/src/Card" 
import { Title } from "../../../packages/ui/src/Title" 
import { useSession } from "next-auth/react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

export const GraphComponent = () => {
    const user = useSession()
    const tranxList = useTranxList((s) => s.tranxList);
    const tranx = tranxList.map((x) => {return {
        name: x.time.toDateString(),
        // Add one more line of data by finding the initial money using db call
        // Show the spending trend through amount + that or - that
        out: x.from.name == user?.data?.user.name? x.amount : 0,
        in: x.to.name == user?.data?.user.name? x.amount : 0,
    }}).reverse();

    return <div className="w-full">
        <Card >
            <Title title="Spending Graph"/>
            <LineChart className="p-5 dark:text-zinc-100 duration-[2.5s]"
            style={{ height: 400, width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
            responsive
            data={tranx}
            margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 0,
            }}
            >
                <CartesianGrid stroke="#bbb" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="in"  stroke="lightGreen" strokeWidth={2} name="Amount Received" />
                <Line type="monotone" dataKey="out" stroke="red" strokeWidth={2} name="Amount Sent" />
                <XAxis dataKey="name" stroke="#bbb" />
                <YAxis width="auto" stroke="#bbb" className="dark:stroke-zinc-400" label={{ value: 'Amount', position: 'insideLeft', angle: -90 }} />
                <Legend align="center" />
            </LineChart>
        </Card>
    </div>
} 