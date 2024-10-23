import React from 'react'
import { UserProfile } from '@clerk/nextjs'

function Settings() {
  return (
    <div className='flex items-center justify-center h-full'>
        <UserProfile/>
    </div>
  )
}

export default Settings