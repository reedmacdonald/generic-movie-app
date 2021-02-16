import React from 'react'
import { getMovies } from '../../functions'
import Modal from './Modal'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import {
    addToToWatch,
    selectCount,
} from '../../features/movies/movieSlice';
import { useHistory } from 'react-router-dom'
import { Input, Button, SecondaryButton } from '../../common/Components'
import Suggestions from './Suggestions'



const MoviesHolder = styled.div`
width:50%;
border-radius:14px;
display:grid;
place-items:center;
min-height:50vh;
`

const Div = styled.div`
display:grid;
place-items:center;
margin:0 auto;
*{
margin-top:30px;
}
`
const InnerDiv = styled.div`
display:grid;
place-items:center;
margin:0 auto;
width:35%;

*{
margin-top:30px;
}
`

const H4 = styled.h4`
text-align:center;
font-family:Lato;
font-weight:600;
font-size:22px;
font-height:33px;
color:${props => props.light ? 'black' : 'white'}
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
                console.log(result.data, '<---result')
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
        let duplicate
        console.log(movie, '<---movie')
        if (!movie.data) {
            duplicate = count.toWatch.some((x) => { return x.Title == movie.Title })
        }
        else { duplicate = count.toWatch.some((x) => { return x.Title == movie.data.Title }) }

        if (!duplicate) {
            dispatch(addToToWatch(movie.data || movie))
        }
        exit()
    }
    const showMovie = (input) => {
        setMovie(input)
    }
    return (
        <Div>
            {movie && <Modal onSave={onSave} movie={movie.data || movie} exit={exit} />}
            <H4>Choose some movies that you may want to watch. Some of our favories are below, but feel free to choose your own too!</H4>
            <InnerDiv>
                <Input placeholder='Name' value={movieTitle} onChange={(e) => { setMovieTitle(e.target.value) }} />
                {error && <div>{error}</div>}
                <Button onClick={() => { onSee(movieTitle) }}>Info</Button>
                {count.toWatch.length > 0 && <SecondaryButton onClick={() => { history.push('/table') }}>Continue</SecondaryButton>}
            </InnerDiv>
            <Suggestions onSave={onSave} watch={count.toWatch} show={showMovie} />


        </Div>
    )
}