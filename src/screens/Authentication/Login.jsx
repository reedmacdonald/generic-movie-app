import { isAsyncThunkAction } from '@reduxjs/toolkit'
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../common/Components'
import { login } from '../../functions'
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
            <h1>Welcome Back</h1>
            <Input
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder='Email'
            />
            <Input
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                placeholder='Password'
            />
            {error && <div>{error}</div>}
            <Button>login</Button>
        </Fragment>
    )
}
export default Login