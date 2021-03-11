import React,{useState,useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import './Signin.css'

const Signin = ()=> {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const postData = ()=>{
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            alert("Invalid Email")
            return
        }
        fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                password:password,
                email:email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                alert("Signed In Successfully")
                if(data.user.role === 'student')
                {
                    history.push('/student')
                }

                else if(data.user.role === 'admin')
                {
                    history.push('/admin')
                }

                else if(data.user.role === 'psychiatrist')
                {
                    history.push('/psychiatrist')
                }
                // alert(JSON.stringify(data.user.role))
                // history.push('/profile')
            }
        }).catch(err=>{
            console.log(err)
        })
    }


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
                    <h1 className='signin_h1'>Sign in</h1>
                    <div className="signin_social-container">
                        <a className="social signin_a"><i className="fab fa-facebook-f"></i></a>
                        <a className="social signin_a"><i className="fab fa-google-plus-g"></i></a>
                        <a className="social signin_a"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="signin_span">or use your account</span>
                    <input className="signin_input" type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input className="signin_input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <a className="signin_a">Forgot your password?</a>
                    <button className="signin_button" onClick={()=>postData()}>Sign In</button>
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
                        <h1 className='signin_h1'>Hello, Friend!</h1>
                        <p className="signin_p">Enter your personal details and start your journey with us</p>
                        <Link to='/signup'><button className="signin_button ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signin
