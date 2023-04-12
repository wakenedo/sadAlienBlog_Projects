const Values = [
  {
    id: '1',
    title: 'Powerful CMS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue. Phasellus maximus sit amet neque vel eleifend. Donec dapibus augue non nibh iaculis suscipit. Sed vel semper nisl. Donec finibus urna non felis bibendum pulvinar. Ut laoreet euismod dui non pharetra.',
    image: 'https://i.ibb.co/fMsbHvk/Spaceship.png'
  },
  {
    id: '2',
    title: 'Easy to use Components',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue. Phasellus maximus sit amet neque vel eleifend. Donec dapibus augue non nibh iaculis suscipit. Sed vel semper nisl. Donec finibus urna non felis bibendum pulvinar. Ut laoreet euismod dui non pharetra.',
    image: 'https://i.ibb.co/DpPhyBs/Atomic.png'
  },
  {
    id: '3',
    title: 'Built in Responsiveness',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue. Phasellus maximus sit amet neque vel eleifend. Donec dapibus augue non nibh iaculis suscipit. Sed vel semper nisl. Donec finibus urna non felis bibendum pulvinar. Ut laoreet euismod dui non pharetra.',
    image: 'https://i.ibb.co/v439q9W/Responsive.png'
  },
]


export const DefaultSectionTopics = () => {
  return (
    <div className=" lg:mt-12  mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#FDFFA6] rounded-b-lg pb-16 lg:mb-32">
      <div className="pt-10">
        <p className=" text-5xl  mb-20 font-semibold tracking-tight uppercase  leading-6 text-slate-600">Why use sAL?</p>
      </div>

      <div className="max-w-4xl m-auto mb-20">
        {Values.map((value) => {
          return (
            <div key={value.id} className="lg:flex  lg:items-center ">
              <div className="flex-col ">
                <div className="items-center mx-[24rem]">
                  <img src={value.image} alt='value1' className=" lg:mr-10 ml-32 lg:ml-0 lg:mt-10 mt-6" />
                </div>

                <div className="mt-10 flex-col">
                  <h1 className="tracking-tight text-slate-600 uppercase font-semiboçd lg:text-left text-center text-2xl">{value.title}</h1>
                  <dd className="xl:mt-2  font-light tracking-tight text-justify text-slate-600 ">
                    {value.description}
                  </dd>
                </div>
                <>
                  <img alt='sun' src='https://i.ibb.co/vJ7fCVH/Hero-Values-Separator-Icon.png' className='absolute h-6 w-5 ml-[23%] mt-[3.05rem] ' />
                  <hr className="mb-10 mt-16 mx-[11.5rem] border-slate-600 relative" />
                </>
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}