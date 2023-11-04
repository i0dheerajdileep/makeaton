import React from 'react'
import Sidebar from '../components/Sidebar'
import Wordpuzzle from '../components/Wordpuzzle'

function Assesment() {
  return (
    <div className='flex flex-row'>
        <Sidebar/>
        <div>
            <Wordpuzzle/>
        </div>
    </div>
  )
}

export default Assesment