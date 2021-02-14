import React from 'react'
import { getMovies } from '../../functions'
import Modal from './Modal'
import styled from 'styled-components'
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
    const [movieTitle, setMovieTitle] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)
    const [movie, setMovie] = React.useState(false)
    const onSave = async (value) => {
        try {
            const result = await getMovies(value)
            console.log(result, '<----result')
            setMovie(result)
        } catch (err) {
            console.log(err, '<---err')
        }
    }
    React.useEffect(() => { movie && setShowModal(true) }, [movie])
    console.log(showModal, '<---showModal')

    return (
        <Div>
            {showModal && <Modal movie={movie.data} />}
            <H4>Choose some movies that you may want to watch. Some of our favories are below, but feel free to choose your own too!</H4>
            <Div>
                <Input value={movieTitle} onChange={(e) => { setMovieTitle(e.target.value) }} />
            </Div>
            <Button onClick={() => { onSave(movieTitle) }}>See Movie</Button>
        </Div>
    )
}