import React from 'react'
import Sidebar from '../components/Sidebar'
import Wordpuzzle from '../components/Wordpuzzle'
import Compare from '../components/Compare'
// import Wordpuzzle from '../components/Wordpuzzle'
import Sound from '../components/Sound'

function Assesment() {
  return (
    <div className='flex flex-row'>
        <Sidebar/>
        <div className='w-full flex justify-center items-center'>
            <Wordpuzzle/>
            <Compare/>
            <Sound/>
        </div>
    </div>
  )
}

export default Assesment