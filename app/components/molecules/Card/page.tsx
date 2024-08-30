import React from 'react'
import Text from '../../atoms/Text/page'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string,
  subtitle: string,
  url_image: string,
  url?: string
  description?: any
}

export default function Card(props: CardProps) {
  const {title, subtitle, url_image, url, description } = props
  const content = (
    <div className='py-4 w-full'>
    <div className='bg-white w-full shadow-lg h-full rounded-lg'>
        <div className='w-full aspect-square relative'>
          <Image 
            src={url_image}
            alt={title}
            className='object-cover w-full rounded-t-xl'
            fill
          />
        </div>
        <div className='px-2'>
          <Text variant='paragraph' className='text-slate-800 pb-2 hover:text-slate-700'>{subtitle}</Text>
          <Text variant='h6' className='pb-1 text-slate-800 hover:text-slate-900 font-bold'>{title}</Text>
          <Text variant='h6' className='pb-1 text-slate-800 hover:text-slate-900 line-clamp-3'>{description}</Text>
        </div>
    </div>
    </div>
  )
  return (
    url ? 
    <Link href={url}> 
      {content}
    </Link> : 
    <div>
      {content}
    </div>
   )
}