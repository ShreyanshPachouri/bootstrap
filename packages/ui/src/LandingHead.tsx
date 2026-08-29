
export const LandingHead = ({title, desc} : {title : string, desc: string }) => {
    return <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
        <h1 className=" text-3xl sm:text-4xl! lg:text-5xl! text-center font-semibold dark:text-purple-50 hover:text-shadow-xl text-shadow-purple-500">
            {title}
        </h1>

        <div className="text-lg sm:text-xl! text-center text-amber-50 ">
            {desc}
        </div>
    </div>
}