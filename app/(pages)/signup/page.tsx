import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Signup here.
      <p>Already have an account? <Link href='/login'>Login instead.</Link></p>
    </div>
  )
}

export default page
