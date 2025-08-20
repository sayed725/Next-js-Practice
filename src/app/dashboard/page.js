
import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const DashboardPage = async() => {


    const {sessionId, userId} = await auth()


    const user = await currentUser()

    // console.log("User:", user);





//    console.log("Session ID:", sessionId);
//    console.log("User ID:", userId);






  return (
    <div className='min-h-screen py-16 text-center'>

        <h1 className='text-3xl font-bold py-10'>This is the DashboardPage</h1>

        <p className='text-lg'>Welcome, {user ? (user.firstName + user.lastName) : "Guest"}!</p>




    </div>
  )
}

export default DashboardPage