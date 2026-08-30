import { BalanceCard } from "./BalanceComponent"
import { TranxListClient } from "./TranxListClientCard"

export const DashboardComponent = () => {
    return <div className="flex gap-5 flex-col">
        <BalanceCard />
        <TranxListClient />
    </div>
}