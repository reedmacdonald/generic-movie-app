import React, { Fragment } from 'react'
import { Modal, PosterHolder, LeftSide, RightSide, Ex } from "../../common/ModalStyle"
import { Button, SecondaryButton, SecondaryInput, Input } from '../../common/Components'
import { selectColor } from '../../features/colors/colors'
import { useSelector } from 'react-redux'


const MovieModal = ({ movie, onSave, exit, dontShow, otherBoard, otherBoardFunction, remove, addComment }) => {
    const { Title, Poster, Actors, Year, Plot, Metascore, userComment, ...rest } = movie
    const [comment, setComment] = React.useState('')
    const [editing, setEditing] = React.useState(false)
    const [adding, setAdding] = React.useState(true)
    const light = useSelector(selectColor)

    return (
        <Modal light={light}>
            <Ex onClick={exit} light={light}>x</Ex>
            <LeftSide light={light} >
                <PosterHolder light={light}><img style={{ borderRadius: "10px" }} src={Poster} /></PosterHolder>
                {!otherBoard && !userComment &&
                    <div><SecondaryInput light={light} placeholder='Add Comment' id='comment' value={comment} onChange={(e) => { setComment(e.target.value) }} placeholder='Add Comment' /></div>
                }
                {userComment && !editing &&
                    <p>{userComment}</p>

                }
                {editing &&
                    <div><SecondaryInput light={light} id='comment' value={comment} onChange={(e) => { setComment(e.target.value) }} placeholder='Add Comment' /></div>
                }
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

                    {!otherBoard && !userComment && <SecondaryButton
                        light={light}
                        onClick={() => {
                            addComment({ ...movie, userComment: comment })
                            setAdding(false)
                        }}
                    > Comment</SecondaryButton>}
                    {userComment && !editing && !otherBoard && <SecondaryButton
                        light={light}
                        onClick={() => {
                            setEditing(true)
                            setComment(userComment)
                        }}
                    > Edit Comment</SecondaryButton>}
                    {editing && <SecondaryButton
                        light={light}
                        onClick={() => {
                            addComment({ ...movie, userComment: comment })
                            setEditing(false)
                        }}>Save</SecondaryButton>}
                    {!otherBoard && <Button light={light}
                        onClick={() => { remove(rest) }}>Remove</Button>}
                    {otherBoard && <Button light={light} onClick={() => {
                        const { userComment, ...movieNoComment } = movie
                        otherBoardFunction(movieNoComment)
                    }}>Add </Button>}
                </div>

            </RightSide>
        </Modal >
    )
}
export default MovieModal