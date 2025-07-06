import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        Login here.
        <p>Dont have an account? <Link href='/signup'>Signup instead.</Link></p>
    </div>
  )
}

export default page
