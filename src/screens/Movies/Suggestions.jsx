import React from 'react'
import styled from 'styled-components'
import { suggestion } from '../../constants'
import { selectColor } from '../../features/colors/colors'
import { useSelector } from 'react-redux'

const Box = styled.div`
 color:${props => props.light ? '#515887' : 'white'};
 font-size:22px;
 text-align:left;
 border-radius:10px;
 background-color:${props => props.light ? "white" : "#383A56"};
 width:100%;
 padding:20px;
 box-shadow: ${props => props.light && "0px 4px 4px #ECECED"};
 overflow:scroll;
 *{
     //ToD0: Figure out why I need to add important here
     margin-top:0 !important;
     margin-bottom:0 !important
 }
`
const Inner = styled.div`
grid-auto-flow: column;
display:grid;
margin-top:20px !important;
`

const Suggestions = ({ show, watch, onSave }) => {
    const light = useSelector(selectColor)

    return (
        <Box light={light}>
            Suggestions:
            <Inner >{suggestion.map((movie) => {
                let alReadyHas = watch.some && watch.some((x) => { return x.Title == movie.Title })
                if (alReadyHas) {
                    return
                }
                return (
                    <div onClick={() => show(movie)} style={{ width: '120px', margin: '10px', cursor: 'pointer' }}>
                        <div style={{ width: "120px", borderRadius: '10px' }}><img style={{ width: "100%", borderRadius: '10px' }} src={movie.Poster} /></div>
                        <div style={{ textAlign: 'center', fontSize: "14px" }}>{movie.Title}</div>
                    </div>)
            })}</Inner>
        </Box>
    )
}
export default Suggestions