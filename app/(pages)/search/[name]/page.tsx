import React, { useEffect, useState } from 'react'
import { getMealsbyId, getMealsbySearch } from '@/app/api/getdata'
import Text from '@/app/components/atoms/Text/page'
import Button from '@/app/components/atoms/Button/page'
import Image from 'next/image'
import Card from '@/app/components/molecules/Card/page'



export default async function Page({ params }: { params: { name: string } }) {
   
    const data = await getMealsbySearch({ name:params.name })

    if(data?.length == 0){
        return(
            <div className='w-full h-screen flex flex-row items-center justify-center text-6xl text-black'>
                keyword {params.name} not found
            </div>
        )
    }
    
    return (
        <div className='p-8'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-2 xl:p-9">
         {data.map((item,index) => {
            const newItem = item as any;
            return(
                <div key={index} className='text-black'>
                    <Card url={`/details/${newItem?.idMeal}`} title={newItem?.strMeal} subtitle={newItem?.strCategory} url_image={newItem?.strMealThumb} width={100} height={100}></Card>
                </div>
            )
         })}
        </div>
        </div>
    )
}