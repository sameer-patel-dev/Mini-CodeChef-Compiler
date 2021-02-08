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
                if(data.user.role == 'student')
                {
                    history.push('/profile')
                }

                else if(data.user.role == 'admin')
                {
                    history.push('/admin')
                }

                else if(data.user.role == 'psychiatrist')
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
        // <div className="wrapper">
        //     <div className="form-signin ">
        //         <h2 className="form-signin-heading text-center mb-5">Login Form </h2>
        //         <input 
        //             type="text" 
        //             className="form-control" 
        //             placeholder="Email Address"
        //             value={email}
        //             onChange={(e)=>setEmail(e.target.value)} />

        //         <input 
        //             type="password" 
        //             className="form-control" 
        //             placeholder="Password" 
        //             value={password}
        //             onChange={(e)=>setPassword(e.target.value)}/>

        //         <label className="checkbox">
        //             <input 
        //                 type="checkbox" 
        //                 value="remember-me" 
        //                 id="rememberMe"
        //                 name="rememberMe" />
        //                  Remember Me
        //         </label>

        //         <div className="submitButton">
        //         <button 
        //             className="btn btn-lg btn-primary btn-block"
        //             onClick={()=>postData()}>Login
        //         </button>
        //         </div>

        //         <h6 className="text-secondary mt-3 text-center">
        //             <Link to='/signup'>Dont have an Account? SignUp Here</Link>
        //         </h6>
        //     </div>
        // </div>
        
        <div className="signin_body">
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signin
