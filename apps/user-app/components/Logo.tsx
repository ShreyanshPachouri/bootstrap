// import Image from "next/image"
import Link from "next/link"

export const LogoAbsolute =  () => {
    return <div className="absolute pt-8 px-5 sm:pt-10! md:px-10! z-100 ">
        <Link href="/">
            <div className="text-2xl font-display font-bold tracking-tighter uppercase">Simple Payment</div>
            {/* <Image className="dark:hidden w-22 md:w-30! lg:w-35!" src="/images/light-lq.png" alt="logo" width={150} height={200} />
            <Image className="not-dark:hidden w-22 md:w-30! lg:w-35!" src="/images/dark-lq.png" alt="logo" width={150} height={200} /> */}
        </Link>
    </div>
} 

export const Logo = () => {
    return <div className="flex items-center h-full w-full">
        <Link href="/">
            <div className="text-2xl font-display font-bold tracking-tighter uppercase">Simple Payment</div>
        </Link>
    </div>
}