import { Center } from "../../../packages/ui/src/Center";
import Image from "next/image";

export default async function Loading() {

    await setTimeout(() => {}, 500000)
    
    return <div className="h-screen w-full overflow-hidden relative">
        <Center>
            <div className="border-t-4 w-30 h-30 border-r-4 border-bg-purple-600 animate-spin rounded-full self-center">
            </div>
            <div className="p-10 self-center">
                <div className="text-2xl font-display font-bold tracking-tighter uppercase">Simple Payment</div>
                {/* <Image className="dark:hidden" src="/images/light-lq.png" alt="logo" width={150} height={200} />
                <Image className="not-dark:hidden" src="/images/dark-lq.png" alt="logo" width={150} height={200} /> */}
            </div>
        </Center>
    </div>
}