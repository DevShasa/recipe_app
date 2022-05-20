const BASE_URL = 'https://api.spoonacular.com'

export const getPopularRecipes = async()=>{
    
    const checkPopular = localStorage.getItem('popular')
    if(checkPopular){
        return JSON.parse(checkPopular)
    }else{
        try{
            const response = await fetch(`${BASE_URL}/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=10`)
            const data = await response.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            return data.recipes
        }catch(err){
            console.log(err)
        }
    }
}

export const getPopularVegetarian = async()=>{
    
    const checkPopularVegetarian = localStorage.getItem('vegetarian')
    if(checkPopularVegetarian){
        return JSON.parse(checkPopularVegetarian)
    }else{
        try{
            const response = await fetch(`${BASE_URL}/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=10&tags=vegetarian`)
            const data = await response.json();
            localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
            return data.recipes
        }catch(err){
            console.log(err)
        }
    }
}

export const getCuisine = async(cuisine)=>{
    
    const checkCuisine = localStorage.getItem(`${cuisine}`)
    if(checkCuisine){
        return JSON.parse(checkCuisine)
    }else{
        try{
            const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&cuisine=${cuisine}`)
            const data = await response.json();
            localStorage.setItem(`${cuisine}`, JSON.stringify(data.results))
            return data.results
        }catch(err){
            console.log(err)
        }
    } 
}

export const getSearched = async(searchTerm)=>{
    
    const checkSearch = localStorage.getItem(`${searchTerm}`)
    if(checkSearch){
        return JSON.parse(checkSearch)
    }else{
        try{
            const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&query=${searchTerm}`)
            const data = await response.json();
            localStorage.setItem(`${searchTerm}`, JSON.stringify(data.results))
            return data.results
        }catch(err){
            console.log(err)
        }
    } 
}

export const getRecipeByid = async(id)=>{
    const checkId = localStorage.getItem(`${id}`)
    if(checkId){
        return JSON.parse(checkId)
    }else{
        try{
            const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}`)
            const data = await response.json()
            localStorage.setItem(`${id}`, JSON.stringify(data))
            return data
        }catch(err){
            console.log(err)
        }
    }
}
