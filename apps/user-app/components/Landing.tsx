"use client"

import Image from "next/image"
import { Button } from "../../../packages/ui/src/Button" 
import { LandingSectionHead } from "../../../packages/ui/src/LandingSectionHead"
import { LandingHead } from "../../../packages/ui/src/LandingHead"
import { useRouter } from "next/navigation"
import { Arrow, DemoArrowIcon, DocsIcon } from "../../../packages/ui/src/Icons"
import { LogoAbsolute } from "../components/Logo"

export const Landing = () => {
    const router = useRouter();

    return <div className="relative z-0 h-full w-full overflow-hidden">
        
        <div className="fixed -z-100 h-screen w-full
            opacity-30

            dark:bg-[radial-gradient(circle_750px_at_85%_2%,var(--color-purple-500),var(--color-purple-600),var(--color-purple-800),var(--color-purple-900),var(--color-zinc-950))] from-[#1a1a1a] via-[#2a0a45] to-[#6a1fbf]

            bg-[radial-gradient(circle_750px_at_85%_2%,var(--color-pink-600),var(--color-pink-500),var(--color-pink-200),rgb(240,240,240))]">

        </div>
        
        
        <div className="min-h-screen">

            <div className="h-screen">
            {/* Logo */}
            <LogoAbsolute />
            
            {/* hero section */}
            <div className="flex flex-col h-full justify-center gap-4 items-center pt-5 px-10">
                {/* dashboard */}
                <div className="px-4 md:px-25! lg:px-40! p-5 md:p-7! xl:pt-10!">
                    <Image className="dark:hidden rounded-2xl border-3 m-5 shadow-xl shadow-pink-300/75 border-pink-500 p-2 bg-slate-100" src="/images/light-dash.png" alt="logo" width={800} height={500} />
                    <Image className="not-dark:hidden 
                    animate-[float_4s_ease-in-out_infinite]
                    shadow-[0_0_80px_20px_rgba(168,0,255,0.6)]/85 hover:shadow-purple-400/85 hover:shadow-3xl
                    rounded-2xl border-3 my-2 hover:border-purple-400  border-purple-400 p-2 bg-zinc-800" src="/images/dark-dash.png" alt="logo" width={800} height={500} />
                </div>
                {/* Hero Heading */}
                <div className="flex flex-col items-center">
                    <LandingHead title="A Simple Payment Application" desc="Send money in seconds. Secure, simple, and instant." />
                    

                    <div className="pt-5 flex justify-end">
                        <div className="absolute rounded-full w-3 h-3 bg-purple-100 animate-ping"></div>
                        <Button onClick={() => {
                            router.push('/signin')
                        }}>
                            Start Now 
                        </Button>
                    </div>

                </div>
            
            </div>
            </div>

            
            {/* Tech Stack */}
            <div className="h-screen w-full flex justify-center p-10 xl:p-0! xl:justify-end! relative ">

                {/* Look at a better way and replace this */}
                <div className="flex h-full items-center top-0 xl:relative! absolute xl:top-35! xl:left-40!">
                    <div className="xl:border-2! border-0 opacity-35 animate-pulse delay-300 rounded-full border-pink-400 dark:border-zinc-400 w-250 h-250 flex justify-center items-center">
                        <div className="xl:border-2! border-0 animate-pulse delay-300 rounded-full border-pink-400 dark:border-zinc-400 w-200 h-200 flex justify-center items-center">
                            <div className="border-2 animate-pulse sm:delay-200 delay-300 rounded-full border-pink-400 dark:border-zinc-400 w-160 h-160 flex justify-center items-center">
                                <div className="border-2 animate-pulse sm:delay-150 delay-300 rounded-full border-pink-400 dark:border-zinc-400 w-120 h-120 flex justify-center items-center">
                                    <div className="border-2 animate-pulse delay-100 rounded-full border-pink-400 dark:border-zinc-400 w-80 h-80 flex justify-center items-center">
                                        <div className="border-2 animate-pulse delay-75 rounded-full border-pink-400 dark:border-zinc-400 w-40 h-40 flex justify-center items-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* improve */}
                < div className="hidden xl:flex! h-full items-center relative right-0 ">
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 15s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "50px"  
                        }} className="size-19 absolute top-50 left-50" src="/Node.js_logo.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 20s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "150px"  
                        }} className="size-19 absolute top-50 left-50" src="/vercel.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 25s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "250px"  
                        }} className="size-19 absolute top-50 left-50" src="/logo_dark.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 30s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "300px"  
                        }} className="size-40 absolute top-50 left-50" src="/turborepo-light.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 35s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "350px"
                        }} className="size-19 absolute top-50 left-50" src="/Tailwind_CSS_Logo.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 45s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "400px"
                        }} className="size-25 absolute top-50 left-50" src="/prisma.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 50s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "450px"
                        }} className="size-20 border border-amber-50 rounded-full absolute top-50 left-50" src="/nextjs.svg" alt="logo" width={10} height={10} />
                    </div>
                    <div className="w-200 h-200 rounded absolute xl:top-65 xl:-left-145">
                        <Image style={{
                            animation: 'orbit 55s linear infinite',
                            transformOrigin: "0 0",
                            ["--orbitr" as any] : "500px"
                        }} className="size-20 absolute top-50 left-50" src="/Postgresql_elephant.svg" alt="logo" width={10} height={10} />
                    </div>
                </div>

                {/* text */}
                <div className="flex flex-col justify-center gap-5 w-full lg:w-2/3! h-full z-10 lg:p-20">

                        <div className="bg-linear-180 not-dark:from-pink-200 not-dark:via-pink-300/70 not-dark:to-pink-400/70 not-dark:hover:from-pink-700 not-dark:hover:to-pink-500 not-dark:hover:via-pink-600 hover:text-white 
                        dark:from-zinc-800/70 dark:to-zinc-900/80 dark:hover:from-purple-900/70 dark:hover:to-zinc-900/80 
                        
                        border-2 border-white/5 
                        backdrop-blur-2xl 
                        
                        transition-all duration-300 ease-in-out
                        
                        shadow-[0_0_60px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_-10px_rgba(128,0,255,0.3)]
                        
                        after:absolute after:inset-0 after:rounded-4xl after:pointer-events-none
                        after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]
                        relative

                        px-5 py-10 lg:p-10! lg:w-3xl! md:w-2xl! self-center rounded-3xl flex flex-col gap-2">

                        <div className="text-center md:text-left!">
                            <LandingSectionHead title="Tech Stack" desc="Simple Payment lets users and merchants send and receive payments seamlessly, with real-time updates, transaction tracking, and instant settlement — built for modern web apps."/>    
                        </div>
                       
                        <div className="px-8 text-sm md:text-lg lg:text-xl">    
                            <table className="w-full">
                                <tbody>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Frontend
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        Next.js (App Router), TailwindCSS
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Backend
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        Node.js / Express
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Monorepo
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        Turborepo
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Database
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        PostgreSQL / Prisma ORM
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Communication
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        REST + Webhooks
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Integration
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        Bank Mock APIs
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-2 text-purple-300">
                                        Deployment
                                    </td>
                                    <td>
                                        <Arrow/>
                                    </td>
                                    <td className="p-2">
                                        Vercel + Render (or custom backend host)
                                    </td>
                                </tr>
                                </tbody>                            
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Features */}
            <div className="h-screen flex flex-col justify-center p-10 md:p-15 lg:p-25">
                <div className="flex h-full flex-col p-10 md:p-10! lg:p-25! justify-center items-center text-center bg-linear-20  
                
                    dark:from-purple-800/80 not-dark:from-pink-600 dark:via-purple-950/50 to-zinc-800/50 via-pink-400 rounded-3xl gap-10 z-10
                        
                    border-2 border-white/10 backdrop-blur-xl 
                        
                    shadow-[0_0_60px_-20px_rgba(0,0,0,0.4)]  hover:shadow-[0_0_40px_-10px_rgba(128,0,255,0.3)]
                        
                    after:absolute after:inset-0 after:rounded-4xl after:pointer-events-none
                    after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]
                ">
                    <LandingSectionHead title="Features - Simple, Fast, Transparent." desc="Our platform is built to be fast, reliable, and developer-friendly.Here’s what’s inside:" />
                    <ul className=" text-sm md:text-md xl:text-xl! space-y-6 text-left list-disc">
                        <li>
                            <span className="font-2xl font-bold">Instant P2P Transfers -</span> Transfer money instantly and securely between users.
                        </li>
                        <li>
                            <span className="font-2xl font-bold">Transaction History & Search -</span> Access complete logs with smart filtering and search.
                        </li>
                        <li>
                            <span className="font-2xl font-bold">Bank Integration (Mock APIs) -</span> Simulate real-world banking with HDFC, SBI, and Axis mock APIs.
                        </li>
                        <li>
                            <span className="font-2xl font-bold">Automated Webhooks -</span> Stay synced with real-time status updates using smart webhook handlers.
                        </li>
                        <li>
                            <span className="font-2xl font-bold">Modular Architecture -</span> Built using Turborepo for scalable multi-app management.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modern Architechture */}
            <div className="relative h-screen p-10 md:p-15! lg:p-20! flex w-full">
    
                    <div className="flex absolute left-0 gap-1 sm:gap-2! md:gap-3! w-full h-full overflow-x-hidden">
                        { Array.from({length : 25}).map((_, i) => {
                            const h = (Math.floor((Math.random() * 90)))
                            
                            return <div key={i} style={{
                                height: `${h}%`,
                                animationDelay: `${i * 100}ms`,
                                animationDuration: "2s" 
                            }} className="w-full rounded-md
                                bg-pink-400 dark:bg-zinc-600 
                                hover:bg-pink-600 dark:hover:bg-purple-600/70 
                                hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_20px_rgba(168,0,255,0.6)] 
                                slow-pulse
                                "></div>
                            })
                        }
                    </div>
    

                <div className=" lg:w-1/2 z-10 flex flex-col gap-7 h-fit mt-10 py-8 px-10 bg-linear-50 not-dark:bg-white dark:bg-zinc-900/50 rounded-2xl
                border-2 border-white/10 backdrop-blur-xl 

                shadow-[0_0_60px_-20px_rgba(0,0,0,0.4)]  hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]
                ">

                    <LandingSectionHead title="Modern Architecture, Real world Components" desc="Show a simplified version of your diagram (the one you provided) or redraw it more visually with clear arrows:
                        User App (Next.js)

                        Merchant App (Next.js)

                        Auxiliary Backend (Node/Express)

                        Mock Banks (APIs)

                        Add a short caption:

                        The system mimics actual banking ecosystems — handling internal and external transfers, webhook updates, and transaction reconciliation." />
                </div>
            </div>

            {/* Work Flow */}
            <div className="flex h-screen pt-15 px-40 justify-center lg:justify-end! relative">
                
                <div className="absolute z-10 sm:w-150!         
                    sm:h-150! sm:p-10 w-[90vw] h-150 p-12
                    flex flex-col justify-center bg-linear-0 
                    glow-breathe 
                    
                    animate-[float_1s_ease-in-out_infinite] circle-hover

                    bg-zinc-900/50 border-pink-500 dark:border-purple-300 bg-blur-2xl
                    shadow-2xl/90 shadow-pink-700 dark:shadow-purple-500 border-3 
                    rounded-full text-center">
                    <div>
                        <LandingSectionHead title="Architecture From Click to Credit — Real-World Flow" />
                        <div>
                            User initiates transfer
                            → via the Next.js User app.

                            Backend verifies balance
                            → through the internal DB and sweepers.

                            Bank API processes transaction
                            → (mocked via HDFC, SBI, Axis).

                            Webhook updates the system
                            → balances auto-adjusted, transaction marked complete.

                            User gets instant feedback
                            → in their transaction history dashboard.
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className=" h-90 sm:h-120 lg:dark:bg-[radial-gradient(circle_750px_at_50%_0%,var(--color-amber-100),var(--color-amber-100),var(--color-purple-400),var(--color-purple-600),var(--color-purple-800),var(--color-zinc-900))] dark:bg-[radial-gradient(circle_550px_at_50%_0%,var(--color-amber-100),var(--color-amber-100),var(--color-purple-400),var(--color-purple-600),var(--color-purple-800),var(--color-zinc-900))] bg-[radial-gradient(circle_750px_at_50%_0%,var(--color-pink-600),var(--color-pink-500),var(--color-pink-200),var(--color-white))] text-zinc-800 flex flex-col justify-center text-center px-10 md:px-25 lg:px-50 gap-15">
                
                <div className=" font-bold text-shadow-white/35 
                    filter-[drop-shadow(0_0_2px_rgba(255,255,255,0.5))] self-center
                    text-shadow-lg text-2xl sm:text-3xl! md:text-4xl! xl:text-5xl!">
                    Ready to experience modern digital payments?
                </div>

                <div className="flex justify-center gap-10 w-full h-10 lg:h-22!">
                    <div className="flex flex-col justify-between">
                        <div className=" hover:scale-[1.05] hover:drop-shadow-[0_0_12px_rgba(150,0,255,0.5)]
                        transition-all duration-300">
                            <DemoArrowIcon />
                        </div>
                        <p>
                            Demo
                        </p>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="hover:scale-[1.05] hover:drop-shadow-[0_0_12px_rgba(150,0,255,0.5)]
                        transition-all duration-300">
                            <Image className="size-13 md:size-17! animate-bounce" style={{
                                animationDuration : '2s',
                            }} src="/github-mark.svg" alt="Github" width={30} height={20} />
                        </div>
                        <p>
                            Github
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-between ">
                        <div className="hover:scale-[1.05] hover:drop-shadow-[0_0_12px_rgba(150,0,255,0.5)] 
                        transition-all duration-300 ">
                            <DocsIcon />
                        </div>
                        <p>
                        Docs
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center h-10 text-sm items-center text-zinc-400 font-mono px-10">
                A Project by MAYANK0RR0 - 2025
            </div>
        </div>
    </div>
}