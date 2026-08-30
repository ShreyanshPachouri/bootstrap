"use client"

import { useTheme } from "@repo/store"
import { Day, Night } from "../../../packages/ui/src/Icons"

export const Toggle = () => {
    const theme = useTheme((s) => s)
    
    return <div className="flex fixed bottom-5 right-7 z-20">
        <div className="flex justify-center cursor-pointer ">
            <div className="p-2 rounded-full border-3 
            bg-radial not-dark:border-pink-800 from-pink-50 via-pink-100 to-pink-200 
            from-70% border-white/80
            dark:from-purple-900 dark:via-purple-800 dark:to-purple-700 shadow-[0_0_20px_-4px_rgba(128,0,255,0.5)]"
                onClick={() => {
                    theme.updateDark(!theme.dark);
                }}>
                    {theme.dark ? <Night /> : <Day/>}
                </div>
        </div>
    </div>
}