import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import image1 from '../../images/idCard.png'
// import { Line } from 'react-chartjs-2'
const Profile = ()=> {
    const [data,setData] = useState([])
    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)
    const [score3,setScore3] = useState(0)
    const [score4,setScore4] = useState(0)
    const [score5,setScore5] = useState(0)

    useEffect(() => {
        fetch('/profile', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result.score[result.score.length - 1].score)
            console.log(result.testDetails)
            setData(result.details)
            if(result.testDetails.length > 0) {
                for(var x = 0; x < result.testDetails.length; x++) {
                    var testId = result.testDetails[x].testId;
                    var score = result.testDetails[x].score;
                    if(testId === 1) 
                        setScore1(score)
                    else if(testId === 2)
                        setScore2(score)
                    else if(testId === 3) 
                        setScore3(score)
                    else if(testId === 4)
                        setScore4(score)
                    else if(testId === 5)
                        setScore5(score)
                }
            }
        })
    },[])
    return (
        <div className="profile-body">
            {
                data.map(item=>{
                    return(
                        <div className="container" key={item._id}>
                        <div className="profile-header">
                            <div className="profile-img">
                                <img src={image1} width="200" alt="mypic" />
                            </div>

                            <div className="profile-nav-info">
                                <h3 className="user-name">{item.name}</h3>
                                <h6 className="address">{item.gender}</h6>
                                <div className="address">
                                    <p className="state">{item.address}</p>
                                    {/* <span className="country">India</span> */}
                                </div>
                            </div>

                            <div className="profile-option">
                                <div className="notification">
                                    <FontAwesomeIcon icon="bell"/>
                                    <span className="alert-message">1</span>
                                </div>
                            </div>
                        </div>

                        <div className="main-bd">
                            <div className="left-side">
                                <div className="profile-side">
                                    <p className="mobile-no"><FontAwesomeIcon icon="phone" />{item.phoneNo}</p>
                                    <p className="user-mail"><FontAwesomeIcon icon="envelope" />{item.email}</p>
                                
                                    <div className="user-bio">
                                        <h3>Bio</h3>
                                        <p className="bio">Loren ipsum dolar sit amot, consectetur adiposing eleit.</p>
                                    </div>

                                    <div className="profile-btn">
                                        <button className="chatbtn"><FontAwesomeIcon icon="comment" />Chat</button>
                                        <button className="createbtn"><FontAwesomeIcon icon="plus" />Aspmt</button>
                                    </div>

                                </div>
                            </div>

                            <div className="container right-side">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <FontAwesomeIcon icon="bars" />
                                                    </div>

                                                    <div className="col">
                                                        <h3 className="display-3">{score1}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer">
                                                <h5>Test1</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <FontAwesomeIcon icon="bars" />
                                                    </div>

                                                    <div className="col">
                                                        <h3 className="display-3">{score2}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer">
                                                <h5>Test2</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <FontAwesomeIcon icon="bars" />
                                                    </div>

                                                    <div className="col">
                                                        <h3 className="display-3">{score3}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer">
                                                <h5>Test3</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <FontAwesomeIcon icon="bars" />
                                                    </div>

                                                    <div className="col">
                                                        <h3 className="display-3">{score4}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer">
                                                <h5>Test4</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card text-center">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <FontAwesomeIcon icon="bars" />
                                                    </div>

                                                    <div className="col">
                                                        <h3 className="display-3">{score5}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer">
                                                <h5>Test5</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
       
                    )
                })
            }
        </div>        
    )
}

export default Profile
