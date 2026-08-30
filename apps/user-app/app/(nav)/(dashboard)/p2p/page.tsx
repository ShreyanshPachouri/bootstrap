import { PageHead } from "../../../../../../packages/ui/src/PageHead";
import { SendCard } from "../../../../components/SendCard";
import { P2PTxn } from "../../../../components/P2pTransaction";

export default function P2P() {
    return <div className="w-full h-full ">
        <PageHead name="P2P Transfer"/>
        <div className="flex flex-col lg:flex-row! w-full px-5 gap-5">
            
            <div className="w-full lg:w-1/3! self-center">
                <SendCard />
            </div>
            
            <div className=" w-full lg:w-2/3!">
                <P2PTxn />
            </div>
        </div>
    </div>  
}