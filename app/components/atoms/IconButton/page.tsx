'use client'
import React, { ButtonHTMLAttributes } from 'react'
import * as HeroIcon from '@heroicons/react/20/solid'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: keyof typeof HeroIcon,
    title: string
}

export default function IconButton(props: IconButtonProps) {
    const { icon, onClick } = props
    const IconComponent = HeroIcon[icon]
  return (
    <button onClick={onClick}>
        <IconComponent className='size-6'/>
    </button>
  )
}
