import { Dispatch, ReactNode, SetStateAction } from "react";
import { Button } from "./Button";
import { AvatarIcon, More } from "./Icons";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    img: ReactNode  
    show: boolean
    onClick: Dispatch<SetStateAction<boolean>>
    onSignin: () => void 
    onSignout: () => void 
}

const AppBar = ({ user, onSignin, onSignout, onClick , show, img } : AppbarProps) => {

    return <div className="flex h-[15vh]
        dark:none justify-between px-5 sm:px-10! border-b
        bg-zinc-900/80 backdrop-blur-xl border-zinc-800 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.4)] 
        not-dark:border-gray-300 hover:shadow-[0_0_40px_-10px_rgba(128,0,255,0.1)]
        dark:border-zinc-700 transition-all ease-out">
        {/* App Name */}
        <div>
            {img}
        </div>

        {user?.name ? <div className="flex">
            
            {/* NAME */}
            <div className="flex flex-row justify-center items-center text-purple-300 font-bold text-md sm:text-lg! md:text-xl! px-3 sm:px-10!"> 
                Hello, {user?.name ? user.name.split('')[0]?.toUpperCase() + user.name.slice(1) : "Anonymous"} 
                <AvatarIcon username={user?.name}/>
            </div>
            
            {/* SignOut Button */}
            <div className="flex flex-col justify-center " onClick={() => onClick(!show)} onMouseLeave={() => {
                    setTimeout(() => {
                        onClick(false)
                    }, 5*1000)
                }}>
                {show ?<div className=""><Button onClick={ user ? onSignout : onSignin }>{ user ? "Sign Out" : "Sign In"}</Button></div>: <More/>}
            </div>
        </div> : null}
    </div>
}

export default AppBar