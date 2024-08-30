import React, {KeyboardEvent} from 'react'

interface InputProps{
    name: string,
    id: string,
    placeholder: string,
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;       
}


const Input = (props: InputProps) => {
    const {name, id, placeholder, onKeyDown} = props

    return (
        <input name={name} id={id} placeholder={placeholder} onKeyDown={onKeyDown} type="text" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
    )
}

export default Input