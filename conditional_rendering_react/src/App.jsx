import React from 'react'
import {useState} from 'react'
import Logout from './components/Logout'
import Login from './components/Login.jsx'

const App = () => {

  const [isloggedIn, setIsLoggedIn] = useState(true)
  //using if else 
    // if(isloggedIn){
    //   return <Logout />
    // }else{
    //   return <Login />
    // }

  //using ternary operator
  // return (
  //   <div>
  //     {isloggedIn ? <Logout /> : <Login />}
  //   </div>
  // )


  //using && operator

  // if(!isloggedIn){
  //   return <Logout />
  // }

  // return (
  //   <div>
  //     {isloggedIn && <Login />}
  //   </div>
  // )
}

export default App