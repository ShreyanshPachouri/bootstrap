import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import { LogoAbsolute } from "../../components/Logo";

interface AuthLayoutProps {
    children : ReactNode
}

export default async function AuthLayout ({children} : AuthLayoutProps) {
    const session = await getServerSession(authOptions);

    if (session?.user) {
        redirect('/dashboard')
    }

    return <div className="h-screen"> 
        <LogoAbsolute />
    {/* work on height how to fix this */}
        {children}
    </div>
}