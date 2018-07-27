const API_ID =  '7b7a1a76'
const APP_KEY = 'f04c1976b0dcdf3c5f889aeea11f7e35'
const APP_URL = 'https://api.edamam.com'

export const fetchFood = (food = '') => {
  food = food.trim()
  console.log(food)
  return fetch(`${APP_URL}/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`,{
    method: 'GET',
    headers: {
      'Conten-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include'
  })
    .then((res) => res.json())
}