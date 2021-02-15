import { get } from 'axios'
import * as SECRETS from './secrets'
import firebase, { auth } from './firebase/firebase'

const Url = (movieTitle) => {
    const newTitle = movieTitle.split(' ').join('+')
    return `https://www.omdbapi.com/?t=${newTitle}&apikey=${SECRETS.MOVIES_API}`
}
export const getMovies = async (movieTitle) => {
    const result = await get(Url(movieTitle))
    return result

}
export const signUp = async (email, password, displayName, callback) => {
    await auth.createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    await user.updateProfile({ displayName })
    callback()
}
export const login = async (email, password, callback) => {
    await auth.signInWithEmailAndPassword(email, password)
    callback()
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
const db = firebase.firestore()

export const updateBoard = (info) => {
    const user = firebase.auth().currentUser
    user && db.collection("users").doc(user.displayName).set(info)
}
export const getUser = async (displayName) => {
    const result = await db.collection("users").doc(displayName).get()
    return result.data()
}
