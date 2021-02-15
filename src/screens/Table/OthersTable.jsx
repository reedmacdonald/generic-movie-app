import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import MovieModal from './Modal'
import {
    addToToWatch,
    selectCount
} from '../../features/movies/movieSlice';
import { getUser, updateBoard } from '../../functions'
import { toLightMode, toDarkMode, selectColor } from '../../features/colors/colors'
import { Back, InnerDivs, Movies, Poster, Title, Info, Img, GlobalStyle } from './styles'



const OthersTable = () => {
    const [toWatch, setToWatch] = React.useState([])
    const [currentlyWatching, setCurrentlyWatching] = React.useState([])
    const [liked, setLiked] = React.useState([])
    const [disliked, setDisliked] = React.useState([])
    const { otherUser } = useParams()
    const mode = useSelector(selectColor)
    const dispatch = useDispatch();
    const myMovies = useSelector(selectCount);
    const [movie, setMovie] = React.useState('')
    React.useEffect(() => { getAndSet() }, [])
    React.useEffect(() => { saveBoard() }, [myMovies])

    const getAndSet = async () => {
        const data = await getUser(otherUser)
        setToWatch(data.toWatch)
        setCurrentlyWatching(data.currentlyWatching)
        setLiked(data.liked)
        setDisliked(data.disliked)
    }

    const addToMyMovies = (movie) => {
        let doIHave = false
        let mine = Object.values(myMovies)
        mine.forEach((list) => {
            const result = list.some(({ Title }) => { return Title == movie.Title })
            if (result) {
                doIHave = true
            }
        })
        !doIHave && dispatch(addToToWatch(movie))
        setMovie("")
    }
    const saveBoard = async () => {
        try {
            await updateBoard(myMovies)
        } catch (err) {
            console.log(err, '<--err')
        }

    }

    const exit = () => {
        setMovie('')
    }
    const elements = [
        { name: 'toWatch', description: 'To Watch:', element: toWatch },
        { name: 'currentlyWatching', description: 'Currently Watching:', element: currentlyWatching },
        { name: 'liked', description: 'Liked:', element: liked },
        { name: 'disliked', description: 'Disliked:', element: disliked }
    ]
    return (
        <React.Fragment>
            <h1>You are looking at {otherUser}'s Board</h1>
            <Back>
                <GlobalStyle />
                {movie && <MovieModal otherBoardFunction={addToMyMovies} otherBoard dontShow movie={movie} exit={exit} />}
                {elements.map((element) => {
                    return (<InnerDivs >
                        <h3>{element.description}</h3>
                        {element.element.map((movie, index) => {
                            return (<Card movie={movie} setMovie={setMovie} />)
                        })}
                    </InnerDivs>)
                })
                }
            </Back>
        </React.Fragment>
    )
}
export default OthersTable

const Card = ({ movie, setMovie }) => {
    return (<Movies onDoubleClick={() => { setMovie(movie) }}>
        <Poster ><Img src={movie.Poster} /></Poster>
        <Info>{movie.Actors}</Info>
        <Title>{movie.Title}</Title>
        <Title />
    </Movies>)
}