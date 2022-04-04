import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css' 
import { Navbar } from './components'
import { Home, Login, Post } from './Pages'

const App = () => {
  const [user, setUser] = useState(null)

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