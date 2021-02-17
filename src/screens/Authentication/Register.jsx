import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../common/Components'
import { signUp } from '../../functions'
import { useHistory } from 'react-router-dom'
import { Heading } from './Components'
import { useSelector } from 'react-redux'
import { selectColor } from '../../features/colors/colors'



const Register = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const light = useSelector(selectColor)
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
            <Heading light={light}>Get Started</Heading>
            <Input
                light={light}
                value={email}
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
            <Input
                light={light}
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                placeholder='Username'
            />
            {error && <div>{error}</div>}
            <Button
                light={light}
                onClick={register}>Register</Button>

        </Fragment>
    )
}
export default Register