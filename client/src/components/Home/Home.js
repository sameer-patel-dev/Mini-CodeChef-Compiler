import React from 'react'
import wave from "../../images/wave.png"
import image1 from '../../images/idCard.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Home = ()=> {
    return (
        <main>
            <div className="admin__container">
                <div className="admin__title">
                    <img src={image1} alt="hello" />
                        <div className="admin__greeting">
                            <h1>Hello Codersbite</h1>
                            <p>Welcome to your admin dashboard</p>
                        </div>
                </div>
            </div>
        </main>
    )
}

export default Home
