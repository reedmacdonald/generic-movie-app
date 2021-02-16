import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Image from '../images/hollywood.jpg'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../functions'
import {
    setAllItems
} from '../features/movies/movieSlice';


const Background = styled.div`
display:grid;
place-items:center;
width:100vw;
height:100vh;
background:${props => props.light ? 'F7F6FA' : "#24243A"};
top:0;
margin-top:0;
`
const Logout = styled.div`
position: absolute;
zIndex: 999999; 
cursor: pointer;
color:${props => props.light ? "#515887" : "#FFFFFF"};
right:20px;
top:20px;

`



const Layout = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(true)
    const [isDark, setIsDark] = React.useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const logOut = () => {
        auth.signOut().then(() => {

        }).catch((error) => {
            console.log(error, '<---err')
        });
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
            {userLoggedIn && <Logout style={{ position: 'absolute', zIndex: 999999, cursor: 'pointer' }} onClick={logOut}>Logout</Logout>}
            <Background >{children}</Background>
        </React.Fragment>
    )

}
export default Layout