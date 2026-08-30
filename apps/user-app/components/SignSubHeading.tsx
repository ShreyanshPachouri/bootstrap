'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function SubSignHeading() {
    const pathname = usePathname();

    return <div className="text-sm text-zinc-300/90 mb-2 ">
        {(pathname == "/signin") ? <div>
            New User, don't have an Account?
            <Link className="border-b m-2" href="/signup">Sign Up </Link>
        </div> : 
        <div>
            Already a user? 
            <Link className="border-b m-2" href="/signin">Sign In </Link>   
        </div>}
    </div>
} 