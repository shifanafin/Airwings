import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Servicebtns, ServiceData } from "../data";

const Services = () => {
 
  const [filterImage, setFilterImage] = useState(null);
  const [activeButton, setActiveButton] = useState("all");
  const [showAllImages, setShowAllImages] = useState(false);
  useEffect(() => {
    setFilterImage(ServiceData);
  }, []);
  const handleClick = (e) => {
    let btnType = e.target.value;
    setActiveButton(btnType)
    const newFilterImage = ServiceData.filter((service) => {
      return service.value === btnType;
    });
    btnType !== "all"
      ? setFilterImage(newFilterImage)
      : setFilterImage(ServiceData);
      setShowAllImages(false);
  };
  const handleSeeMore = () => {
    setShowAllImages(true);
  };
  const styling = "w-12 h-1 rounded-sm bg-yellow-main";
 

  return (
    <div id="service" className="sm:w-full ">
   
      <div  className="pt-32">
        <div className="mx-auto w-5/6 ">
          <div>
            <h1 className="text-4xl font-bold text-blue-main   ">
              OUR SERVICES
            </h1>
          </div>
          <div className="flex flex-wrap justify-start gap-6 text-lg font-bold   cursor-pointer pt-4">
            {Servicebtns.map((item, id) => {
              const isActive = activeButton === item.value;
          const buttonClassName = isActive ?   "underline text-yellow-500"  
              : "hover:underline"
              return (
                <button
                
                  key={id}
                  value={item.value}
                  onClick={handleClick}
                  className={buttonClassName}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            <motion.div className="grid xs:grid-cols-2 sm:grid-cols-3 mt-8 gap-3 ">
              {filterImage &&
                filterImage.slice(0, showAllImages ? filterImage.length : 6).map((filterImg,id) => {
                  return (
                    <motion.div
                    key={id}
                    layout
                    initial={{opacity :0}}
                    animate={{opacity :1}}
                    exist={{opacity :0,transition:{duration:3}}}
                   
                    >
                      <ul  >
                        <li
                   
                          className="relative inline-block "
                        >
                          <div className=" absolute flex items-center justify-center  p-5 z-20 flex-col  whitespace-normal bg-blue-main text-center  text-yellow-main opacity-0 transition duration-500 hover:opacity-90 rounded-md">
                            <p className="sm:p-9 sm:mt-7">
                              {filterImg.description}
                            </p>
                          </div>
                          <div>
                            <img src={filterImg.image} alt="images"></img>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
          
          {!showAllImages && filterImage && filterImage.length > 6 && (
            <div className="mt-4 text-center">
              <button
                className="bg-blue-main rounded-md w-28 h-9 text-yellow-main"
                onClick={handleSeeMore}
              >
                show More
              </button>
            </div>
          )}

          {showAllImages && (
            <div className="mt-4 text-center">
              <button
                className="bg-blue-main rounded-md w-28 h-9 text-yellow-main"
                onClick={() => setShowAllImages(false)}
              >
                show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
