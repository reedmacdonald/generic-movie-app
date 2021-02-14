import React, { Fragment } from 'react'
import { Button } from '../../common/Components'
import styled, { createGlobalStyle } from 'styled-components'

const Modal = styled.div`
position:absolute;
width:60vw;
//height:30vh;
left:50%;
top:50%;
transform:translate(-50%,-50%);
background-color:grey;
zIndex:999999999999999999999999;
textAlign:center;
max-heigt:70vh;
overflow:scroll
`
const PosterHolder = styled.div`
width: 20%; 
margin: 0 auto;
min-width:200px
`
const GloblStyle = createGlobalStyle`
*{
    text-align:center
}
`

const MovieModal = ({ movie, onClick }) => {
    console.log(movie, '<---props')
    return (
        <Fragment>
            <GloblStyle />
            <Modal >
                <h1 style={{ textAlign: 'center' }}>{movie.Title}</h1>
                <PosterHolder><img style={{ width: '100%' }} src={movie.Poster} /></PosterHolder>
                <h4>Starring: {movie.Actors}</h4>
                <h4>Year: {movie.Year}</h4>
                <h5>Plot: {movie.Plot}</h5>
                <h5>Metascrore: {movie.Metascore}</h5>
            </Modal>
            <Button>Add to List</Button>
        </Fragment>
    )
}
export default MovieModal