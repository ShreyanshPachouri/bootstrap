"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SideBarItemProps {
    name: string;
    page: string;
    icon: ReactNode;
}

export const SideBarItem = ( { name, page, icon } : SideBarItemProps ) => {
    const path = usePathname();
    let cssClasses = "text-slate-700 dark:text-zinc-400/90"

    if (path == page) {
        cssClasses = "not-dark:text-pink-700 dark:text-purple-400"
    }

    return <div className={"my-2 text-md hover:text-shadow dark:hover:text-purple-100 hover:text-pink-600 text-shadow-pink-500 " + cssClasses}>
        <Link href={page}>
            <div className="flex font-medium">
                <div className="pr-2">
                    {icon}
                </div>
                <div className="hidden sm:block!">
                    {name}
                </div>
            </div>
        </Link>
    </div>
}