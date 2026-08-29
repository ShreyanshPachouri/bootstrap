import { DownArrow } from "./Icons"


export const ScrollShell = () => {
    return <div className="absolute w-full h-full group-hover:opacity-0
        inset-0 z-10 bg-linear-0 to-35% via-15% from-zinc-950/90 via-zinc-900/80 rounded-3xl bg-blur-xl pointer-events-none
        flex items-end justify-center p-5 text-2xl font-extralight 
        shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.4)]

    ">
        <div className="animate-bounce">
            
            <DownArrow />
        </div>
    </div>
}   