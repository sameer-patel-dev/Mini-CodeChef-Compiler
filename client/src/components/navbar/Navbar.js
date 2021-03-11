import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {UserContext} from '../../App'
import "./Navbar.css";
import avatar from "../../images/avatar.svg";


const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

  const renderList = ()=>{
    if(state)
    {
      if(state.role == 'admin')
      {
        return [
          <Link to="/admin">Dashboard</Link>,
          <Link to="/admin/add">Add a Psychiatrist</Link>,
          <Link to="/join">Chatroom</Link>,
          <Link to="/signin" onClick={()=>{
                                            localStorage.clear()
                                            dispatch({type:"CLEAR"})
                                            history.push('/signin')
                                      }}>SignOut
          </Link>,
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
              ]
      }

      else if(state.role == 'psychiatrist')
      {
        return [
          <Link to='/psychiatrist'>Profile</Link>,
          <Link to="/join">Chatroom</Link>,
          <Link to="/signin" onClick={()=>{
                                            localStorage.clear()
                                            dispatch({type:"CLEAR"})
                                            history.push('/signin')
                                      }}>SignOut
          </Link>,
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
              ]
      }

      else if(state.role == 'student')
      {
        return [
          <Link to="/student">Profile</Link>,
          <Link to="/exercise">Exercises</Link>,
          <Link to='/watson'>Virtual Psychiatrist</Link>,
          <Link to="/join">Chatroom</Link>,
          <Link to="/signin" onClick={()=>{
                                localStorage.clear()
                                dispatch({type:"CLEAR"})
                                history.push('/signin')
                            }}>SignOut
          </Link>,
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
              ]
      }
        
    }

    else
    {
        return [
          <Link to="/signin">SignIn</Link>,
          <Link to="/signup">SignUp</Link>,
              ]
    }

}



  return (
    <nav className="navbar">

      <div className="navbar__left">
        <Link to='/'>PSYCHE</Link>
      </div>

      <div className="navbar__right">
        {/* <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
          <FontAwesomeIcon icon="stethoscope"/>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <FontAwesomeIcon icon="stethoscope"/>
        </a>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a> */}
        {renderList()}
      </div>
    </nav>
  );
};

export default Navbar;
