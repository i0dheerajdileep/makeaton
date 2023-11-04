import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Profile/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App