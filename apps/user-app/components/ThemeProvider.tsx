"use client"
import { useTheme } from "@repo/store"
import { ReactNode } from "react"


export const ThemeProvider = ({children} : {children : ReactNode}) => {
    const dark = useTheme((s) => s.dark)
    
    return <div className={dark ? "dark h-full" : "h-full" }>
        {children}
    </div>
}