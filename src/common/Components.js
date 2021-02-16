import React from 'react'
import styled from 'styled-components'
export const Input = styled.input`
width:100%;
background:${props => props.light ? 'black' : '#383A56'};
color:${props => props.light ? 'black' : 'white'};
padding:13px;
border-radius:10px;
border:${props => props.light ? '2px solid black' : '5px solid #383A56'};
outline:none;
`


export const SecondaryInput = styled(Input)`
background:transparent;
border:1px solid white;
`
export const Button = styled.div`
background-color:#4DACF3;
outline:none;
padding:10px 18px;
display:grid;
place-items:center;
border-radius:10px;
width:100%;
font-size:14px;
cursor:pointer;
color:white;
`
export const SecondaryButton = styled(Button)`
color:#4DACF3;
background-color:transparent;
border:1px solid #4DACF3;

`