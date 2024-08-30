export async function getListArea(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let data = await response.json()
    // console.log(typeof data)
    return data.meals
}

export async function getListCategory(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')      
    let data = await response.json()
    // console.log(typeof data)
    return data.meals
}

export async function getCategories(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let data = await response.json()
    // console.log(data.categories)
    return data.categories
}

export async function getDetailCategories({category}: {category: string}){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data = await response.json()
    // console.log(data.meals)
    return data.meals
}

export async function getDetailArea({area}: {area: string}){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let data = await response.json()
    // console.log(data.meals)
    return data.meals
}

export async function getIngredients(){
    let response = await fetch("www.themealdb.com/api/json/v1/1/list.php?i=list")
    let data = await response.json()
    return data
}

export async function getMealsbyLetter(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    let data = await response.json()
    return data.meals
}

export async function getRandomMeals(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    let data = await response.json()
    return data.meals
}

export async function getMealsbyId({id}: {id: string}){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data = await response.json()
    // console.log(data.meals)
    return data.meals
}

export async function getMealsbySearch({name}: {name: string}){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let data = await response.json()
    // console.log(data.meals)
    console.log("search")
    
    const arrayData = data?.meals ?  Object.values(data.meals) : []
    console.log(arrayData)
    console.log(typeof arrayData)
    return arrayData
}