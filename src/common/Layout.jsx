import React, { useState } from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../functions'
import {
    setAllItems
} from '../features/movies/movieSlice';
import { selectColor, toLightMode, toDarkMode } from '../features/colors/colors'
import Sun from '../../src/images/sun.png'
import Moon from '../../src/images/moon.png'
import Home from '../../src/images/home.png'
import Plus from '../../src/images/plus.png'


const Background = styled.div`
display:grid;
place-items:center;
width:100vw;
height:100vh;
background:${props => props.light ? '#F7F6FA' : "#24243A"};
top:0;
margin-top:0;
`
const Logout = styled.div`
position: absolute;
zIndex: 999999; 
cursor: pointer;
color:${props => props.light ? "#515887" : "white"};
right:20px;
top:20px;

`
const IconHolder = styled.div`
position: absolute; 

top: 15px; 
left: 15px;
display:grid;
grid-auto-flow:column;
img{
    width:40px;
    margin:0 10px;
    cursor:pointer;
}
`



const Layout = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()
    const color = useSelector(selectColor)
    const logOut = () => {
        auth.signOut().then(() => {

        }).catch((error) => {
            console.log(error, '<---err')
        });
    }
    const setLight = () => {
        dispatch(toLightMode())
    }
    const setDark = () => {
        dispatch(toDarkMode())
    }

    const defaultData = {
        toWatch: [],
        currentlyWatching: [],
        liked: [],
        disliked: []
    }

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            setUserLoggedIn(true)
            if (user.displayName) {

                const data = await getUser(user.displayName)
                console.log(data, '<---data')
                dispatch(setAllItems(data || defaultData))
            }
        } else {
            setUserLoggedIn(false)
        }
    });
    React.useEffect(() => {
        if (!userLoggedIn) {
            history.push('/')
        }
    }, [userLoggedIn])

    return (
        <React.Fragment>
            {<IconHolder>{color
                ? <img onClick={setLight} src={Moon} />
                : <img onClick={setDark} src={Sun} />}
                {userLoggedIn && <img onClick={() => { history.push('/table') }} src={Home} />}
                {userLoggedIn && <img onClick={() => { history.push('/add-movies') }} src={Plus} />}
            </IconHolder>}
            {userLoggedIn && <Logout light={color} style={{ position: 'absolute', zIndex: 999999, cursor: 'pointer' }} onClick={logOut}>Logout</Logout>}
            <Background light={color}>{children}</Background>
        </React.Fragment>
    )

}
export default Layout