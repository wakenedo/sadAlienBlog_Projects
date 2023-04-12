import React from 'react'

const Options = [
  {
    id: 1,
    title: 'UFOs',
    text: 'Do you believe in tiny gray man running around the galaxy and messing things up? What about all the cows that goes missing every year, conspiracy or real facts.',
    color: 'bg-[#FDFFA6]',
    secondaryColor: 'bg-[#6590FF]',
    buttonText: "Yea",
    //buttonColor: 'bg-emerald-400',
    //hoverColor: 'hover:bg-emerald-800',
    href: '/'
  },
  {
    id: 2,
    title: 'Weather Balloon',
    text: 'No gray dudes running around, only good old weather balloons. Nothing to see here.',
    color: 'bg-[#FDFFA6]',
    buttonText: "Brah",
    secondaryColor: 'bg-[#6590FF]',
    //buttonColor: 'bg-sky-400',
    //hoverColor: 'hover:bg-sky-800',
    href: '/'
  },
]

const DefaultOptions = () => {
  return (
    <div className='max-w-full h-[780px] w-full m-auto py-8  relative group'>
      <div
        style={{ backgroundImage: `url(${'https://i.ibb.co/1fWrvS9/espa-o.jpgg'})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      >
        <div className="p-4 lg:flex items-center mx-auto justify-center pt-[8.5rem]">
          <div className="lg:flex items-center space-y-24 md:space-y-0 md:flex-row justify evenly ">
            <div className="relative p-4 px-4 lg:flex ">
              {Options.map((option) => {
                return (
                  <div key={option.id} className={`px-4 py-4  ${option.color} rounded-b-lg shadow lg:h-96 lg:w-3/4 mx-4 `}>
                    <div className={` ${option.secondaryColor}  p-[1rem]`}>
                      <div className="text-center">
                        <p className="text-3xl lg:w-96 lg:mt-[0] tracking-tight font-semibold  mx-auto text-slate-100 uppercase">
                          {option.title}
                        </p>
                        <p className="py-14 mx-auto font-regular  text-slate-100 text-base  h-[10.5rem]">
                          {option.text}
                        </p>
                      </div>
                      <div className=" items-center justify-between text-center  lg:pt-20 ">
                        <div className="bg-[#FDFFA6] rounded-b-lg shadow">
                          <h3 className=" text-2xl font-semibold tracking-tight uppercase text-sky-900 p-0.5">
                            <a href="/" className=" px-[24.5rem] hover:text-[#FDFFA6] hover:bg-[#6590FF] hover:rounded-b-md">
                              {option.buttonText}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultOptions

