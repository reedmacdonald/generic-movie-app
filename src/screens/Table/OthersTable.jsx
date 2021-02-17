import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import MovieModal from './Modal'
import {
    addToToWatch,
    selectCount
} from '../../features/movies/movieSlice';
import { getUser, updateBoard } from '../../functions'
import { selectColor } from '../../features/colors/colors'
import { Back, InnerDivs, Movies, Poster, Title, Info, Img, GlobalStyle, Header, HeaderHolder } from './styles'



const OthersTable = () => {
    const [toWatch, setToWatch] = React.useState([])
    const [currentlyWatching, setCurrentlyWatching] = React.useState([])
    const [liked, setLiked] = React.useState([])
    const [disliked, setDisliked] = React.useState([])
    const { otherUser } = useParams()
    const light = useSelector(selectColor)
    const dispatch = useDispatch();
    const myMovies = useSelector(selectCount);
    const [movie, setMovie] = React.useState('')
    const history = useHistory()
    React.useEffect(() => { getAndSet() }, [])
    React.useEffect(() => { saveBoard() }, [myMovies])

    const getAndSet = async () => {
        let data = await getUser(otherUser)
        if (!data) {
            alert('This table does not seem to exist')
            history.push('/');
            return
        }
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
            <Back light={light}>
                <GlobalStyle />
                {movie && <MovieModal light={light} otherBoardFunction={addToMyMovies} otherBoard dontShow movie={movie} exit={exit} />}
                {elements.map((element, index) => {
                    return (<InnerDivs light={light} >
                        <HeaderHolder light={light}><Header light={light} index={index}>{element.description}</Header></HeaderHolder>
                        {element.element.map((movie, index) => {
                            return (<Card light={light} movie={movie} setMovie={setMovie} />)
                        })}
                    </InnerDivs>)
                })
                }
            </Back>
        </React.Fragment>
    )
}
export default OthersTable

const Card = ({ movie, setMovie, light }) => {
    return (<Movies light={light} onDoubleClick={() => { setMovie(movie) }}>
        <Poster light={light} ><Img light={light} src={movie.Poster} /></Poster>
        <Info light={light}>{movie.Actors}</Info>
        <Title light={light}>{movie.Title}</Title>
        <Title />
    </Movies>)
}