import React from 'react'
import { getDetailArea, getMealsbyId } from '@/app/api/getdata'
import Text from '@/app/components/atoms/Text/page'
import Card from '@/app/components/molecules/Card/page'

export default async function Page({ params }: { params: { area: string } }) {
    const detailCategory = await getDetailArea({area: params.area})
    
    return (
        <div className='m-20'>
            <div className='grid grid-cols-4 gap-4'>
                {detailCategory.map(async (item: any) => {
                return(
                    <div key={item.idMeal}>
                    <Card url={`/details/${item.idMeal}`} title={item.strMeal} subtitle='' url_image={item.strMealThumb}></Card>    
                    </div>
                )
            })}
            </div>
        </div>
    )
}