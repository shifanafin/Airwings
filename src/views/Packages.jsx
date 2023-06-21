import React from "react";
import { PackagesData } from "../data";

const Packages = () => {
  const { title, items } = PackagesData;

  return (
    <div id="packages" className=" sm:w-full ">
      &nbsp;
       &nbsp;
        &nbsp;
         &nbsp;
      <div className="pt-32  ">
        <div className="mx-auto w-5/6 ">
          <div>
            <h1 className="text-4xl font-bold text-blue-main   ">{title}</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="flex xs:flex-col sm:flex-row gap-5 justify-between ">
            {PackagesData.Item.map((item, id) => {
              return (
                <div
                key={id} 
                className="w-full max-w-sm p-3 mt-4  bg-white border border-gray-300 rounded-lg shadow sm:p-8 ">
                  <h5 className="mb-4 text-xl font-medium text-gray-main ">
                    Standard plan
                  </h5>
                  <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">₹</span>
                    <span className="text-5xl font-extrabold tracking-tight">
                      {item.rate}
                    </span>
                    <span className="ml-1 text-xl font-normal text-gray-500 ">
                      /month
                    </span>
                  </div>
                  {/* <!-- List --> */}
                  <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-yellow-main "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 ">
                        {item.peoples}
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-yellow-main "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 ">
                        {item.class}
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-yellow-main "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 ">
                        {item.title}
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-yellow-main "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 ">
                        {item.times}
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-yellow-main "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 ">
                        {item.time}
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-yellow-main "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                         clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 ">
                        {item.help}
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-white bg-blue-main hover:bg-blue-hover transition-all duration-500  focus:ring-4 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                  >
                    Choose plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
