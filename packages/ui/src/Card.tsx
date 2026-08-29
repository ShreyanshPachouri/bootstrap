import { JSX } from "react"

export const Card = ({children}: {children : React.ReactNode}) : JSX.Element => {
  return <div className="flex-col flex justify-center p-5

    bg-linear-180 not-dark:from-pink-200 not-dark:via-pink-300/70 not-dark:to-pink-400/70 not-dark:hover:from-pink-700 not-dark:hover:to-pink-500 not-dark:hover:via-pink-600 hover:text-white 
    
    dark:from-zinc-800/60 dark:to-zinc-900 dark:hover:from-purple-950/90 dark:hover:via-zinc-900/80 dark:hover:to-zinc-900/90 
    via-15%                    

    border-2 border-white/10 backdrop-blur-xl 
    
    transition-all duration-500 ease-out
    
    shadow-[0_0_60px_-20px_rgba(0,0,0,0.5)]  hover:shadow-[0_0_40px_-10px_rgba(128,0,255,0.2)] 

    after:absolute after:inset-0 after:rounded-4xl after:pointer-events-none
    after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]

    rounded-3xl group relative
  ">
    <div>
      {children}
    </div>  
  </div>
}