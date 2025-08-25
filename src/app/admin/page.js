


import React from 'react'
import { checkRole } from '../../../utils/roles'
import { redirect } from 'next/navigation'

const AdminDashboard = async() => {




    const isAdmin = await checkRole('admin')
  if (!isAdmin) {
    redirect('/')
  }











  return (
    <div className='text-center min-h-screen  p-24'>
        <h1 className='text-3xl font-bold'>ADMIN DASHBOARD PAGE</h1>
    </div>
  )
}

export default AdminDashboard