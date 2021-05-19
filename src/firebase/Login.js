import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './Firebase'
import AmazonLogo from '../images/amazon logo.png'

function Login() {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email)
    console.log(password)


    const Signin = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((cred) => {
                console.log(cred)
                history.push('/')
            })

    }

    const registerForm = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                console.log(cred)
            })
    }


    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src={AmazonLogo} alt="" />
            </Link>

            <div className="login__container">

                <h1>Sign in</h1>

                <form>

                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="login__signin" onClick={Signin}>Sign in</button>

                </form>
                <p className="login__terms">
                    By signing-in you agree to Amazon's Conditions of Use and Sale.Please
                    see Privacy Notice, our Cookies Notice and our Interest-Based ads Notice.
                </p>
                <button className="login__create" onClick={registerForm}>Create Your Amazon Account</button>


            </div>


        </div>
    )
}

export default Login
