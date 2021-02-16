import { isAsyncThunkAction } from '@reduxjs/toolkit'
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../common/Components'
import { login } from '../../functions'
import { Heading } from './Components'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const LogIn = async () => {
        try {
            await login()
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <Fragment>
            <Heading>Welcome Back</Heading>

            <Input
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder='Email'
            />
            <Input
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                placeholder='Password'
                type='password'
            />
            {error && <div>{error}</div>}
            <Button>Login</Button>

        </Fragment>
    )
}
export default Login