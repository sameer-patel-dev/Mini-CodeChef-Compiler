import React from 'react';
import "./Admin.css";
import hello from "../../images/hello.svg";
import Chart from "../charts/Chart";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Admin = () => {
  return (
    <main>
      <div className="admin__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="admin__title">
          <img src={hello} alt="hello" />
          <div className="admin__greeting">
            <h1>Hello Admin</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="admin__cards">
          <div className="card">
            {/* <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
             */}
             <FontAwesomeIcon icon="stethoscope" size="2x" />
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">9</span>
            </div>
          </div>

          <div className="card">
            {/* <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i> */}
            <FontAwesomeIcon icon="stethoscope" size="2x" />
            <div className="card_inner">
              <p className="text-primary-p">Number of Psychiatrists</p>
              <span className="font-bold text-title">2</span>
            </div>
          </div>

          <div className="card">
            {/* <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i> */}
            <FontAwesomeIcon icon="stethoscope" size="2x" />
            <div className="card_inner">
              <p className="text-primary-p">Number of Students</p>
              <span className="font-bold text-title">7</span>
            </div>
          </div>

          <div className="card">
            {/* <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i> */}
            <FontAwesomeIcon icon="stethoscope" size="2x" />
            <div className="card_inner">
              <p className="text-primary-p">Number of ATC</p>
              <span className="font-bold text-title">3</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>User Reports</h1>
                <p>User's Progress</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>User Reports</h1>
                <p>Different Users</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Sameer Patel</h1>
                <p>Student</p>
              </div>

              <div className="card2">
                <h1>Mittal Jain</h1>
                <p>Psychiatrist</p>
              </div>

              <div className="card3">
                <h1>Sarvesh Pai</h1>
                <p>Student</p>
              </div>

              <div className="card4">
                <h1>Jignesh Nadga</h1>
                <p>Student</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Admin;
