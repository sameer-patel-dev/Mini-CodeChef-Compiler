import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import "./Join.css"

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (

        //         <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        //             <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
        //         </Link>
        <div className="signin_body">
        <div className="container signin_container" id="container">
            <div className="signin_form-container signin_sign-up-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Create Account</h1>
                    <div className="signin_social-container">
                        <a className="social signin_a"><i className="fab fa-facebook-f"></i></a>
                        <a className="social signin_a"><i className="fab fa-google-plus-g"></i></a>
                        <a className="social signin_a"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="signin_span">or use your email for registration</span>
                    <input className="signin_input" type="text" placeholder="Name" />
                    <input className="signin_input" type="email" placeholder="Email" />
                    <input className="signin_input" type="password" placeholder="Password" />
                    <button className="signin_button">Sign Up</button>
                </div>
            </div>
            <div className="signin_form-container signin_sign-in-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Chat Room</h1>
                    <div className="signin_social-container">
                        <a className="social signin_a"><i className="fab fa-facebook-f"></i></a>
                        <a className="social signin_a"><i className="fab fa-google-plus-g"></i></a>
                        <a className="social signin_a"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <input className="signin_input" type="text" placeholder="Name" onChange={(event)=> setName(event.target.value)} />
                    <input className="signin_input" type="text" placeholder="Room" onChange={(event)=> setRoom(event.target.value)}/>
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button className="signin_button">Join</button></Link>
                </div>
            </div>
            <div className="signin_overlay-container">
                <div className="signin_overlay">
                    <div className="signin_overlay-panel signin_overlay-left">
                        <h1 className='signin_h1'>Welcome Back!</h1>
                        <p className="signin_p">To keep connected with us please login with your personal info</p>
                        <button className="signin_ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="signin_overlay-panel signin_overlay-right">
                        <h1 className='signin_h1'>Join a Chatroom!</h1>
                        <p className="signin_p">Enter your details and chat with a Psychiatrist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Join