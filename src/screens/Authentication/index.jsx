import React, { Fragment } from 'react'
import styled from 'styled-components'
import firebase, { auth } from '../../firebase'
import Login from './Login'
import Register from './Register'

const Main = styled.div`
width:50%;
height:60vh;
display:grid;
place-items:center;
background-color:white;
border-radius:14px;
`

const Authentication = () => {
    const [isLogin, setIsLogin] = React.useState(true)
    const renderLogin = () => {
        return (
            <div style={{ height: '30px', display: 'block' }}>

                Already a member?

                <div style={{ cursor: 'pointer', marginTop: '5px' }} onClick={() => { setIsLogin(!isLogin) }}>
                    Login
                </div>
            </div>
        )
    }
    const renderSignUp = () => {
        return (
            <div>
                Not a member?
                <div style={{ cursor: 'pointer', marginTop: '5px' }} onClick={() => { setIsLogin(!isLogin) }}>
                    Sign Up
                </div>
            </div >
        )
    }
    return (
        <Main>
            {isLogin ? <Login /> : <Register />}
            {isLogin ? renderSignUp() : renderLogin()}
        </Main>
    )
}
export default Authentication