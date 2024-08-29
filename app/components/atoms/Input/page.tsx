import React, { InputHTMLAttributes, KeyboardEventHandler } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: 'text' | 'radio' | 'date'
    onKeyPress?: KeyboardEventHandler<HTMLInputElement>
}

interface InputsProps extends InputHTMLAttributes<HTMLInputElement>{

}

export default function Input(props: InputProps) {
    const { type, name, value, min, max, id, placeholder, onKeyPress, onKeyDown } = props
    const inputs = {
        text: (p: InputsProps) => <input type="text" id={p.id} name={p.name} onKeyPress={p.onKeyPress} onKeyDown={p.onKeyDown} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required/>,
        radio: (p: InputsProps) => <input type="radio" id={p.id} name={p.name} onChange={p.onChange} value={p.value}/>,
        date: (p: InputsProps) => <input type="date" id={p.id} name={p.name} onChange={p.onChange} min={p.min} max={p.max}/>
    }
  
    return inputs[type]({
        name, 
        value, 
        min, 
        max, 
        id,
        onKeyPress,
        onKeyDown
    });
}
