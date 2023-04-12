import React from 'react'

const Options = [
  {
    id: 1,
    title: 'Projects + Blog',
    text: 'Use Sanity Studio to manage your posts and projects. Here you will find a repo for a Sad Alien project with all the structure ready to use, a Studio folder with the schemas and queries for blog posts, and projects. If you followed the steps in this page you should be ready to go.',
    color: 'bg-slate-400',
    secondaryColor: 'bg-slate-600',
    buttonText: "Repo",
    buttonColor: 'bg-slate-400',
    buttonTextColor: 'text-slate-900',
    hoverButtonColor: 'hover:bg-slate-600',
    hoverTextColor: 'hover:text-slate-400',
    href: '/'
  },
  {
    id: 2,
    title: 'Clear Structure',
    text: 'This repo do not have the Studio folder or the schemas for anything, its just the structure of the project and configuration and styles. It is recommended to be used with a Sanity Studio. This way you have more freedom to write your own queries and schemas to fit your expectations.',
    color: 'bg-[#C2FFA6]',
    buttonText: "Repo",
    secondaryColor: 'bg-[#6590FF]',
    buttonColor: 'bg-[#C2FFA6]',
    buttonTextColor: 'text-[#2F580F]',
    hoverButtonColor: 'hover:bg-[#6590FF]',
    hoverTextColor: 'hover:text-[#C2FFA6]',
    href: 'https://github.com/wakenedo/sadAlienClear'
  },
]

const SetupOptions = () => {
  return (
    <div className='w-[450px]  mx-auto py-0  relative group'>

      <div className=" lg:flex items-center mx-auto justify-center ">
        <div className="lg:flex items-center space-y-24 md:space-y-0 md:flex-row justify evenly ">
          <div className="relative lg:flex ">
            {Options.map((option) => {
              return (
                <div key={option.id} className={`px-4 py-4  ${option.color} rounded-b-lg shadow lg:h-96 lg:w-3/4 mx-4 my-10`}>
                  <div className={` ${option.secondaryColor}  p-[1rem] `}>
                    <div className="text-center">
                      <p className="text-3xl lg:w-96 lg:mt-[0] tracking-tight font-semibold  mx-auto text-slate-100 uppercase">
                        {option.title}
                      </p>
                      <p className="py-14 mx-auto font-regular text-justify text-slate-100 text-base  h-[10.5rem]">
                        {option.text}
                      </p>
                    </div>
                    <div className=" items-center justify-between text-center  lg:pt-20 ">
                      <div className={`${option.buttonColor} rounded-b-lg shadow`}>
                        <h3 className={` text-2xl text-center font-semibold tracking-tight uppercase ${option.buttonTextColor} p-0.5`}>
                          <a href={option.href} className={` px-[12.15rem] ${option.hoverTextColor} ${option.hoverButtonColor} hover:rounded-b-md`}>
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

    </div >
  );
}

export default SetupOptions