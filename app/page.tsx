
import { getCategories, getMealsbyLetter, getRandomMeals } from "./api/getdata";
import Typography from "./components/atoms/Text/page";
import Input from "./components/atoms/Input/page";
import { redirect } from "next/navigation";
import Link from "next/link";
import Card from "./components/molecules/Card/page";
import Text from "./components/atoms/Text/page";
import Image from 'next/image'


export default async function Home() {
  let data = await getMealsbyLetter()
  let category = await getCategories()
  return (
    <div>
      <div className="px-16 pb-8 pt-24 grid grid-cols-2 items-center">
        <div>
          <Text variant="h1" className="font-black text-7xl">Cooking Made Simple: Explore Our Recipe Collection</Text>
          <Text variant="h5" className="font-semibold py-2">Discover easy-to-follow recipes that make cooking a breeze and delight your taste buds with every meal</Text>
        </div>
        <div className="w-full flex flex-row justify-end">
          <div className="aspect-square relative w-2/3">
            <Image
              src="/images/landing-page.png"
              alt="landing-page"
              className='w-full object-cover relative'
              fill
            />
            <svg className="absolute -z-10" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <path fill="#D57D1F" d="M56.5,-34.1C67.2,-13.9,65.9,11.7,54.5,34.6C43.1,57.6,21.5,77.9,2.5,76.4C-16.5,74.9,-32.9,51.7,-43.6,29.2C-54.3,6.7,-59.2,-15.1,-50.9,-33.8C-42.7,-52.5,-21.4,-68.1,0.7,-68.5C22.8,-69,45.7,-54.3,56.5,-34.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-16">
        <Text variant="h2" className="font-semibold pt-5">Some Recipe</Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-2">
          {data.map((item: any) => {
            return (
              <div key={item.idMeal}>
                <Card url={`/details/${item.idMeal}`} title={item.strMeal} subtitle={item.strCategory} url_image={item.strMealThumb}></Card>
              </div>
            )
          })}
        </div>
        <Text variant="h2" className="font-semibold pt-8">Category</Text>
        <div className="flex flex-wrap basis-4 items-center justify-center gap-2 pt-2">
          {
            category.map((item: any) => {
              return (
                <div className="w-[245px]" key={item.idCategory}>
                  <Card url_image={item.strCategoryThumb} title={item.strCategory} subtitle=""></Card>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
