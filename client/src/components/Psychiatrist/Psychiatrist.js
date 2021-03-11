import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Psychiatrist.css";
import hello from "../../images/hello.svg";
import Chart from "../charts/Chart";


const Psychiatrist = ()=> {
  const [data,setData] = useState([])

  useEffect(() => {
      fetch('/profile', {
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
          setData(result.details)
      })
  },[])
  return (
      <main>
      {
          data.map(item=>{
              return(
                  <div className="admin__container">
                      <div className="admin__title">
                          <img src={hello} alt="hello" />
                          <div className="admin__greeting">
                              <h1>Hello {item.name}</h1>
                              <p>Welcome to your Dashboard</p>
                          </div>
                      </div>

                      <div className="admin__cards">
                          
                          <div className="card">
                              <FontAwesomeIcon icon="stethoscope" size="2x" />
                              <div className="card__inner">
                                  <p className="text-primary-p">Name</p>
                                  <span className="font-bold text-title">{item.name}</span>
                              </div>
                          </div>

                          <div className="card">
                              <FontAwesomeIcon icon="stethoscope" size="2x" />
                              <div className="card__inner">
                                  <p className="text-primary-p">Gender</p>
                                  <span className="font-bold text-title">{item.gender}</span>
                              </div>
                          </div>

                          <div className="card">
                              <FontAwesomeIcon icon="stethoscope" size="2x" />
                              <div className="card__inner">
                                  <p className="text-primary-p">Email</p>
                                  <span className="font-bold text-title">{item.email}</span>
                              </div>
                          </div>

                          <div className="card">
                              <FontAwesomeIcon icon="stethoscope" size="2x" />
                              <div className="card__inner">
                                  <p className="text-primary-p">Phone Number</p>
                                  <span className="font-bold text-title">{item.phoneNo}</span>
                              </div>
                          </div>

                      </div>


                      <div className="charts">
                          <div className="charts__left">
                              <div className="charts__left__title">
                                  <div>
                                      <h1>Your Progress</h1>
                                      <p>based on Mental Health</p>
                                  </div>
                                  <i className="fa fa-usd" aria-hidden="true"></i>
                              </div>
                              <Chart />
                          </div>

                          <div className="charts__right">
                              <div className="charts__right__title">
                                  <div>
                                      <h1>Students Under you</h1>
                                      <p>Student Details</p>
                                  </div>
                                  <i className="fa fa-usd" aria-hidden="true"></i>
                              </div>


                              <div className="charts__right__cards">
                                  <div className="card1">
                                      <h2>Sameer Patel</h2>
                                      <h2>Male</h2>
                                  </div>

                                  <div className="card2">
                                      <h2>Mittal Jain</h2>
                                      <h2>Female</h2>
                                  </div>

                                  <div className="card3">
                                      <h2>Sarvesh Pai</h2>
                                      <h2>Male</h2>
                                  </div>

                                  <div className="card4">
                                      <h2>Jignesh Nagda</h2>
                                      <h2>Male</h2>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              )
          })
      }
  </main>
  )
}

export default Psychiatrist
