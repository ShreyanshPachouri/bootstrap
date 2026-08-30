import { AddMoneyCard } from "../../../../components/AddMoneyComponent";
import { BalanceCard } from "../../../../components/BalanceComponent";
import { OnRampCard } from "../../../../components/OnRampTransaction";
import { PageHead } from "../../../../../../packages/ui/src/PageHead"

export default async function Transfer() {
  
  return <div className="w-full h-full">
    {/* Heading */}
    <PageHead name="Transfer Page" />
    <div className="flex flex-col sm:flex-row! gap-4 px-5 py-2">
      
      {/* ADD MONEY */}
      <div className="w-full sm:w-1/2!">
        <AddMoneyCard />
      </div>

      <div className="flex flex-col w-full sm:w-1/2! gap-4">
        {/* BALANCE */}
        <BalanceCard />
        {/* RECENT TRANX */}
        <OnRampCard />
      </div>
    </div>
  </div>
}