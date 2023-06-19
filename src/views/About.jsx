import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";
import { aboutData } from "../data";

const About = () => {
  const { heading, description, lists } = aboutData;
  return (
    <div >
      <div id="about" className="xs:py-32 sm:py-32 xs:h-full xs:pb-0">
        <div className="xs:mb-8 sm:mb-8 w-5/6 mx-auto mt-0">
          <h1 className="text-4xl font-bold text-blue-main   ">ABOUT</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="sm:flex mx-auto  w-5/6 items-center justify-center sm:h-5/6 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" sm:basis-2/5 mb-20 "
          >
            <img src={about} alt="about_image" />
          </motion.div>

          <div className="flex sm:mb-72 basis-4/5 items-start sm:mt-0 xs:mt-6 justify-start">
            <div className="basis-4/5 mx-auto ">
              {/* heading and paragraph */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className="xs:text-3xl sm:text-5xl text-yellow-main">
                  {heading}
                </h1>
              </motion.div>
              <motion.div
                className="mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="sm:text-start">{description}</p>
                
              </motion.div>
              <div className="flex w-4/5 mx-auto mt-4">
                <ul className=" flex flex-col gap-4 text-md">
                  {lists.map((item, index) => (
                    <motion.li
                      className="list-disc"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index *0.3 }}
                      key={index}
                    >
                      <motion.span
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        {item}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
