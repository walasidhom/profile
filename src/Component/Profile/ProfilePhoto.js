import React from 'react';

import profileImg from './profilePhoto.webp';


const ProfilePhoto = () => {
  return (
    <div className='div--center'><img
      src={profileImg}
      className='img--profile'
      alt='profile'
      height='100%'
      width='150px'/></div>
  )
}

export default ProfilePhoto