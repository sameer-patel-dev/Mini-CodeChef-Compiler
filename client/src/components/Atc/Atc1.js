import React, { Component } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'

export class Atc1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
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
                      <h1 className='signin_h1'>Image daalna hai idher app se</h1>
                      <textarea className="signin_input" placeholder="Example: 'I am not good enough for this job' " value={values.AutomaticThought} onChange={handleChange('AutomaticThought')} />
                      <button className="signin_button" onClick={this.continue} >Next</button>
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
                          <h1 className='signin_h1'>Automatic Thought Challenge!</h1>
                          <p className="signin_p">Enter your First Thought. Automatic thoughts are generally negative and irrational</p>
                      </div>
                  </div>
              </div>
          </div>
          </div>
    );
  }
}

export default Atc1;