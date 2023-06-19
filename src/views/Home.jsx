import React from "react";
import hero from "../assets/hero.jpg";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <motion.div 
    
     id="home" className="gap-16 py-20 xs:h-full xs:pb-0  ">
      <div className="sm:flex mx-auto w-5/6 items-center justify-center sm:h-5/6">
        <div className="mt-8 sm:basis-4/5 sm:mt-12">
          {/* heading and paragraph */}
          <motion.div 
              className='md:-mt-20'
             initial="hidden"
             whileInView="visible"
             viewport={{once:true,amount:0.5}}
             transition={{delay:0.3,duration:0.5}}
             variants={{
                 hidden:{opacity:0, x:-100},
                 visible:{opacity:1,x:0}}}>


         
          <div>
            <h1 className="xs:text-7xl md:text-9xl text-yellow-main">
              AirWings
            </h1>
          </div>
          <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{once:true,amount:0.5}}
               transition={{delay:0.5,duration:0.5}}
               variants={{
                   hidden:{opacity:0, x:-100},
                   visible:{opacity:1,x:0}}}
          >
            <p className="mt-4  italic sm:text-start">
              <span className="text-xl font-bold text-yellow-main ">"</span> At
              AirWings, we believe that traveling should be an extraordinary
              experience. As a premier flight company, we are dedicated to
              providing our passengers with the highest level of comfort,
              safety, and exceptional service. Whether you're traveling for
              business or pleasure, we are here to make your journey seamless
              and memorable.
              <span className="text-xl font-bold text-yellow-main">"</span>
            </p>
          </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.8,duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-100},
                visible:{opacity:1,x:0}}}
           className="mt-6 flex items-center justify-start">
            <button className="rounded-md bg-yellow-main px-10 py-2 text-white font-medium">
              Contact Us
            </button>
          </motion.div>
        </div>
        
        <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once:true,amount:0.5}}
                      transition={{duration:0.5}}
                      variants={{
                          hidden:{opacity:0, x:-100},
                          visible:{opacity:1,x:0}}}
        
        className="mt-8  flex basis-3/5 justify-center sm:ml-20 sm:justify-items-end">
          <img src={hero} alt="Airwings_image" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
