import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../common/Components'
import { signUp } from '../../functions'
import { useHistory } from 'react-router-dom'
import { Heading } from './Components'
const Register = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const goToMovies = () => { history.push('/add-movies') }
    const register = async () => {
        try {
            await signUp(email, password, username, goToMovies)
        } catch (err) {
            setError(err.message)
        }

    }

    return (
        <Fragment>
            <Heading>Get Started</Heading>

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
            <Input
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                placeholder='Username'
            />
            {error && <div>{error}</div>}
            <Button onClick={register}>Register</Button>

        </Fragment>
    )
}
export default Register