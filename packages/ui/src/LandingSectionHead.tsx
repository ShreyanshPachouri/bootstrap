export const LandingSectionHead = ({title, desc} : {title : string, desc?: string }) => {
    return <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
        <div className="text-2xl sm:text-3xl! md:text-4xl! dark:text-purple-50 font-semibold pb-5 ">
            {title}
        </div>
        <div className="md:text-lg! xl:text-xl! px-5 text-zinc-300">
            {desc}
        </div>
    </div>
}