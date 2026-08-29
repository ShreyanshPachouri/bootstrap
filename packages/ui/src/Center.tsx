import React from "react"

export const Center = ({children} : {children: React.ReactNode}) => {
    return <div className="pt-6 flex justify-center h-full">
        <div className="flex flex-col justify-center h-full">
            {children}
        </div>
    </div>
}