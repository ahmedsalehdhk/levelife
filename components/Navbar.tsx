import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full p-6 flex justify-between items-center bg-black text-white'>
      <ul className='flex space-x-4'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/quests'>Quests</Link></li>
        <li><Link href='/rewards'>Rewards</Link></li>
      </ul>
      <div className="logo">LEVELIFE</div>
      <div className=""><Link href='/login'>Login</Link></div>
    </nav>
  )
}

export default Navbar
