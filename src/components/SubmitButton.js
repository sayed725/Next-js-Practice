
"use client"
import React from 'react'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {

    const { pending } = useFormStatus()




  return (
   <Button type="submit" disabled={pending}  className='rounded-md mt-5'>
    {pending ? "Creating..." : "Create Member"}
   </Button>
  )
}

export default SubmitButton