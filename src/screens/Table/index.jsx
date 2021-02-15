import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import MovieModal from './Modal'
import {
    selectCount,
    moveItem,
    reorderItem,
    addComment,
    removeItem
} from '../../features/movies/movieSlice';
import { updateBoard } from '../../functions';
import { toLightMode, toDarkMode, selectColor } from '../../features/colors/colors'
import { Back, InnerDivs, Movies, Poster, Title, Actors, Img, GlobalStyle } from './styles'

const Table = () => {
    const { toWatch, currentlyWatching, liked, disliked } = useSelector(selectCount);
    const mode = useSelector(selectColor)
    const dispatch = useDispatch();
    const [movie, setMovie] = React.useState('')

    React.useEffect(() => { saveBoard() }, [toWatch, currentlyWatching, liked, disliked])

    const saveBoard = async () => {
        try {
            await updateBoard({ toWatch, currentlyWatching, liked, disliked })
        } catch (err) {
            console.log(err, '<--err')
        }
    }
    const remove = (movie) => {
        dispatch(removeItem(movie))
        exit()
    }

    const onDragEnd = (success) => {
        if (!success.destination) {
            return
        }
        if (success.source.droppableId == success.destination.droppableId) {
            dispatch(reorderItem(success))
        } else {
            let finalObject
            const findIt = (awry, item, name) => {
                let fromSpot
                awry.forEach((x, index) => {
                    if (x.Title == item) {
                        fromSpot = index
                        return
                    }
                })
                finalObject = { fromSpot, fromLocation: name, destination: success.destination }
            }
            switch (success.source.droppableId) {
                case 'toWatch':
                    findIt(toWatch, success.draggableId, success.source.droppableId)
                    dispatch(moveItem(finalObject))
                    break
                case 'currentlyWatching':
                    findIt(currentlyWatching, success.draggableId, success.source.droppableId)
                    dispatch(moveItem(finalObject))
                    break
                case 'liked':
                    findIt(liked, success.draggableId, success.source.droppableId)
                    dispatch(moveItem(finalObject))
                    break
                case 'disliked':
                    findIt(disliked, success.draggableId, success.source.droppableId)
                    dispatch(moveItem(finalObject))
                    break
            }
        }
    }
    const exit = () => {
        setMovie('')
    }
    const leaveComment = (thisMovie) => {
        dispatch(addComment(thisMovie))
        setMovie(thisMovie)
    }
    const elements = [
        { name: 'toWatch', description: 'To Watch:', element: toWatch },
        { name: 'currentlyWatching', description: 'Currently Watching:', element: currentlyWatching },
        { name: 'liked', description: 'Liked:', element: liked },
        { name: 'disliked', description: 'Disliked:', element: disliked }
    ]
    return (
        <Back>
            <GlobalStyle />
            {movie && <MovieModal addComment={leaveComment} dontShow movie={movie} exit={exit} remove={remove} />}
            <DragDropContext onDragEnd={(success) => { onDragEnd(success) }}>
                {elements.map((element) => {
                    return <Droppable droppableId={element.name}>
                        {(provided, snapshot) => (
                            <InnerDivs ref={provided.innerRef}>
                                <h3>{element.description}</h3>
                                {element.element.map((movie, index) => {
                                    return <Draggable
                                        key={movie?.Title}
                                        draggableId={movie?.Title}
                                        movie={movie}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <Movies onDoubleClick={() => { setMovie({ ...movie, where: element.name, index }) }}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Poster ><Img src={movie.Poster} /></Poster>
                                                <Actors>{movie.Actors}</Actors>
                                                <Title>{movie.Title}</Title>
                                                <Title />
                                            </Movies>
                                        )}
                                    </Draggable>
                                })}
                            </InnerDivs>)}
                    </Droppable>
                })
                }
            </DragDropContext>
        </Back>
    )
}
export default Table

