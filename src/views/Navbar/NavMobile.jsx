import React from 'react'
import {navData} from "../../data"

const NavMobile = (toggle,setToggle) => {
  return (
    <div> 
<ul  className='flex flex-col  gap-8 text-white text-2xl  mb-32'>
  {navData.items.map((index,item)=>{
    return (
      <li key={index.name} className='flex items-center gap-4'>
        <a href={index.href}
       onClick={() => setToggle(!toggle)}
         className='text-white hover:text-yellow-hover transition duration-500'>
          {index.name}
        </a>
      </li>
    )
  })}


  
</ul>
      
    </div>
  )
}

export default NavMobile
