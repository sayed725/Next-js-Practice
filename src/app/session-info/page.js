
"use client";
import { useAuth, useUser } from '@clerk/nextjs'
import React from 'react'

const SessionInfoPage = () => {


    const {isSignedIn, userId, sessionId} = useAuth()


    const userInfo = useUser()

    // console.log("User Info:", userInfo);


    // console.log("Auth Info:", authInfo);






  return (
    <div className='min-h-screen py-16 text-center'>
        <h1 className='text-3xl font-bold py-10'>Session Information</h1>

        <p className='text-lg'></p>
        
    </div>
  )
}

export default SessionInfoPage