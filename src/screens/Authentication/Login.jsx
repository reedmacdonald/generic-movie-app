import React, { Fragment, useState } from 'react'
import { Input, Button } from '../../common/Components'
import { login } from '../../functions'
import { Heading } from './Components'
import { useSelector } from 'react-redux'
import { selectColor } from '../../features/colors/colors'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const history = useHistory()
    const light = useSelector(selectColor)
    const LogIn = async () => {
        try {
            await login(email, password, () => { history.push('/table') })
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <Fragment>
            <Heading light={light}>Welcome Back</Heading>

            <Input
                value={email}
                light={light}
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder='Email'
            />
            <Input
                light={light}
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                placeholder='Password'
                type='password'
            />
            {error && <div>{error}</div>}
            <Button onClick={LogIn} light={light}>Login</Button>

        </Fragment>
    )
}
export default Login