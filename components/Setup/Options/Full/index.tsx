import React from 'react'

const Options = [
  {
    id: 1,
    title: 'sadAlien Full',
    subTitle: 'Projects + Blog',
    image: 'https://i.ibb.co/YjPTs4X/SALogo.png',
    text: 'Use Sanity Studio to manage your posts and projects. Here you will find a repo for a Sad Alien project with all the structure ready to use, a Studio folder with the schemas and queries for blog posts, and projects. If you followed the steps in this page you should be ready to go.',
    color: 'bg-[#C2FFA6]',
    buttonText: "Repo",
    secondaryColor: 'bg-[#6590FF]',
    buttonColor: 'bg-[#C2FFA6]',
    buttonTextColor: 'text-[#2F580F]',
    hoverButtonColor: 'hover:bg-[#6590FF]',
    hoverTextColor: 'hover:text-[#C2FFA6]',
    href: '/'
  },
]

const SetupOptionsFull = () => {
  return (
    <div className='w-[450px]  mx-auto py-0  relative group'>

      <div className=" lg:flex items-center mx-auto justify-center ">
        <div className="lg:flex items-center space-y-24 md:space-y-0 md:flex-row justify evenly ">
          <div className="relative lg:flex ">
            {Options.map((option) => {
              return (
                <div key={option.id} className={`px-4 py-4  ${option.color} rounded-b-lg shadow lg:h-96  mx-4 my-10`}>
                  <div className={` ${option.secondaryColor}  p-[1rem] `}>
                    <div>
                      <img src={option.image} alt="" className="w-16 absolute" />
                    </div>
                    <div className="text-center">
                      <p className="text-3xl lg:w-96 lg:mt-[0] tracking-tight font-semibold  mx-auto text-slate-100 uppercase">
                        {option.title}
                      </p>
                      <p className="text-xs lg:w-96 lg:mt-[0] tracking-tight font-semibold  mx-auto text-slate-100 uppercase">
                        {option.subTitle}
                      </p>
                      <p className="py-14 mx-auto font-regular text-justify text-slate-100 text-base  h-[10.5rem]">
                        {option.text}
                      </p>
                    </div>
                    <div className=" items-center justify-between text-center  lg:pt-20 ">
                      <div className={`${option.buttonColor} rounded-b-lg shadow`}>
                        <h3 className={` text-2xl text-center font-semibold tracking-tight uppercase ${option.buttonTextColor} p-0.5`}>
                          <a href="/" className={` px-[12.15rem] ${option.hoverTextColor} ${option.hoverButtonColor} hover:rounded-b-md`}>
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

export default SetupOptionsFull