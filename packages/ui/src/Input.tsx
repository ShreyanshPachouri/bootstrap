"use client"
import { InputTitle } from "./InputTitle";

interface InputProp {
    name: string;
    onChangeNum?: (x: number) => void | undefined
    onChange?: (x: string) => void | undefined
    fieldType? : string
}

export const Input = ( { name, onChangeNum, onChange, fieldType = "number" } : InputProp) => {

    return <div className="pt-2 mb-2 md:mb-4! w-full">
        <InputTitle name={name} />
        <input className="m-0 w-full p-2 border dark:border-zinc-400 border-slate-300 rounded-md " 
            type={fieldType} placeholder={name} onChange={(e) => {
                if (onChangeNum) {
                    onChangeNum(Number(e.target.value))
                } else if (onChange) {
                    onChange(e.target.value)
                }}} />
    </div>
}