'use client';
import React from 'react'
import Input from '../../atoms/Input/page'
import { useRouter } from 'next/navigation'



export default function SearchButton() {
  const router = useRouter()
    
  function handleKeyPress(e: any): any{
    if(e.key === 'Enter'){
      router.push(`/search/${e.target.value}`)  
    }
  }

  return (
    <div className='relative'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute inset-y-0 right-0 my-auto pr-3 flex items-center pointer-events-none size-8 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <Input name='search-nav' id="search-nav" placeholder='Search' onKeyDown={handleKeyPress}/>
    </div>
  )
}

