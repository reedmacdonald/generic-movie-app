import { get } from 'axios'
import * as SECRETS from './secrets'
import firebase, { auth } from './firebase/firebase'
const Url = (movieTitle) => {
    const newTitle = movieTitle.split(' ').join('+')
    console.log(newTitle, '<---newTitle')
    return `http://www.omdbapi.com/?t=${newTitle}&apikey=${SECRETS.MOVIES_API}`
}
export const getMovies = async (movieTitle) => {
    const result = await get(Url(movieTitle))
    return result

}
export const signUp = async (email, password, callback) => {
    await auth.createUserWithEmailAndPassword(email, password)
    callback()
}
export const login = async (email, password, callback) => {
    await auth.signInWithEmailAndPassword(email, password)
    callback()

}