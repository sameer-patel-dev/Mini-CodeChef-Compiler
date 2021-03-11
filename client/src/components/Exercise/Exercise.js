import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import './Exercise.css';

const Exercise = ()=> {
    const history = useHistory()
    return (
   <div className="exercise_body">
        <div className="exercise_container">

            <Link to="/exercise/aspmts">
            <div className="exercise_card">
                <div className="exercise_box">
                    <div className="exercise_content">
                        <h2>01</h2>
                        <h3>Cognitive Mental Health Tests</h3>
                        <p>Various educators teach rules governing the length of paragraphs. They may say that a paragraph should be 100 to 200 words long, or be no more than five or six sentences. </p>
                        <a>Read More</a>
                    </div>
                </div>
            </div>
            </Link>

            
            <Link to="/exercise/atc">
            <div className="exercise_card">
                <div className="exercise_box">
                    <div className="exercise_content">
                        <h2>02</h2>
                        <h3>Automatic Thought Challenge</h3>
                        <p>Various educators teach rules governing the length of paragraphs. They may say that a paragraph should be 100 to 200 words long, or be no more than five or six sentences. </p>
                        <a>Read More</a>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/exercise/breathing">
            <div className="exercise_card">
                <div className="exercise_box">
                    <div className="exercise_content">
                        <h2>03</h2>
                        <h3>Deep Breathing for Relaxation</h3>
                        <p>Various educators teach rules governing the length of paragraphs. They may say that a paragraph should be 100 to 200 words long, or be no more than five or six sentences. </p>
                        <a>Read More</a>
                    </div>
                </div>
            </div>
            </Link>

        </div>
    </div>    
    )
}

export default Exercise
