import React, { Fragment } from 'react'
import { Button } from '../../common/Components'
import styled, { createGlobalStyle } from 'styled-components'

const Modal = styled.div`
position:absolute;
width:60vw;
left:50%;
top:50%;
min-Width:400px;
transform:translate(-50%,-50%);
background-color:grey;
zIndex:999999999999999999999999;
textAlign:center;
max-heigt:70vh;
overflow:scroll;
padding:10px
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

const Ex = styled.div`
position:absolute;
top:10px;
right:10px;
cursor:pointer

`

const MovieModal = ({ movie, onSave, exit, dontShow, otherBoard, otherBoardFunction }) => {
    const { Title, Poster, Actors, Year, Plot, Metascore } = movie
    return (
        <Fragment>
            <GloblStyle />
            <Modal >
                <Ex onClick={exit}>x</Ex>
                <h1>{Title}</h1>
                <PosterHolder><img style={{ width: '100%' }} src={Poster} /></PosterHolder>
                <h4>Starring: {Actors}</h4>
                <h4>Year: {Year}</h4>
                <h5>Plot: {Plot}</h5>
                <h5>Metascrore: {Metascore}</h5>
                <Button onClick={exit}>Dismiss</Button>
                {!otherBoard && <Button onClick={() => { }}>Remove</Button>}
                {otherBoard && <Button onClick={() => { otherBoardFunction(movie) }}>Add to my Board</Button>}
            </Modal>
        </Fragment>
    )
}
export default MovieModal