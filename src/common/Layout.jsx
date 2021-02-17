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
color:${props => props.light ? "#515887" : "#FFFFFFF"};
right:20px;
top:20px;

`
const IconHolder = styled.div`
position: absolute; 
width: 30px;
height: 30px; 
top: 15px; 
left: 15px;
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
                ? <img onClick={setLight} style={{ width: "100% " }} src={Moon} />
                : <img onClick={setDark} style={{ width: "100% " }} src={Sun} />}
            </IconHolder>}
            {userLoggedIn && <Logout light={color} style={{ position: 'absolute', zIndex: 999999, cursor: 'pointer' }} onClick={logOut}>Logout</Logout>}
            <Background light={color}>{children}</Background>
        </React.Fragment>
    )

}
export default Layout