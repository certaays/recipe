
import {getCategories, getMealsbyLetter, getRandomMeals} from "./api/getdata";
import Typography from "./components/atoms/Text/page";
import Input from "./components/atoms/Input/page";
import { redirect } from "next/navigation";
import Link from "next/link";
import Card from "./components/molecules/Card/page";
import Text from "./components/atoms/Text/page";

export default async function Home() {
  let data = await getMealsbyLetter()
  let category = await getCategories()
  return (
    <div>
        <div className="px-8">
        <Text variant="h2" className="font-semibold pt-5">Very Delicious</Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2 xl:p-9">
          {data.map((item:any) => {
          return (
          <div key={item.idMeal}>
              <Card url={`/details/${item.idMeal}`} title={item.strMeal} subtitle={item.strCategory} url_image={item.strMealThumb} width={100} height={100}></Card>
          </div>
          )
        })}
        </div>
        <Text variant="h2" className="font-semibold">Category</Text>
        <div className="flex flex-wrap basis-4 items-center justify-center gap-2 pt-2">
          {
            category.map((item: any) => {
              return(
                <div key={item.idCategory}>
                  <Card url_image={item.strCategoryThumb} title={item.strCategory} subtitle="" width={1000} height={1000}></Card>
                </div>
              )
            })
          }
        </div>
        </div>
      </div>
  );
}
