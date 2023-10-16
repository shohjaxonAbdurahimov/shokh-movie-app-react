import React from 'react'
import {FaSun , FaMoon} from 'react-icons/fa6'
import { useThemeContext } from '../hooks/useThemeContext'



const colors = ["#F5EEC8","#363062" , "#0802A3"]


function ColorContainer() {
const {changeColor , theme , changeTheme } = useThemeContext()
const seNewTheme = ()=>{
   const newTheme = theme =="dark" ? "light":"dark"
    changeTheme( newTheme)
document.documentElement.setAttribute('data-theme' , theme)
}




  return (
    <div className='grid-cols-3 my-5 md:grid-cols-4 lg:grid-cols-6 align-element mx-auto flex justify-between'>
<div onClick={seNewTheme} className=' text-2xl cursor-pointer'>
{theme == "light" ? <FaSun/> : <FaMoon/> }

</div>

<div className="flex items-center gap-4  ">
    {colors.map((color)=>{
        return <span key={color} className=' dark h-7 w-7 rounded-full cursor-pointer ' style={{backgroundColor : color }} onClick={()=>changeColor(color )} ></span>
    })}
</div>


    </div>
  )
}

export default ColorContainer