import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    addToToWatch,
    incrementAsync,
    selectCount,
} from '../../features/movies/movieSlice';
import { Back, InnerDivs, Movies, Poster, Title, Actors, Img, GlobalStyle } from './styles'



const Table = () => {
    const { toWatch, currentlyWatching, liked, disliked } = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <Back>
            <GlobalStyle />
            <InnerDivs>
                <h3>To Watch:</h3>
                {toWatch.map((movie, index) => {
                    return (<Something movie={movie} index={index} />)
                })}
            </InnerDivs>
            <InnerDivs >
                <h3>Currently Watching:</h3>
                {currentlyWatching.map((movie, index) => {
                    return (<Something movie={movie} index={index} />)
                })}
            </InnerDivs>
            <InnerDivs >
                <h3>Liked:</h3>
                {liked.map((movie, index) => {
                    return (<Something movie={movie} index={index} />)
                })}
            </InnerDivs>
            <InnerDivs >
                <h3>Disliked:</h3>
                {disliked.map((movie, index) => {
                    return (<Something movie={movie} index={index} />)
                })}
            </InnerDivs>
        </Back>
    )
}
export default Table
const Something = ({ movie, index }) => {
    return (<Movies key={index + 'movie'}>
        <Poster><Img src={movie.Poster} /></Poster>
        <Title id='title'>{movie.Title}</Title>
        <Actors id='actors'>{movie.Actors}</Actors>
    </Movies>)
}