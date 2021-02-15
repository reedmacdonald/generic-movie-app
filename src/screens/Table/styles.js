import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const Back = styled.div`
width:95vw;
border-radius:14px;
display: grid;
grid-template-columns: repeat(4, 1fr);
height:90vh;
`
export const InnerDivs = styled.div`
margin:10px;
overflow:scroll;
background:${props => props.light ? 'white' : "#383A56"}
`
export const Header = styled.h3`
border-radius:10px;
background:#383A56;
padding:12px 0;
margin:10px 0;
`

export const HeaderHolder = styled.div`
border:10px solid #24243A;
border-left:0;
border-right:0;
background: #24243A;
margin-top:0;
top:0;
`
export const Movies = styled.div`
display: grid;h
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px; 
max-height:15vh;
margin:10px;
border-radius:14px;
background-color:#ECF1FA;
text-overflow: ellipsis;
overflow:hidden;
`

export const Poster = styled.div`
grid-area: 1 / 4 / 4 / 6; 
border-radius:10px;
margin:5px;
margin-bottom:5px;


`
export const Title = styled.p`
font-weight:bold;
grid-area: 1 / 1 / 2 / 4; 
text-align:left;
margin-top:0;
margin-bottom:0;
margin-left:10px;
color:#4DACF3;
font-family:Lato;
font-size:16px;
line-height:24px;
font-weight:400;
`

export const Info = styled.small`
 grid-area: 2 / 1 / 4 / 4;
width:100%;
margin:10px;
text-align:left;
margin-top:0;
display:grid;
align-items:center;

`
export const Category = styled.h5`
text-align:left;
color:#FEBA24;
font-size:10px;
line-height:12px;
font-weight:600;
display:inline;
`
export const Response = styled.h5`
text-align:left;
color:#24243A;
font-size:10px;
line-height:12px;
font-weight:600;
display:inline;
`

export const Img = styled.img`
width: 100%; 
object-Fit: cover;
height:100%;
border-radius:10px;

`

export const GlobalStyle = createGlobalStyle`
*{
    text-align:center
}
div{
    text-align:left
}
`