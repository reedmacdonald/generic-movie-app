import { get } from 'axios'
import * as SECRETS from './secrets'
const Url = (movieTitle) => {
    const newTitle = movieTitle.split(' ').join('+')
    return `http://www.omdbapi.com/?t=${newTitle}&apikey=${SECRETS.MOVIES_API}`
}