import React,{useEffect,createContext, useReducer, useContext, useState} from 'react';
import './components/FontawesomeIcons'
import './App.css'
import NavBar from './components/navbar/Navbar'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Home from './components/Home/Home'
import Exercise from './components/Exercise/Exercise'
import Breathing from './components/Breathing/Breathing'
import Aspmt from './components/AspmtHomePage/AspmtHomePage'
import Test1 from './components/AspmtTests/Test1'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import Student from './components/Student/Student'
import Admin from './components/Admin/Admin'
import AddaPsychiatrist from './components/AddaPsychiatrist/AddaPsychiatrist'
import Psychiatrist from './components/Psychiatrist/Psychiatrist'
import Join from './components/ServerRoom/Join/Join'
import Chat from './components/ServerRoom/Chat/Chat'
import {reducer, initialState} from './reducers/userReducer'
import {Test1Data} from './components/AspmtTests/Test1Data';
import {Test2Data} from './components/AspmtTests/Test2Data';
import {Test3Data} from './components/AspmtTests/Test3Data';
import {Test4Data} from './components/AspmtTests/Test4Data';
import {Test5Data} from './components/AspmtTests/Test5Data';

export const UserContext = createContext()

const Routing = () =>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user)
    {
      if(user.role == 'student'){
        dispatch({type:"USER", payload:user})
        history.push('/student')
      }
      else if(user.role == 'admin'){
        dispatch({type:"ADMIN", payload:user})
        history.push('/admin')
      }
      else if(user.role == 'psychiatrist'){
        dispatch({type:"PSYCHIATRIST", payload:user})
        history.push('/psychiatrist')
      }
    }
   
    else{
      history.push('/')
    }
  },[])
  return (
        <Switch>
          <Route path="/" exact >
              <Home />
            </Route>

            <Route path="/exercise" exact >
              <Exercise />
            </Route>

            <Route path="/exercise/breathing" exact >
              <Breathing />
            </Route>

            <Route path="/exercise/aspmts" exact >
              <Aspmt />
            </Route>

            <Route path="/exercise/aspmts/test1" exact>
              <Test1 
                data={Test1Data}
                routeForTest={"/test1"}
                testName={"PHQ-9 Test"}/>
            </Route>

            <Route path="/exercise/aspmts/test2" exact>
              <Test1 
                data={Test2Data}
                routeForTest={"/test2"}
                testName={"GAD-7 Test"}/>
            </Route>

            <Route path="/exercise/aspmts/test3" exact>
              <Test1 
                data={Test3Data}
                routeForTest={"/test3"}
                testName={"OCI-R Test"}/>
            </Route>

            <Route path="/exercise/aspmts/test4" exact>
              <Test1 
                data={Test4Data}
                routeForTest={"/test4"}
                testName={"EBPS Test"}/>
            </Route>

            <Route path="/exercise/aspmts/test5" exact>
              <Test1 
                data={Test5Data}
                routeForTest={"/test5"}
                testName={"ISI Test"}/>
            </Route>




            <Route path="/signin" exact >
              <Signin />
            </Route>

            <Route path="/signup" exact >
              <Signup />
            </Route>

            <Route path="/student" exact >
              <Student />
            </Route>

            <Route path="/admin" exact >
              <Admin />
            </Route>

            <Route path="/admin/add" exact >
              <AddaPsychiatrist />
            </Route>

            <Route path="/psychiatrist" exact >
              <Psychiatrist />
            </Route>

            <Route path="/join" exact component={Join}>
            </Route>

            <Route path="/chat" component={Chat}>
            </Route>

            
        </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <div className="container">
        <NavBar />
          <Routing />
      </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

