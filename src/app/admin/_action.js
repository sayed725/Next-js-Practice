'use server'


import { clerkClient } from '@clerk/nextjs/server'
import { checkRole } from '../../../utils/roles'

export async function setRole(formData) {
  const client = await clerkClient()

  // Check that the user trying to set the role is an admin
  if (!checkRole('admin')) {
    console.error( 'Not Authorized' )
  }

  try {
    const res = await client.users.updateUserMetadata(formData.get('id'), {
      publicMetadata: { role: formData.get('role') },
    })
   console.log('role updated to ', res.publicMetadata)
  } catch (err) {
    console.error('error updating role', err)
  }
}

export async function removeRole(formData) {
  const client = await clerkClient()

  try {
    const res = await client.users.updateUserMetadata(formData.get('id'), {
      publicMetadata: { role: null },
    })
     console.log('role removed to ', res.publicMetadata)
  } catch (err) {
    console.error('error updating role', err)
  }
}