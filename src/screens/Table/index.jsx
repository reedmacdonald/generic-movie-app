import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import MovieModal from '../Movies/Modal'
import {
    decrement,
    increment,
    addToToWatch,
    incrementAsync,
    selectCount,
    moveItem,
    reorderItem
} from '../../features/movies/movieSlice';
import { Back, InnerDivs, Movies, Poster, Title, Actors, Img, GlobalStyle } from './styles'



const Table = () => {
    const { toWatch, currentlyWatching, liked, disliked } = useSelector(selectCount);
    const dispatch = useDispatch();
    const [movie, setMovie] = React.useState('')
    const onDragEnd = (success) => {
        if (success.source.droppableId == success.destination.droppableId) {
            console.log('Im so tired')
            dispatch(reorderItem(success))
        } else {
            let finalObject
            const findIt = (awry, item, name) => {
                let fromSpot
                console.log({ awry, item, name }, '<----findIt')
                awry.forEach((x, index) => {
                    if (x.Title == item) {
                        fromSpot = index
                        return
                    }
                })
                finalObject = { fromSpot, fromLocation: name, destination: success.destination }
            }
            console.log(success.source.droppableId)
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
    const elements = [
        { name: 'toWatch', description: 'To Watch:', element: toWatch },
        { name: 'currentlyWatching', description: 'Currently Watching:', element: currentlyWatching },
        { name: 'liked', description: 'Liked:', element: liked },
        { name: 'disliked', description: 'Disliked:', element: disliked }]
    return (
        <Back>
            <GlobalStyle />
            {movie && <MovieModal dontShow movie={movie} exit={exit} />}
            <DragDropContext onDragEnd={(success) => { onDragEnd(success) }}>
                <Droppable droppableId="toWatch">
                    {(provided, snapshot) => (
                        <InnerDivs ref={provided.innerRef}>
                            <h3>To Watch:</h3>
                            {toWatch.length > 0 && toWatch.map((movie, index) => {
                                return <Draggable
                                    key={movie?.Title}
                                    draggableId={movie?.Title}
                                    movie={movie}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <Movies onDoubleClick={() => { setMovie(movie) }}
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
                <Droppable droppableId="currentlyWatching">
                    {(provided, snapshot) => (
                        <InnerDivs ref={provided.innerRef}>
                            <h3>Currently Watching:</h3>
                            {currentlyWatching.length > 0 && currentlyWatching.map((movie, index) => {
                                return <Draggable

                                    key={movie?.Title}
                                    draggableId={movie?.Title}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <Movies
                                            onDoubleClick={() => { setMovie(movie) }}
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
                <Droppable droppableId="liked">
                    {(provided, snapshot) => (
                        <InnerDivs ref={provided.innerRef}>
                            <h3>Liked:</h3>
                            {liked.length > 0 && liked.map((movie, index) => {
                                return <Draggable
                                    key={movie?.Title}
                                    draggableId={movie?.Title}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <Movies
                                            onDoubleClick={() => { setMovie(movie) }}
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
                <Droppable droppableId="disliked">
                    {(provided, snapshot) => (
                        <InnerDivs ref={provided.innerRef}>
                            <h3>Disliked:</h3>
                            {disliked.length > 0 && disliked.map((movie, index) => {
                                return <Draggable
                                    key={movie?.Title}
                                    draggableId={movie?.Title}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <Movies
                                            onDoubleClick={() => { setMovie(movie) }}
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
            </DragDropContext>
        </Back>
    )
}
export default Table

