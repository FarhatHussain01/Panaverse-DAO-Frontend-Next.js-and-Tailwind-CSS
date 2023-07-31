'use client';

import { useTheme } from 'next-themes'
import { BiBell } from 'react-icons/bi'
import {FiMoon, FiSun} from 'react-icons/fi'

const NavDarkTheme = () => {

  const {systemTheme ,theme , setTheme}= useTheme()

  let currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className='flex font-bold text-xl items-center gap-x-4'>
         <BiBell></BiBell>
         <span className=' -mt-1'>|</span>

{
  currentTheme === "dark" ? ( <FiSun onClick={()=>setTheme("light")}></FiSun>) 
   : (<FiMoon onClick={()=>{setTheme("dark")}}></FiMoon>)
}
         {/* <FiMoon></FiMoon>
         <FiSun></FiSun> */}
    </div>
  )
}

export default NavDarkTheme
