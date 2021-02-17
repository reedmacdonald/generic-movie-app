import React from "react"
import styled from 'styled-components'

export const Modal = styled.div`
position:absolute;
margin:0 auto;
background:${props => props.light ? 'white' : "#383A56"};
width:60vw;
height:60vh;
border:1px solid #FEBA24;
top:50%;
left:50%;
transform:translate(-50%,-50%);
border-radius:10px;
padding:79px 57px;
display:grid;
grid-template-columns:2fr 3fr;
grid-column-gap:7%;
overflow:scroll;
`
export const Ex = styled.div`
position:absolute;
top:10px;
right:10px;
cursor:pointer;
color:${props => props.light ? "#24243A" : 'white'};
`


export const PosterHolder = styled.div`
grid-area: 1 / 1 / 7 / 2; 
border-radius:10px;
img{
    height:90%;  
    display:block; 
    width:100%;
    border-radius:10px;
}
`

export const LeftSide = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px; 
max-height:65vh;
#commentBox{
    grid-area: 7 / 1 / 8 / 2;
}
#comment{
    display:block;
    text-align:left;
    width:100%;
}
p{
    display:grid;
    place-items:start;
    color:${props => props.light ? "#24243A" : "white"};
    text-align:left;
}
`
export const RightSide = styled.div`
display:grid;
place-items:start;
max-height:65vh;

*{
    text-align:left;
    margin-top:0;
    margin-bottom:0;
}

h4,h5,span{
    padding:0;
    margin-top:0;
    color:${props => props.light ? "#515887" : "white"};
}
span{
    color:gold
}
#buttonHolder{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:50px;
    margin-top:0;
    width:50%;
}
#title{
    color:${props => props.light ? "#4DACF3" : "white"}
}
`

