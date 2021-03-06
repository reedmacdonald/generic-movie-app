
import React, { Fragment } from 'react'

import styled from 'styled-components'
import { Modal, PosterHolder, LeftSide, RightSide, Ex } from "../../common/ModalStyle"
import { Button } from '../../common/Components'
import { useSelector } from 'react-redux'
import { selectColor } from '../../features/colors/colors'

const NewModal = styled(Modal)`
padding-top:0
`

const MovieModal = ({ movie, onSave, exit, dontShow, otherBoard, otherBoardFunction, remove, addComment }) => {
    const { Title, Poster, Actors, Year, Plot, Metascore, userComment, ...rest } = movie
    const [comment, setComment] = React.useState('')
    const [editing, setEditing] = React.useState(false)
    const [adding, setAdding] = React.useState(true)
    const light = useSelector(selectColor)

    return (
        <NewModal light={light}>
            <Ex light={light} onClick={exit}>x</Ex>
            <LeftSide light={light}>
                <PosterHolder><img src={Poster} /></PosterHolder>
            </LeftSide>
            <RightSide light={light}>
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
                    <Button light={light} onClick={() => onSave(movie)}>Add to List</Button>
                </div>
            </RightSide>
        </NewModal >
    )
}
export default MovieModal