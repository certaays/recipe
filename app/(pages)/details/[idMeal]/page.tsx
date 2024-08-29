import React from 'react'
import { getMealsbyId } from '@/app/api/getdata'
import Text from '@/app/components/atoms/Text/page'
import Button from '@/app/components/atoms/Button/page'
import Image from 'next/image'
import Link from 'next/link'


export default async function Page({ params }: { params: { idMeal: string } }) {
    const data = await getMealsbyId({ id: params.idMeal })
    
    return (
        <div className='p-8'>
            <div className='bg-white shadow-xl rounded-xl p-4'>
                {
                    data.map((item: any) => {
                        const instruction: string[] = item.strInstructions.split('\r\n')
                        const youtubeUrl = item.strYoutube.split('watch').join('embed');
                        
                        return (
                            <div key={item.idMeal}>
                                <Text variant="h2" className='px-2 py-1'>{item.strMeal}</Text>
                                <div className='flex flex-row divide-x-4 py-2'>
                                    <Link href={`/category/${item.strCategory}`}>
                                        <Text variant="h6" className='px-2 py-1'>{item.strArea}</Text>
                                    </Link>
                                    <Link href={`/category/${item.strCategory}`}>
                                        <Text variant="h6" className='px-2 py-1'>{item.strCategory}</Text>
                                    </Link>
                                </div>
                                <div className='flex justify-center'>
                                    <Image 
                                        src={item.strMealThumb}
                                        alt={item.strMeal}
                                        className='w-1/2'
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <Text variant='h4'className='px-2 pb-2 pt-8'>Ingredients</Text>
                                <div className='flex flex-col gap-y-2 pb-8'>
                                    {Array.from({ length: 20 }, (_, i) => {                              
                                        if(item[`strIngredient${i+1}`] && item[`strMeasure${i+1}`] !==  "" || null){
                                            return (
                                            <div key={i} className='flex items-center px-2'>
                                            <div className='flex items-center justify-center bg-[#2d2013] w-2 h-2 rounded-full text-white'></div>
                                            <Text variant="h6" className='px-2'>{item[`strIngredient${i + 1}`]} {item[`strMeasure${i + 1}`]}</Text>
                                            </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className='flex justify-center'> 
                                    <iframe
                                        className='w-3/4 aspect-video rounded-md'
                                        src={youtubeUrl}
                                        allowFullScreen
                                    />
                                </div>
                                <Text variant='h4'className='px-2 pb-2 pt-8'>Instruction</Text>
                                <div className='flex flex-col gap-y-4'>
                                    {instruction.map((item,i) => {
                                        return( 
                                        <div key={i} className='flex'>
                                            <div className='px-2'>
                                                <div className='flex items-center justify-center bg-[#2d2013] w-6 h-6 rounded-full text-white'>
                                                    <Text variant="paragraph" className=''>{i+1}</Text>
                                                </div>
                                            </div>
                                            <Text variant="h6">{item}</Text>
                                        </div>
                                    )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}