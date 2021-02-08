import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import image1 from '../../images/test-1.jpg'
import image2 from '../../images/test-2.jpg'
import image3 from '../../images/test-3.jpg'
import image4 from '../../images/test-4.jpg'
import image5 from '../../images/test-5.jpg'


const Aspmt = ()=> {
    const history = useHistory()
    return (
        <section id="services">
            <div className="container text-center">
                <h1 className="title">Cognitive Mental Health Exercies</h1>
                <div className="row text-center">
                    <div className="col-md-4 services">
                        <Link to="/exercise/aspmts/test1" className="nav-link">
                            <img alt="mypic" src={image1} className="service-img"></img>
                            <h4>PHQ-9 Test</h4>
                            <p>Patient Health Questionare: PHQ-9</p>
                        </Link>
                    </div>
                

                    <div className="col-md-4 services">
                        <Link to="/exercise/aspmts/test2" className="nav-link">
                            <img alt="mypic" src={image2} className="service-img"></img>
                            <h4>GAD-7 Test</h4>
                            <p>Generalized Anxiety Disorder: GAD-7</p>
                        </Link>
                    </div>

                    <div className="col-md-4 services">
                        <Link to="/exercise/aspmts/test3" className="nav-link">
                            <img alt="mypic" src={image3} className="service-img"></img>
                            <h4>OCI-R Test</h4>
                            <p>Obsessive Compulsive Inventory</p>
                        </Link>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 services">
                        <Link to="/exercise/aspmts/test4" className="nav-link">
                            <img alt="mypic" src={image4} className="service-img"></img>
                            <h4>EBPS Test</h4>
                            <p>Edinburgh Postnatal Depression</p>
                        </Link>
                    </div>
                

                    <div className="col-md-4 services">
                        <Link to="/exercise/aspmts/test5" className="nav-link">
                            <img alt="mypic" src={image5} className="service-img"></img>
                            <h4>ISI</h4>
                            <p>Insomnia Severity Index</p>
                        </Link>
                    </div>

                    {/* <div className="col-md-4 services">
                        <Link to="/exercise/aspmts/test6" className="nav-link">
                            <img alt="mypic" src={image1} className="service-img"></img>
                            <h4>PHQ-9 Test</h4>
                            <p>PHQ-9 Test to analyse your Stress</p>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Aspmt
