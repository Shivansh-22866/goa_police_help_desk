import Image from 'next/image'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { SmartphoneNfc } from 'lucide-react'
import ScreenReader from './ScreenReader'

const Navbar = () => {
  return (
    <div className='bg-blue-700 dark:bg-blue-600 p-4 flex gap-4 justify-center items-center'>
        <SmartphoneNfc />
        <ScreenReader/>
        <ThemeToggle/>
    </div>
  )
}

export default Navbar