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
background:${props => props.light ? 'white' : "#383A56"};
border-radius:10px
`
export const Header = styled.h3`
border-radius:10px;
background:${props => props.light ? "white" : "#383A56"};
padding:12px 0;
margin:10px 0;
font-weight:600;
font-size:16px;
line-height:24px;
color:${props => {

        switch (props.index) {
            case 0:
                if (props.light) {
                    return "#515887"
                }
                return "white"
            case 1:
                return '#4DACF3';
            case 2:
                return '#FEBA24';
            case 3:
                return "#4DACF3"
        }
    }}
`

export const HeaderHolder = styled.div`
border:${props => props.light ? "10px solid #F7F6FA" : "10px solid #24243A"};
border-left:0;
border-right:0;
background: ${props => props.light ? "#F7F6FA" : "#24243A"};
margin-top:0;
top:0;
`
export const Movies = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px; 
max-height:13vh;
margin:10px;
border-radius:14px;
background-color:${props => props.light ? "#ECF1FA" : "#ECF1FA"};
text-overflow: ellipsis;
overflow:hidden;
box-shadow: ${props => props.light && "0px 4px 4px #ECECED"};

`

export const Poster = styled.div`
grid-area: 1 / 4 / 4 / 6; 
border-radius:10px;
margin:5px;
margin-bottom:5px;
width:90px;


`
export const Title = styled.p`
font-weight:bold;
grid-area: 1 / 1 / 2 / 4; 
text-align:left;
margin-top:0;
margin-bottom:0;
margin-left:10px;
color:#4DACF3;
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
width: 90px; 
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