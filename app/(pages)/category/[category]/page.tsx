import React from 'react'
import { getDetailCategories, getMealsbyId } from '@/app/api/getdata'
import Text from '@/app/components/atoms/Text/page'
import Button from '@/app/components/atoms/Button/page'
import Card from '@/app/components/molecules/Card/page'

export default async function Page({ params }: { params: { category: string } }) {
    const detailCategory = await getDetailCategories({category: params.category})
    
    return (
        <div className='m-20'>
            <div className='grid grid-cols-4 gap-4'>
                {detailCategory.map(async (item: any) => {
                    return(
                        <div key={item.idMeal}>
                        <Card url={`/details/${item.idMeal}`} title={item.strMeal} subtitle='' url_image={item.strMealThumb} width={1000} height={1000}></Card>    
                        </div>
                    )
                })}
            </div>
        </div>
    )
}