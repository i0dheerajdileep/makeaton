import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import Assesment from './pages/Assesment'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Profile/>}/>
        <Route path='/dashboard/assesment' element={<Assesment/>}/>
      </Routes>
    </div>
  )
}

export default App