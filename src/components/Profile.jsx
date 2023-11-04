import React from 'react';
import Sidebar from './Sidebar';

function Profile() {
  return (
    <div className=' w-full h-screen flex flex-row'>
    <Sidebar/>
    <div className='ml-24'>
     <h1 className='text-4xl'>User Profile</h1>
    <img
      src="profile.jpg" // Replace with the actual path to your profile picture
      alt="User Profile"
      width="200" // Set the width of the image as needed
      height="200" // Set the height of the image as needed
    />
    </div>
    </div>
  );
}

export default Profile;
