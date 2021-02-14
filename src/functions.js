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
export const containsObject = (obj, list) => {
    var x;
    for (x in list) {
        if (list.hasOwnProperty(x) && list[x] === obj) {
            return true;
        }
    }
    return false;
}
export const array_move = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};