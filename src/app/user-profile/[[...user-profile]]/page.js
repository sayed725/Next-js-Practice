import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const UserProfilePage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>

        <UserProfile/>

    </div>

  )
}

export default UserProfilePage