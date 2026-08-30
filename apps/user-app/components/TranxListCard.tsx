import { TranxState } from "@repo/store";
import { Card } from "../../../packages/ui/src/Card" 
// import { Center } from "@repo/ui/Center";
import { ScrollShell } from "../../../packages/ui/src/ScrollShell"
import { Title } from "../../../packages/ui/src/Title" 

interface tranxListProp {
  tranxList: TranxState['tranxList'] | undefined
}

export const TranxListCard = ({tranxList } : tranxListProp) => {

    return <Card>
      <Title title="Transaction History" ></Title>
        <div className="w-full pt-2 h-[50vh] overflow-auto noscrollbar scroll-auto">
        {/* table starts */}        
        <table className="table-auto w-full h-full text-sm sm:text-md!">

          <thead className="bg-linear-180 
          dark:from-purple-800 dark:via-purple-900 dark:to-purple-950 border-b border-purple-400/40
          via-pink-600/70 from-pink-700 text-white">
            <tr>
              <th>
                <div className="py-2 sm:p-5">
                  From    
                </div>
              </th>
              <th>
                <div className="py-2 sm:p-5">
                  To    
                </div>
              </th>
              <th>
                <div className="py-2 sm:p-5">
                  Amount    
                </div>
              </th>
              <th>
                <div className="py-2 sm:p-5">
                  Time    
                </div>
              </th>
            </tr>
          </thead>

          { tranxList ?
              <tbody className="w-full mt-10 h-full">
                {tranxList.map((x,i) => <tr key={i} className="border-b dark:border-zinc-500 border-slate-600 hover:bg-white/5">
                  {/* Transfer this into a New Element */}
                  <td>
                    <div className="py-4 px-2 sm:p-4 flex justify-center">
                      { x.from.name ? x.from.name?.split('')[0]?.toUpperCase() + x.from.name?.slice(1) : x.from.num ?? "-"}
                    </div>
                  </td>
                  <td>
                    <div className="py-4 px-2 sm:p-4 flex justify-center ">
                      { x.to.name ? x.to.name?.split('')[0]?.toUpperCase() + x.to.name?.slice(1) : x.to.num ?? "-"}
                    </div>
                  </td>
                  <td>
                    <div className="py-4 px-2 sm:p-4 flex justify-center">
                      INR {x.amount}
                    </div>
                  </td>
                  <td>
                    <div className="py-4 px-2 flex sm:p-4 justify-center">
                      {x.time.toUTCString().slice(0,-4)}
                    </div>
                  </td>
                </tr>
                )}
          </tbody> : <div> No Transactions Found</div>  }
        </table>
      {/* table ends */}
      </div>
      <ScrollShell/>

    </Card>
}