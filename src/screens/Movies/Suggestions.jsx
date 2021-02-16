import React from 'react'
import styled from 'styled-components'
import { suggestion } from '../../constants'

const Box = styled.div`
 font-family:Lato;
 color:${props => props.light ? 'black' : 'white'};
 font-size:22px;
 text-align:left;
 border-radius:10px;
 background-color:${props => props.light ? "#383A56" : "#383A56"};
 width:100%;
 padding:20px;
 overflow:scroll;
 *{
     margin-top:0 !important;
     margin-bottom:0 !important
 }
`
const Inner = styled.div`
grid-auto-flow: column;
display:grid;
margin-top:0;
`

const Suggestions = ({ show, watch, onSave }) => {
    console.log(watch, '<---watch')
    return (
        <Box >
            Suggestions:
            <Inner >{suggestion.map((movie) => {
                let alReadyHas = watch.some && watch.some((x) => { return x.Title == movie.Title })
                if (alReadyHas) {
                    return
                }
                return (
                    <div onClick={() => show(movie)} style={{ width: '120px', margin: '10px' }}>
                        <div style={{ width: "120px", borderRadius: '10px' }}><img style={{ width: "100%", borderRadius: '10px' }} src={movie.Poster} /></div>
                        <div style={{ textAlign: 'center', fontSize: "14px" }}>{movie.Title}</div>
                    </div>)
            })}</Inner>
        </Box>
    )
}
export default Suggestions