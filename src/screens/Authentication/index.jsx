import React from 'react'
import styled from 'styled-components'
import firebase, { auth } from '../../firebase/firebase'

const Main = styled.div`
width:50%;
height:60vh;
display:grid;
place-items:center;
background-color:white;
border-radius:14px;
`
const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(userCredential, '<---userCredential')
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error, '<----error')
            // ..
        });
}

const Authentication = () => {
    return (
        <Main>
            <h1>Login</h1>
            <button onClick={() => { signUp('reedpmacdonald@gmail.com', 'Hoffman1!') }}>Login</button>
        </Main>
    )
}
export default Authentication