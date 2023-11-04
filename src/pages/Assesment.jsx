import React from 'react'
import Sidebar from '../components/Sidebar'
// import Wordpuzzle from '../components/Wordpuzzle'
import Sound from '../components/Sound'

function Assesment() {
  return (
    <div className='flex flex-row'>
        <Sidebar/>
        <div>
            {/* <Wordpuzzle/> */}
            <Sound/>
        </div>
    </div>
  )
}

export default Assesment