"use client"
import AppBar from "../../packages/ui/src/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./components/Logo";

export const AppBarCliemt = () => {
    const session = useSession();
    const [show, setShow] = useState(false);
    const pathname = usePathname();

    if ( pathname == '/') return null

    return <div >
        <AppBar onClick={setShow} show={show} onSignin={signIn} onSignout={async () => {
            signOut({callbackUrl: "/api/auth/signin"})
        }} user={session.data?.user} img={<Logo />} />
    </div>
}

// const Logo = () => {
//     return <div>
//         <Image className="dark:hidden" src="/images/light-long-hq.png" alt="logo" width={180} height={100} />
//         <Image className="not-dark:hidden" src="/images/dark-long-hq.png" alt="logo" width={180} height={100} />
//     </div>
// }