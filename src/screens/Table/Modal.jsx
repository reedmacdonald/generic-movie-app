import React, { Fragment } from 'react'
import { Modal, PosterHolder, LeftSide, RightSide, Ex } from "../../common/ModalStyle"
import { Button, SecondaryButton, SecondaryInput, Input } from '../../common/Components'



const MovieModal = ({ movie, onSave, exit, dontShow, otherBoard, otherBoardFunction, remove, addComment }) => {
    const { Title, Poster, Actors, Year, Plot, Metascore, userComment, ...rest } = movie
    const [comment, setComment] = React.useState('')
    const [editing, setEditing] = React.useState(false)
    const [adding, setAdding] = React.useState(true)

    return (
        <Modal >
            <Ex onClick={exit}>x</Ex>
            <LeftSide>
                <PosterHolder><img style={{ borderRadius: "10px" }} src={Poster} /></PosterHolder>
                {!otherBoard && !userComment &&
                    <div><SecondaryInput placeholder='Add Comment' id='comment' value={comment} onChange={(e) => { setComment(e.target.value) }} placeholder='Add Comment' /></div>
                }
                {userComment && !editing &&
                    <p>{userComment}</p>

                }
                {editing &&
                    <div><SecondaryInput id='comment' value={comment} onChange={(e) => { setComment(e.target.value) }} placeholder='Add Comment' /></div>
                }
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

                    {!otherBoard && !userComment && <SecondaryButton
                        onClick={() => {
                            addComment({ ...movie, userComment: comment })
                            setAdding(false)
                        }}
                    > Comment</SecondaryButton>}
                    {userComment && !editing && !otherBoard && <SecondaryButton
                        onClick={() => {
                            setEditing(true)
                            setComment(userComment)
                        }}
                    > Edit Comment</SecondaryButton>}
                    {editing && <SecondaryButton onClick={() => {
                        addComment({ ...movie, userComment: comment })
                        setEditing(false)
                    }}>Save</SecondaryButton>}
                    {!otherBoard && <Button onClick={() => { remove(rest) }}>Remove</Button>}
                    {otherBoard && <Button onClick={() => { otherBoardFunction(movie) }}>Add to my Board</Button>}
                </div>

            </RightSide>
        </Modal >
    )
}
export default MovieModal