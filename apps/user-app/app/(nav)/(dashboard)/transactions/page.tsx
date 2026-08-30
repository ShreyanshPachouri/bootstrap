"use client"
import { TranxState, useBalance, useTranxList } from "@repo/store"
import { PageHead } from "../../../../../../packages/ui/src/PageHead"
import { TranxListCard } from "../../../../components/TranxListCard"
import { useEffect, useState } from "react"

export default function Tnx() {
  const balance = useBalance((s) => s.amount)
  const tranxList = useTranxList((s) => s.tranxList)
  const [search, setSearch ] = useState('')
  const [newList, setNewList] = useState< TranxState['tranxList'] | undefined >(undefined) 

  useEffect(() => {
  const timer = setTimeout(() => {
    const term = search.toLowerCase();
    const filtered = tranxList.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(term)
    );
    setNewList(filtered);
  }, 1000);

  return () => clearTimeout(timer);
}, [search, tranxList]); // Removed newList from dependencies

  return <div className="w-full h-full">
    <PageHead name="Transactions" />
    <div className=" p-5">
      <div className="flex flex-col lg:flex-row! gap-5 pb-5 w-full">

          <div className="flex w-full lg:w-1/2 
            text-center justify-between gap-4 items-center 
            bg-linear-180 dark:from-purple-800 dark:via-purple-900/70 dark:to-purple-950 
            via-pink-600/70 from-pink-700 
            not-dark:text-white
            text-xl md:text-2xl! lg:text-3xl! dark:text-slate-50 
            shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] rounded-3xl
            hover:shadow-[0_0_40px_-6px_rgba(128,0,255,0.2)]
            transition-all duration-300
            font-bold px-10 font-sans 
            h-20 md:h-25! lg:h-30!">
              <span className="text-lg/relaxed md:text-xl/relaxed! lg:text-2xl/relaxed font-light"> Balance: </span> 
              <span> INR {balance} </span>
          </div>

          <div className="flex w-full lg:w-1/2 text-center 
            justify-between gap-4 items-center border-2 h-30
            not-dark:border-slate-300 dark:border-white/10 not-dark:bg-white dark:bg-zinc-900/90 text-3xl 
            not-dark:text-pink-700 dark:text-purple-300 bg-linear-180
            dark:from-zinc-800/90 dark:to-zinc-900/90 dark:hover:from-purple-950/70 dark:hover:to-zinc-900/80       
            border-white/10 rounded-3xl
            transition-all duration-500 ease-out
            shadow-[0_0_60px_-20px_rgba(0,0,0,0.8)]  hover:shadow-[0_0_40px_-10px_rgba(128,0,255,0.4)]  
            font-bold p-5 lg:p-7! font-sans">
            <span className=" text-xl/relaxed font-normal"> Search: </span> 
            <input className=" border-2 rounded-full 
            not-dark:border-pink-700 dark:border-purple-300 text-lg dark:text-purple-300 
              font-normal w-full h-15 p-5 hover:shadow-md focus:shadow-lg outline-none ring-0 hover:ring-2 backdrop-blur-xl bg-white/2" 
              type="text" placeholder="Type here to filter the list" onChange={(e) => {setSearch(e.target.value.toLowerCase().trim())}} />
          </div>
      </div>

      <TranxListCard tranxList={newList || tranxList}/>
    </div>
  </div>
}