import { getCategories } from "@/app/api/getdata";
import Card from "@/app/components/molecules/Card/page";
import Text from "@/app/components/atoms/Text/page";

export default async function Category() {
  const categories = await getCategories()
  return (
    <div className="grid grid-cols-4 gap-8 px-20">
        {categories.map((item:any)=>{
          return(
            <div key={item.idCategory} className="">  
              <Card url={`/category/${item.strCategory}`} title={item.strCategory} subtitle="" url_image={item.strCategoryThumb} description={item.strCategoryDescription}></Card>
            </div>
          )
        })}
    </div>
  );
}
