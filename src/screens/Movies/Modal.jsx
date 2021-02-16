
import React, { Fragment } from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import { Modal, InnerModal, PosterHolder, LeftSide, RightSide, Ex } from "../Table/ModalStyle"
import { Button, SecondaryButton } from '../../common/Components'

const NewModal = styled(Modal)`
padding-top:0
`

const MovieModal = ({ movie, onSave, exit, dontShow, otherBoard, otherBoardFunction, remove, addComment }) => {
    const { Title, Poster, Actors, Year, Plot, Metascore, userComment, ...rest } = movie
    const [comment, setComment] = React.useState('')
    const [editing, setEditing] = React.useState(false)
    const [adding, setAdding] = React.useState(true)


    return (
        <NewModal >
            <Ex onClick={exit}>x</Ex>
            <LeftSide>
                <PosterHolder><img src={Poster} /></PosterHolder>
            </LeftSide>
            <RightSide>
                <h1 id='title'>{Title}</h1>
                <h5 id='plot'>{Plot}</h5>
                <h5><span>Genre:</span> {movie.Genre}</h5>
                <h5><span>Starring:</span> {Actors}</h5>
                <h5><span>Director:</span> {movie.Director}</h5>
                <h5><span>Writer:</span> {movie.Writer}</h5>
                <h5><span>Language:</span> {movie.Language}</h5>
                <h5><span>Release Date:</span> {movie.Released}</h5>
                <h5><span>Box Office:</span> {movie.BoxOffice}</h5>
                <h5><span>Metascrore:</span> {Metascore}</h5>
                <div id='buttonHolder'>
                    <Button onClick={() => onSave(movie)}>Add to List</Button>
                </div>

            </RightSide>
        </NewModal >
    )
}
export default MovieModal