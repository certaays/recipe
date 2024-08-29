import React, { ButtonHTMLAttributes } from 'react'
import Text from '../Text/page'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export default function Button(props: ButtonProps) {
    const { title, onClick } = props
    
  return (
    <button onClick={onClick} className='p-2 bg-slate-400 rounded-lg text-white'>
        <Text variant='paragraph'>{title}</Text>
    </button>
  )
}
