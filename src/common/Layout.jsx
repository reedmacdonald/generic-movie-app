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
filter: blur(8px);
background-image: url(${Image}),linear-gradient(to right, rgba(77,145,233,205), rgba(46,66,143,202)); 
background-blend-mode:luminosity;
object-fit:cover;
width:100vw;
height:100vh;
top:0;
margin-top:0;
`

const Foreground = styled.div`
width:100vw;
height:100vh;
position:absolute;
transform:translate(0,-100%);
display:grid;
place-items:center;
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
            {userLoggedIn && <div style={{ position: 'absolute', zIndex: 999999, cursor: 'pointer' }} onClick={logOut}>Logout</div>}
            <Background />
            <Foreground >{children}</Foreground>
        </React.Fragment>
    )

}
export default Layout