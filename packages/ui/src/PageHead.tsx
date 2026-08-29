export const PageHead = ({name}: {name: string}) => {
     return <div className="font-bold font-sans py-6 px-9">
        <div className="w-fit flex gap-3 font-bold text-transparent text-2xl sm:text-3xl! bg-linear-270 bg-clip-text dark:from-purple-100 dark:via-purple-300 dark:to-purple-400 from-pink-600 via-pink-700 to-pink-800">
        {name}
         </div>
     </div>
}