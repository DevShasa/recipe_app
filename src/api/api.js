const BASE_URL = 'https://api.spoonacular.com'

export const popular = async()=>{
    const response = await fetch(`${BASE_URL}/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=10`)
    // const response = await fetch(`${BASE_URL}/recipes/random?apiKey=e9036cf689384c84b67014679819e0bc&number=10`)
    const data = await response.json();
    // console.log(data)
    return data
}