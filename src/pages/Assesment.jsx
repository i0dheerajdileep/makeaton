import React from 'react'
import Sidebar from '../components/Sidebar'
import Wordpuzzle from '../components/Wordpuzzle'
import Compare from '../components/Compare'

function Assesment() {
  return (
    <div className='flex flex-row'>
        <Sidebar/>
        <div className='w-full flex justify-center items-center'>
            <Wordpuzzle/>
            <Compare/>
        </div>
    </div>
  )
}

export default Assesment