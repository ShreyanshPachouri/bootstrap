import { ReceivedIcon, SentIcon } from "./Icons"

interface TransferProp {
    tranx: {
        id : string,
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
    id: string
}

export const TransferCard = ({tranx, id} : TransferProp) => {
    const isSent = (tranx.fromUserId == id) 

    return <div className="rounded-xl border-2 border-white/10 p-5 bg-zinc-900/65 hover:bg-zinc-900/45
        backdrop-blur-xl 
    "> 
    <div  className="flex justify-between">
        <div className="flex flex-col justify-between">
            <div className="flex items"> 
                <div>
                    {isSent  ? <SentIcon/> : <ReceivedIcon />}
                </div>
                <div className="text-lg px-4 flex-col items-center">
                    Inr {tranx.amount}
                </div>
            </div>
            <div className="text-md">
                { isSent ? 
                    <div> To: {tranx.toUser.name} </div> :
                    <div> From: {tranx.fromUser.name} </div> 
                }      
            </div> 
        </div>
        <div className="flex items-center">
            {tranx.timestamp.toDateString()}
        </div>
    </div>
    </div>
}

