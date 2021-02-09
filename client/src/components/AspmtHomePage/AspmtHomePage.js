import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './AspmtHomePage.css';

const Aspmt = ()=> {
    const history = useHistory()
    return (
        <div className="AspmtHomePage_body">
        <div className="AspmtHomePage_container">
            
                <div className="AspmtHomePage_card">
                    <div className="AspmtHomePage_circle">
                        <h2>01</h2>
                    </div>
                    <div className="AspmtHomePage_content">
                        <p>Lorem ipsum dolor sit amet, cnsecjit skssksksk</p>
                        <a><Link to="/exercise/aspmts/test1">Patient Health Questionare: PHQ-9</Link></a>
                    </div>
                </div>

            
                <div className="AspmtHomePage_card" to='/exercise/aspmts/test2'>
                    <div className="AspmtHomePage_circle">
                        <h2>02</h2>
                    </div>
                    <div className="AspmtHomePage_content">
                        <p>Lorem ipsum dolor sit amet, cnsecjit skssksksk</p>
                        <a><Link to="/exercise/aspmts/test2">Generalized Anxiety Disorder: GAD-7</Link></a>
                    </div>
                </div>

            <div className="AspmtHomePage_card">
                <div className="AspmtHomePage_circle">
                    <h2>03</h2>
                </div>
                <div className="AspmtHomePage_content">
                    <p>Lorem ipsum dolor sit amet, cnsecjit skssksksk</p>
                    <a><Link to="/exercise/aspmts/test3">Obsessive Compulsive Inventory: OCI-R</Link></a>
                </div>
            </div>

            <div className="AspmtHomePage_card">
                <div className="AspmtHomePage_circle">
                    <h2>04</h2>
                </div>
                <div className="AspmtHomePage_content">
                    <p>Lorem ipsum dolor sit amet, cnsecjit skssksksk</p>
                    <a><Link to="/exercise/aspmts/test4">Edinburgh Postnatal Depression: EBPS</Link></a>
                </div>
            </div>

            <div className="AspmtHomePage_card">
                <div className="AspmtHomePage_circle">
                    <h2>05</h2>
                </div>
                <div className="AspmtHomePage_content">
                    <p>Lorem ipsum dolor sit amet, cnsecjit skssksksk</p>
                    <a><Link to="/exercise/aspmts/test5">Insomnia Severity Index: ISI</Link></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aspmt
