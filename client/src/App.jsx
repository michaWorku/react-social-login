import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css' 
import { Navbar } from './components'
import { Home, Login, Post } from './Pages'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {

      try {
        const res = await fetch(
          "http://localhost:5000/auth/login/success", 
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
        })

        if (res.status === 200) {
          const resObject = await res.json()
          setUser(resObject.user);
        }
        else throw new Error("authentication has been failed!");

      } catch (err) {
        console.log(err);
      }

    };
    getUser();
  }, []);

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/login' element={user ? <Navigate to='/'/> : <Login/>}/>
          <Route path = '/post/:id' element={user ? <Post/> : <Navigate to='/login'/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App