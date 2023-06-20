import React from 'react'
import { navData } from "../../data"
import { Link } from 'react-scroll'

const NavMobile = ({ toggle, setToggle }) => {
  return (
    <div > 
      
      <ul className='flex flex-col gap-8 text-white text-2xl  mb-32 z-100'>
        {navData.items.map((item, index) => {
          return (
            <li key={index} className='flex items-center gap-4 cursor-pointer'>
              <Link
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setToggle(!toggle)}
                className='text-white hover:text-yellow-hover transition duration-500'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavMobile
