import React from "react"
import styled from 'styled-components'

export const Main = styled.div`
width:20%;
min-width:250px;
height:60vh;
display:grid;
place-items:center;
border-radius:14px;
padding-right:0;
text-align:center;
`
export const Holder = styled.div`
display:grid;
place-items:center;
color:${props => props.light ? "#515887" : "white"};
font-size:14px;
line-height:16.8px;
font-weight:400;
width:100%;
#cta{
    cursor: pointer; 
    margin-Top: 5px;
    text-Decoration:underline;
    color:#FEBA24
}
`

export const Heading = styled.h1`
color:white;
font-size:36px;
width:100%;
padding:0;
margin:0;
`