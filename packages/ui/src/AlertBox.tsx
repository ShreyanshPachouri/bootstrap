import { Card } from "./Card"

export const AlertBox = ( {message,} : {message: string}) => {

    return <div className="fixed text-purple-200 left-[40%] top-5 w-80 h-fit rounded-3xl z-100 transition-all ease-in-out slide-in shadow-lg shadow-purple-700">
        <Card>
            {message}
        </Card>
    </div>
}   