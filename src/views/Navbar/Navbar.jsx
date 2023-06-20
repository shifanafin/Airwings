import React from "react";
import { useState, useEffect } from "react";
import { navData } from "../../data";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import NavMobile from "./NavMobile";
import { AnchorLink } from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isactive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { items } = navData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsActive(false);
      }
      if (window.scrollY !== 0) setIsActive(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={`${
          isactive
            ? "bg-blue-main text-white h-15 shadow-lg  "
            : " bg-white text-blue-main  "
        } fixed top-0 z-30 w-full py-6 mx-auto
      transition-all duration-100 `}
      >
        <div className="flex justify-between items-center pl-6">
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} 
          >
            <img src="" alt="Logo " />
          </Link>
          {/* on Desktop */}
          <div className="hidden sm:flex gap-5 font-semibold mr-6">
            <ul className="flex flex-row items-center justify-center mx-auto gap-8  ">
              {items.map((item, index) => {
                return (
                  <li key={index}>

                    <Link activeClass="text-yellow-main" to={item.href} spy={true} smooth={true} offset={50} duration={500} 
                     
                      className="hover:text-yellow-hover transition duration-500 cursor-pointer"
                    >
                      
                      {item.name}
                    </Link>
                    
                  </li>
                );
              })}
            </ul>
          </div>
          {/* on Mobile */}
          <div className="sm:hidden absolute right-[5%] cursor-pointer">
            {!toggle ? (
              <TiThMenuOutline
                onClick={() => setToggle(!toggle)}
                className="text-3xl  bg-blue-main text-white rounded-md  p-1 mt-2 "
              />
            ) : (
              <AiOutlineClose
                className="text-4xl  bg-blue-main text-white rounded-md  p-1 mt-12 mr-5 "
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          <div
            className={`${
              toggle ? "max-h-full" : "max-h-0"
            } sm:hidden fixed bg-blue-main w-4/6 right-3 h-full  -z-10 transition-all duration-300 bottom-0 rounded-2xl top-5 overflow-hidden 
            
    flex items-center justify-center `}
    style={{ z: toggle ? "50" : "-10" }}
          >
            <NavMobile toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
