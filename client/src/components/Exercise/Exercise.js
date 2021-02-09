import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import './Exercise.css';
import image1 from '../../images/exercise1.jpg'
import image2 from '../../images/exercise2.jpg'
import image3 from '../../images/exercise3.jpg'

const Exercise = ()=> {
    const history = useHistory()
    return (
        // <section id="services">
        //     <div className="container text-center">
        //         <h1 className="title">Exercises</h1>
        //         <div className="row text-center">

        //             <div className="col-md-4 services">
        //             <Link to="/exercise/aspmts" className="nav-link">
        //                 <div className="card">
        //                     <img className="card-img-top service-img mt-0 exerciseWidth" src={image1} alt="Card image cap"/>
        //                         <div className="card-body p-1">
        //                             <h4>Cognitive Mental Health Tests</h4>
        //                         </div>
        //                 </div>
        //             </Link>
        //             </div>

        //             <div className="col-md-4 services">
        //             <Link to="/exercise/atc" className="nav-link">
        //                 <div className="card">
        //                     <img className="card-img-top service-img mt-0 exerciseWidth" src={image2} alt="Card image cap"/>
        //                         <div className="card-body p-1">
        //                             <h4>Automatic Thought Challenge</h4>
        //                         </div>
        //                 </div>
        //             </Link>
        //             </div>

        //             <div className="col-md-4 services">
        //             <Link to="/exercise/breathing" className="nav-link">
        //                 <div className="card">
        //                     <img className="card-img-top service-img mt-0 exerciseWidth" src={image3} alt="Card image cap"/>
        //                         <div className="card-body p-1">
        //                             <h4>Deep Breathing for Relaxation</h4>
        //                         </div>
        //                 </div>
        //             </Link>
        //             </div>
        //         </div>
        //     </div>
        // </section>

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
