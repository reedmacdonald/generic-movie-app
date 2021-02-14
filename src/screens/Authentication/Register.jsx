import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../common/Components'
import { signUp } from '../../functions'
import { useHistory } from 'react-router-dom'
const Register = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const goToMovies = () => { history.push('/add-movies') }
    const register = async () => {
        try {
            await signUp(email, password, goToMovies)
        } catch (err) {
            console.log('did I get here?')
            setError(err.message)
        }

    }
    return (
        <Fragment>
            <h1>Get Started</h1>
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
            <Button onClick={register}>Register</Button>
        </Fragment>
    )
}
export default Register