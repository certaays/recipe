import React from 'react'
import { getMealsbyId } from '@/app/api/getdata'
import Text from '@/app/components/atoms/Text/page'
import Image from 'next/image'
import Link from 'next/link'


export default async function Page({ params }: { params: { idMeal: string } }) {
    const data = await getMealsbyId({ id: params.idMeal })
    
    return (
        <div className='px-32 py-8'>
            <div className='bg-white shadow-xl rounded-xl p-4'>
                {
                    data.map((item: any) => {
                        const instruction: string[] = item.strInstructions.split('\r\n')
                        const youtubeUrl = item.strYoutube.split('watch').join('embed');
                        
                        return (
                            <div key={item.idMeal}>
                                <Text variant="h2" className='px-2 py-1 font-extrabold text-[#2d2013'>{item.strMeal}</Text>
                                <div className='flex flex-row divide-x-2 pt-2 pb-8 divide-[#d57d1f]'>
                                    <Link href={`/category/${item.strCategory}`}>
                                        <Text variant="h6" className='px-2 font-bold text-[#d57d1f]'>{item.strArea}</Text>
                                    </Link>
                                    <Link href={`/category/${item.strCategory}`}>
                                        <Text variant="h6" className='px-2 font-bold text-[#d57d1f]'>{item.strCategory}</Text>
                                    </Link>
                                </div>
                                <div className='flex flex-row items-start pb-16'>
                                    <div className='flex items-start justify-end xl:items-center xl:justify-center pl-8'>
                                        <Image 
                                            src={item.strMealThumb}
                                            alt={item.strMeal}
                                            className='w-full md:w-[1300px] rounded-md aspect-square xl:aspect-video xl:object-cover'
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className='flex pl-8 pr-16 my-auto justify-start'>
                                        <div>
                                            <Text variant='h4'className='px-2 pb-2 pt-8 font-bold text-[#2d2013]'>Ingredients</Text>
                                            <div className='flex flex-col gap-y-2 pb-8'>
                                                {Array.from({ length: 20 }, (_, i) => {                              
                                                    if(item[`strIngredient${i+1}`] && item[`strMeasure${i+1}`] !==  "" || null){
                                                        return (
                                                        <div key={i} className='flex items-center px-2'>
                                                        <div className='flex items-center justify-center bg-[#2d2013] w-2 h-2 rounded-full text-white'></div>
                                                        <Text variant="h6" className='px-2 font-normal'>{item[`strIngredient${i + 1}`]} {item[`strMeasure${i + 1}`]}</Text>
                                                        </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='px-8'>
                                        <Text variant='h4'className='px-2 pb-2 pt-8 font-bold text-[#2d2013]'>Instruction</Text>
                                        <div className='flex flex-col gap-y-4'>
                                            {instruction.map((item,i) => {
                                                return( 
                                                <div key={i} className='relative px-2'>
                                                    <div className='pr-2 pt-1 float-left'>
                                                        <div className='flex place-items-center justify-center bg-[#2d2013] w-5 h-5 rounded-full text-white'>
                                                            <Text variant="paragraph" className='font-normal'>{i+1}</Text>
                                                        </div>
                                                    </div>
                                                    <Text variant="h6" className='font-normal'>{item}</Text>
                                                </div>
                                            )
                                            })}
                                        </div>
                                    </div>
                                    <div className='flex px-8 items-center justify-center'> 
                                        <iframe
                                            className='h-[60%] aspect-video rounded-md'
                                            src={youtubeUrl}
                                            allowFullScreen
                                        />
                                    </div>
                                    
                                </div>
                           </div>
                        )
                    })
                }
            </div>
        </div>
    )
}