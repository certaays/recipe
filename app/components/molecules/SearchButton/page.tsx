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
    <div className='flex'>
      <Input type='text' name='search-nav' id="search-nav" value="" placeholder='Search' onKeyDown={handleKeyPress}/>
    </div>
  )
}

