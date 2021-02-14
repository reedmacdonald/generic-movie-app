import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const Back = styled.div`
width:95vw;
background-color:white;
border-radius:14px;
display: grid;
display: grid;
grid-template-columns: repeat(4, 1fr);
height:90vh;
`
export const InnerDivs = styled.div`
margin:10px;
overflow:scroll;
background:lime;
`
export const Movies = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px; 
max-height:15vh;
margin:10px 0;
border-radius:14px;
background-color:yellow;
text-overflow: ellipsis;
overflow:hidden;
`

export const Poster = styled.div`
grid-area: 1 / 2 / 3 / 3;
margin:2px;
`
export const Title = styled.p`
font-weight:bold;
 grid-area: 1 / 1 / 2 / 2;
 margin:2px;
 text-align:center;
`

export const Actors = styled.small`
grid-area: 2 / 1 / 3 / 2;
width:100%;
margin:2px;
text-align:left;
`
export const Img = styled.img`
width: 100%; 
maxHeight: 15vh; 
objectFit: cover
`

export const GlobalStyle = createGlobalStyle`
*{
    text-align:center
}
`