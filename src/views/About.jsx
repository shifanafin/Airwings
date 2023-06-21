import React from "react";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";
import { aboutData } from "../data";

const About = () => {
  const { heading, description, lists } = aboutData;
  return (
    <div id="about" className="">
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <div className="pt-32 ">
        <div className="mx-auto w-5/6 ">
         
            <div>
              <h1 className="text-4xl font-bold text-blue-main   ">ABOUT</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          
          <div className="sm:flex   items-center justify-center">
            <div className="sm:flex mx-auto    ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className=" sm:basis-2/5 pt-16"
              >
                <img src={about} alt="about_image" />
              </motion.div>

              <div className="flex  basis-4/5 items-start sm:mt-0 xs:mt-6 justify-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="basis-4/5 mx-auto "
                >
                  {/* heading and paragraph */}

                  <div>
                    <h1 className="xs:text-3xl sm:text-5xl text-yellow-main">
                      {heading}
                    </h1>
                  </div>
                  <div>
                    <p className="sm:text-start">{description}</p>
                  </div>
                  <div className="flex w-4/5 mx-auto mt-4">
                    <ul className=" flex flex-col gap-4 text-md">
                      {lists.map((item, index) => (
                        <motion.li
                          initial={{ x: 20 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.3 }}
                          className="list-disc"
                          key={index}
                        >
                          <motion.span
                            initial={{ x: 20 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                          >
                            {item}
                          </motion.span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
