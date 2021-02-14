import React from 'react'
import { getMovies, containsObject } from '../../functions'
import Modal from './Modal'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import {
    addToToWatch,
    selectCount,
} from '../../features/movies/movieSlice';
import { useHistory } from 'react-router-dom'



const MoviesHolder = styled.div`
width:50%;
background-color:white;
border-radius:14px;
display:grid;
place-items:center;
min-height:50vh;
`
const Input = styled.input`
border-radius: 6px;
`;
const Button = styled.button``
const Div = styled.div`
display:grid;
place-items:center;
`
const H4 = styled.h4`
text-align:center
`

const Movies = () => {
    return (
        <MoviesHolder>
            <Form />
        </MoviesHolder>
    )
}
export default Movies
const Form = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [movieTitle, setMovieTitle] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)
    const [movie, setMovie] = React.useState(false)
    const [error, setError] = React.useState('')
    const history = useHistory()
    const onSee = async (value) => {
        try {
            const result = await getMovies(value)
            if (result.data.Response !== 'False') {
                setMovie(result)
                setError('')
            } else {
                setError(result.data.Error)
            }
        } catch (err) {
            console.log(err, '<---err')
        }
    }
    const exit = () => {
        setMovie('')
        setMovieTitle('')
    }
    const onSave = () => {
        const duplicate = count.toWatch.some((x) => { return x.Title == movie.data.Title })
        if (!duplicate) {
            dispatch(addToToWatch(movie.data))
        }
        exit()
    }
    return (
        <Div>
            {movie && <Modal onSave={onSave} movie={movie.data} exit={exit} />}
            <H4>Choose some movies that you may want to watch. Some of our favories are below, but feel free to choose your own too!</H4>
            <Div>
                <Input value={movieTitle} onChange={(e) => { setMovieTitle(e.target.value) }} />
            </Div>
            <Button onClick={() => { onSee(movieTitle) }}>See Movie</Button>
            {count.toWatch.length > 0 &&
                <React.Fragment>
                    <h3>Your movies:</h3>
                    {count.toWatch.map((item) => { return <div>{item.Title}</div> })}
                </React.Fragment>}
            {count.toWatch.length > 0 && <Button onClick={() => { history.push('/table') }}>Continue</Button>}
            {error && <div>{error}</div>}
        </Div>
    )
}