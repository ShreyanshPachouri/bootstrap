import { DoubleArrow } from "./Icons"

export const Title = ({title} : {title : string} ) => {

    return <div className="flex gap-3 text-2xl pb-5 mb-2 border-b dark:border-zinc-600 border-slate-200">
        <div className="flex gap-3 font-bold text-transparent text-lg lg:text-xl! bg-linear-270 bg-clip-text dark:from-purple-400 dark:via-purple-300 dark:to-purple-100 from-pink-600 via-pink-700 to-pink-800">
            {title} 
            <DoubleArrow />
        </div>
    </div>
}