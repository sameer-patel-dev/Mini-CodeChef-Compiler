import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = (e) => {
    const { values: { AutomaticThought, YourChallenge, AlternativeThought,  Feeling } } = this.props;
    
    fetch('/atc', {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        AutomaticThought:AutomaticThought,
        YourChallenge:YourChallenge,
        AlternativeThought:AlternativeThought,
        Feeling:Feeling
      })
    }).then(res=>res.json())
    .then(data=>{
        
    }).catch(err=>{
      console.log(err)
    })

    this.props.nextStep()
  };


  render() {
    const {
      values: { AutomaticThought, YourChallenge, AlternativeThought,  Feeling }
    } = this.props;
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
                      <span className="signin_span">{AutomaticThought}</span>
                      <span className="signin_span">{YourChallenge}</span>
                      <span className="signin_span">{AlternativeThought}</span>
                      <span className="signin_span">{Feeling}</span>

                      <button className="signin_button" onClick={this.submit} >Next</button>
                      <button className="signin_button" onClick={this.back} >Back</button>
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
                          <h1 className='signin_h1'>How are you feeling now?!</h1>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Confirm;