import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import "./Join.css"

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="wrapper">
            <div className="form-signin">
                <h2 className="form-signin-heading text-center mb-5">Join Room</h2>
                <input placeholder="Name" className="form-control" type="text" onChange={(event)=> setName(event.target.value)} />
                <input placeholder="Room" className="form-control" type="text" onChange={(event)=> setRoom(event.target.value)} />
                <div className="submitButton">
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Join