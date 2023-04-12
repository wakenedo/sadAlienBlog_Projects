import React, { useState } from 'react'
import { HeaderSteps } from './HeaderSteps';
import { itemsFull } from './ItemsFull';
import { items } from './ItemsStepClear';


const FirstSteps = () => {
  const [showDetails, setShowDetails] = useState(Array(2).fill(false));
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };
  return (
    <div className="lg:mt-4 ">
      <div className="bg-no-repeat bg-[url(https://i.ibb.co/1XSKfGv/Default-Futuristic-alien-spacestation-on-space-1-25a14baf-263b-44f0-a01e-faf19e080e0c-1.jpg)] bg-[#FDFFA6] h-full content  py-4 px-2 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-4 lg:px-4  ">
        <div className=" p-4 h-full xl:mt-0 mt-0 m-auto text-justify">
          <div className="bg-[#6590FF] p-0.5 lg:min-h-[215px]">
            <div className="p-2 lg:flex md:flex  justify-around text-center">
              {HeaderSteps.map((step) => {
                return (

                  <div key={step.id} className="lg:w-[250px] md:w-[250px] lg:h-[290px] md:h-[290px] w-fit h-[280px]  shadow bg-[#FDFFA6] lg:mx-0 md:mx-0 mx-auto flex-col mb-10">
                    <div className="px-10 pt-5">
                      <img alt="github" src={step.image} className="lg:ml-1 lg:h-40 lg:w-40 md:h-40 md:w-40 w-40 h-40" />
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-slate-600 uppercase font-semibold">{step.name}</p>
                    </div>
                    <div>
                      <span className="font-normal lg:text-xs md:text-xs text-[0.65rem] tracking-wide text-slate-600 ">
                        {step.textTop}
                      </span>
                    </div>
                    <div>
                      <a href={step.link} className="font-normal underline  text-xs tracking-wide text-slate-600 hover:text-slate-900 ">
                        {step.linkText}
                      </a>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

          <div>
            <section>
              <div className={` mx-auto flex flex-col rounded-b-lg p-6  ${isDarkMode ? 'bg-[#94a3b8]' : 'bg-[#C2FFA6]'}  border-2 border-[#6590FF] shadow`}>
                <div className='lg:ml-[44.55rem] md:ml-[38rem] ml-[2.9rem] absolute -mt-16 z-0'>
                  <label className="inline-flex items-center rounded-md  text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <span onClick={() => setIsDarkMode(!isDarkMode)} className="w-24 text-center cursor-pointer px-4 py-2 rounded-tl-md text-slate-200 bg-slate-400 peer-checked:bg-slate-400">Clear</span>
                    <span onClick={() => setIsDarkMode(!isDarkMode)} className="w-24 text-center cursor-pointer px-4 py-2 rounded-tr-md bg-[#C2FFA6] peer-checked:bg-[#C2FFA6]">Full</span>
                  </label>
                </div>
                <div className='z-10'>
                  {isDarkMode ?
                    items.map((step, index) => (
                      <div key={index}>
                        <div className=" justify-center flex-col p-8 mx-auto space-y-8 ml-30 lg:space-y-0">

                          <div className="flex flex-col items-center justify-center absolute ">
                            <img src={step.icon} alt={step.title} className="w-16 h-16 mt-8 text-slate-600  " />
                          </div>
                          <div className="flex flex-col justify-center lg:max-w-4xl  text-slate-600 text-center col-span-full lg:col-span-3 lg:text-justify">
                            <div>
                              <button
                                className="mt-4 bg-transparent hover:text-slate-900 font-bold text-slate-600 py-2 px-4 absolute right-[30rem] rounded-lg  "
                                onClick={() => toggleDetails(index)}
                              >
                                {showDetails[index] ? "-" : "+"}
                              </button>
                            </div>
                            <div className="flex flex-col justify-center pl-28">
                              <span className="text-xs tracking-wider uppercase">{step.step}</span>

                              <span className="text-xl font-bold md:text-2xl uppercase">{step.title.replace("Step", "")}</span>
                              <span className="mt-4 font-light tracking-wide text-slate-600">
                                {step.description}
                              </span>
                            </div>
                            {showDetails[index] && (
                              <div className=" mt-2  p-4 rounded-lg w-full">
                                {step.additionalDetails}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )) :
                    itemsFull.map((step, index) => (
                      <div key={index}>
                        <div className="justify-center  p-8 mx-auto space-y-8 ml-30 lg:space-y-0">

                          <div className="flex flex-col items-center justify-center absolute ">
                            <img src={step.icon} alt={step.title} className="w-16 h-16 mt-8 text-slate-600  " />
                          </div>
                          <div className="flex flex-col justify-center max-w-4xl  text-slate-600 text-center col-span-full lg:col-span-3 lg:text-justify">
                            <div>
                              <button
                                className="mt-4 bg-transparent hover:text-slate-900 font-bold text-slate-600 py-2 px-4 absolute right-[30rem] rounded-lg  "
                                onClick={() => toggleDetails(index)}
                              >
                                {showDetails[index] ? "-" : "+"}
                              </button>
                            </div>
                            <div className="flex flex-col justify-center pl-28">
                              <span className="text-xs tracking-wider uppercase">{step.step}</span>

                              <span className="text-xl font-bold md:text-2xl uppercase">{step.title.replace("Step", "")}</span>
                              <span className="mt-4  font-light tracking-wide text-slate-600">
                                {step.description}
                              </span>
                            </div>
                            {showDetails[index] && (
                              <div className="mt-2  p-4 rounded-lg w-full">
                                {step.additionalDetails}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  {isDarkMode ? (
                    <div className="dark-content">Clear</div>
                  ) : (
                    <div className="light-content">Full</div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FirstSteps