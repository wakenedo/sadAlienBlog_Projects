const Values = [
  {
    id: '1',
    title: 'Powerful CMS',
    description: 'SanityIO CMS is a powerful content management system that has gained immense popularity among developers. One of the reasons for its success is its ability to handle complex data structures with ease. With SanityIO, you can define your data schemas using a simple yet powerful language called Sanity Schema, which provides a lot of flexibility and makes it easy to work with structured content.',
    description2: 'SanityIO also utilizes GraphQL, a powerful query language for APIs, to enable developers to retrieve data in a flexible and efficient manner. GraphQL allows developers to specify exactly what data they need from the API, and the API returns only that data, making it faster and more efficient than traditional REST APIs. With SanityIO, you can easily create and expose a GraphQL API for your data, making it easy to consume and work with the content. In short, SanityIO and GraphQL together make a powerful combination that can handle complex data structures with ease, making it a go-to choice for developers building content-heavy applications.',
    image: 'https://i.ibb.co/fMsbHvk/Spaceship.png'
  },
  {
    id: '2',
    title: 'Easy to use Components',
    description: 'When it comes to building web applications with Next.js and Sanity.io, componentization and styling are key considerations. Next.js, as a React-based framework, prioritizes componentization, breaking down user interfaces into modular, reusable components that can be developed and tested independently. This makes it easier to maintain and scale complex applications over time. Furthermore, Next.js integrates seamlessly with styling solutions such as Tailwind CSS, which provides a comprehensive set of pre-defined styles that can be easily implemented within Next.js components.',
    description2: 'The use of Tailwind classes in Next.js allows developers to quickly and intuitively style their components without the need for complex CSS stylesheets. Another significant advantage of using Tailwind CSS is that it does not add significant weight to the bundle size of the application, which is important for maintaining fast load times and a positive user experience. Overall, the combination of Next.js, Sanity.io, and Tailwind CSS provides a powerful toolkit for building dynamic and engaging web applications.',
    image: 'https://i.ibb.co/DpPhyBs/Atomic.png'
  },
  {
    id: '3',
    title: 'Built in Responsiveness',
    description: 'In addition to emphasizing componentization and integrating with styling solutions like Tailwind CSS, another key advantage of using Next.js and Sanity.io is the availability of full responsive, in-built components. These components provide a head start for developers, allowing them to rapidly build responsive user interfaces without the need for extensive custom code. This speeds up the development cycle significantly, reducing the amount of time and effort required to build complex applications.',
    description2: ' Additionally, by using these pre-built components, developers can ensure that their applications are consistent and user-friendly across different devices and screen sizes. This is particularly important in today mobile-first world, where users expect applications to be responsive and accessible on a wide range of devices. Overall, the combination of componentization, styling solutions like Tailwind CSS, and full responsive, in-built components make Next.js and Sanity.io a powerful and efficient platform for building modern, responsive web applications. Nullam felis velit, rutrum et pellentesque a, accumsan ac augue. Phasellus maximus sit amet neque vel eleifend. Donec dapibus augue non nibh iaculis suscipit. Sed vel semper nisl. Donec finibus urna non felis bibendum pulvinar. Ut laoreet euismod dui non pharetra.',
    image: 'https://i.ibb.co/v439q9W/Responsive.png'
  },
]


export const HeroSectionValues = () => {
  return (
    <div className=" lg:mt-12 lg:w-[1400px] md:w-[910px] w-[380px] md:mt-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#FDFFA6] rounded-b-lg pb-16 lg:mb-32">
      <div className="pt-10">
        <p className=" text-5xl  mb-20 font-semibold tracking-tight uppercase  leading-6 text-slate-600">Why use sAL?</p>
      </div>

      <div className="lg:max-w-4xl m-auto mb-20">
        {Values.map((value) => {
          return (
            <div key={value.id} className="lg:flex  lg:items-center ">
              <div className="flex-col ">
                <div className="items-center lg:mt-0 md:mt-50 mt-20 lg:mx-[24rem] md:mx-[24rem] mx-[8.5rem]">
                  <img src={value.image} alt='value1' className=" lg:mr-10 lg:ml-0 lg:mt-10  mt-6" />
                </div>

                <div className="mt-10 flex-col">
                  <h1 className="tracking-tight text-slate-600 uppercase font-semibold lg:text-left md:mb-1 mb-2 md:text-center text-2xl">{value.title}</h1>
                  <dd className="xl:mt-2 md:mt-2 mt-1 font-light tracking-tight text-justify text-slate-600 ">
                    {value.description}
                  </dd>
                  <dd className="xl:mt-2 md:mt-2 mt-1 font-light tracking-tight text-justify text-slate-600 ">
                    {value.description2}
                  </dd>
                </div>
                <>
                  <img alt='sun' src='https://i.ibb.co/vJ7fCVH/Hero-Values-Separator-Icon.png' className='absolute h-6 w-5 lg:ml-[23%] md:ml-[43.5%] ml-[42%] mt-[3.05rem] ' />
                  <hr className="md:mb-10 mt-16 md:mx-[11.5rem] mx-[4rem] border-slate-600 relative" />
                </>
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}