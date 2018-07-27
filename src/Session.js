import Cookies from 'universal-cookie';
const cookie = new Cookies()

export const setUser = (user) =>{
    return user ? cookie.set('token', user, {path: '/'}) : cookie.set('token', {path: '/'})
}

export const getUser = () =>{
    return cookie.get('token') || null
}
