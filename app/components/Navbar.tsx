import Image from 'next/image'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='bg-[#12a594] dark:bg-[]'>
        <Image alt={'emblem'} src={'/emblem.png'} width={100} height={100} />
        <ThemeToggle/>
    </div>
  )
}

export default Navbar