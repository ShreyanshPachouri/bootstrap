import { SideBarItem } from "./SideBarItem" 
import {HomeIcon, P2PIcon, TransferIcon, TranxIcon} from "../../../packages/ui/src/Icons"
import { Toggle } from "../components/Toggle"

export const SideBar = () => {
    return <div className="flex flex-col w-10 sm:w-full! border-r dark:border-zinc-600 border-slate-400 ">
        <div className="fixed top-90 sm:top-120! md:top-110! xl:top-80!" >
            <SideBarItem name={"Home"} icon={<HomeIcon />} page={"/dashboard"} />
            <SideBarItem name={"Transfer"} icon={<TransferIcon />} page={"/transfer"} />
            <SideBarItem name={"Transaction"} icon={<TranxIcon />} page={"/transactions"} />
            <SideBarItem name={"P2P Transfer"} icon={<P2PIcon />} page={"/p2p"} />
        </div>
        <div className="w-full">
            <Toggle />
        </div>
    </div>
} 
