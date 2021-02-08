import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const Signup = ()=> {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [address,setAddress] = useState("")
    const [phoneNo,setPhoneNo] = useState("")

    const postData = ()=>{
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            alert("Invalid Email")
            return
        }
        if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneNo))
        {
            alert("Invalid Phone Number")
            return
        }
        fetch('/signup', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email,
                age:age,
                gender:gender,
                address:address,
                phoneNo:phoneNo,
                role:"student"           
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert(data.message)
                history.push('/signin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="wrapper">
            <div className="form-signin">
                <h2 className="form-signin-heading text-center mb-5">Register Form </h2>
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder="User Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} /> 

                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email Address"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />

                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>

                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Age" 
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}/>
                    
                {/* gender */}
                <p>
                    <input
                        type="radio"
                        class="with-gap"
                        value="Male"
                        name="gender"
                        onChange={(e)=>setGender(e.target.value)}/>
                    <span> Male</span>
                </p>
                
                <p>
                    <input
                        type="radio"
                        class="with-gap"
                        value="Female"
                        name="gender"
                        onChange={(e)=>setGender(e.target.value)}/>
                    <span> Female</span>
                </p>
                
                <p>
                    <input
                        type="radio"
                        class="with-gap"
                        value="Other"
                        name="gender"
                        onChange={(e)=>setGender(e.target.value)}/>
                    <span> Other</span>
                </p>
                
        

                {/*  */}

                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Address" 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}/>

                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Phone Number" 
                    value={phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}/>

                <div className="submitButton">
                <button 
                    className="btn btn-lg btn-primary btn-block"
                    onClick={()=>postData()}>Register
                </button>
                </div>

                <h6 className="text-secondary mt-3 text-center">
                    <Link to='/signin'>Already have an Account? Login Here</Link>
                </h6>
            </div>
        </div>
    )
}

export default Signup
