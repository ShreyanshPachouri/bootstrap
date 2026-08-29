
interface TranxCardType {
    status: "Success" | "Failure" | "Processing";
    provider: string;
    amount: number;
    startTime: Date;
}

export const TranxCard = ({amount, status, provider, startTime  } : TranxCardType) => {
    return <div className="flex justify-between items-center border-b border-zinc-500 p-2">
        <div className="text-lg">
            INR {amount}
        </div>
        <div className="flex items-center">
            <div className="flex-col text-center px-4 text-sm">
                {(status == "Success") ? <div className="text-green-600 font-semibold font-stretch-50%"> 
                        {status} </div> : 
                    (status == "Failure") ? <div className="text-red-600 font-semibold font-stretch-50%"> 
                        {status} </div> : 
                    <div className="text-amber-500 font-semibold font-stretch-50%"> 
                        {status} </div> }   
                <div>
                    {provider}
                </div>
            </div>
            <div>
                {startTime.toDateString()}
            </div>
        </div>
    </div>
}