import React, { Fragment } from 'react'
import styled from 'styled-components'
import firebase, { auth } from '../../firebase'
import Login from './Login'
import Register from './Register'
import { Main, Holder } from './Components'
import { useSelector } from 'react-redux'
import { selectColor } from '../../features/colors/colors'





const Authentication = () => {
    const [isLogin, setIsLogin] = React.useState(true)
    const light = useSelector(selectColor)
    const renderLogin = () => {
        return (
            <Holder light={light} >
                <div>Already a member?</div>
                <div id='cta' onClick={() => { setIsLogin(!isLogin) }}>
                    Login
                </div>
            </Holder>
        )
    }
    const renderSignUp = () => {
        return (
            <Holder light={light}>
                <div>Not a member?</div>
                <div id='cta' onClick={() => { setIsLogin(!isLogin) }}>
                    Sign Up
                </div>
            </Holder>
        )
    }
    return (
        <Main light={light}>
            <React.Fragment>
                {isLogin ? <Login /> : <Register />}
                {isLogin ? renderSignUp() : renderLogin()}
            </React.Fragment>
        </Main>
    )
}
export default Authentication