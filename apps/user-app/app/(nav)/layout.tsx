import { AppBarCliemt } from "../../../user-app/AppBarClient"


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <div className="flex flex-col w-full dark:text-zinc-200 min-h-screen">
    <AppBarCliemt />
        <div className="flex flex-row min-h-[85vh]"> 
            <div className="w-full">
                {children}
            </div>
        </div>
    </div>
}