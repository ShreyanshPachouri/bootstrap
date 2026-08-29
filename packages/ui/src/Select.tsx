"use client"
import { InputTitle } from "./InputTitle";

interface SelectProp {
    title : string;
    options : {
        name: string
        url: string,
    }[];
    onChange: (x: {name: string, url:string}) => void
}

export const Select = ( {options, title, onChange} : SelectProp) => {
    return <div className="relative">
        <InputTitle name={title} />
        <select className="border border-zinc-400 rounded-md p-2 w-full" 
            onChange={(e) => {onChange(JSON.parse(e.target.value))}}>
            {options.map( (x, i) => <option key={i} value={JSON.stringify(x)}>{x.name}</option>)}
        </select>
        <div className="pointer-events-none absolute right-3 top-9 text-zinc-400">
            ▼
        </div>
    </div>
}