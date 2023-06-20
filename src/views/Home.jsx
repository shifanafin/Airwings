import React from "react";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
import { heroData } from "../data";

const Home = () => {
  const {title,paragraph,btnText} = heroData
  return (
    <div>
    <div div id="home" className="pt-36 ">
      <div className="sm:flex mx-auto w-5/6  items-center justify-center ">
        <div className=" sm:basis-4/5 ">
      
          {/* heading and paragraph */}
         
            <motion.div
             className="sm:-mt-20"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -100 },
               visible: { opacity: 1, x: 0 },
             }}>
             
               
                  <h1  className="xs:text-7xl md:text-9xl text-yellow-main">
                {title}
              </h1>

             
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mt-4  italic sm:text-start">
                <span className="text-xl font-bold text-yellow-main ">"</span>{paragraph}
               
                <span className="text-xl font-bold text-yellow-main">"</span>
              </p>
            </motion.div>
       
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-6 flex items-center justify-start"
          >
            <button className="rounded-md bg-yellow-main px-10 py-2 text-white font-medium">
              {btnText}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-8  flex basis-3/5 justify-center sm:ml-20 sm:justify-items-end"
        >
          <img src={hero} alt="Airwings_image" />
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Home;
