import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  {
    id: 1,
    url: 'https://i.ibb.co/DtKbdGK/Default-space-3-29a13993-3b2e-4754-a9cc-3b2a9590b8e0-1.jpg',
    text: 'Ready to Deploy',
    subText: 'Deploying your Sad Alien project is made easy with Vercel, GitHub, Sanity IO, and Next.js. Simply connect your GitHub repository to your Vercel account, and deploy your Next.js project with ease. With Sanity IO, managing your content is simplified, while Next.js allows for high-performance web application development. This integrated setup makes deploying your Sad Alien project quick and effortless, without any complicated configurations or integrations required. Get your project up and running in no time with this powerful combination of tools.'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/59R568W/Leonardo-Creative-space-high-quality-8k-resolution-1.jpg',
    text: 'Custom Schemas',
    subText: `Sad Alien also comes with its own set of custom schemas that you can use to get started with your project. But if you need to further customize the data structure or create your own content models, you can easily do so with Sanity IO's custom schema types. Their schema editor provides a user-friendly interface for defining fields, setting validation rules, and creating relationships between schema types. With this powerful combination of tools, you can quickly and easily create a custom data model that fits the specific needs of your Sad Alien project.`,
  },
  {
    id: 3,
    url: 'https://i.ibb.co/YfQxRw3/Leonardo-Creative-space-high-quality-8k-resolution-2.jpg',
    text: 'Easy to use Components',
    subText: `Sad Alien's UI system is built with Tailwind and includes easy-to-use, responsive pre-built components such as buttons, forms, and navigation menus. These components can be customized to fit your project's needs, simplifying the process of creating an intuitive and consistent user interface. The modular and reusable design of these components makes updating and making changes easy. By leveraging pre-built components and a responsive UI system, you can create a great user experience for your Sad Alien project with less effort and ensure accessibility for a wide range of users.`
  },

];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-full lg:h-[960px] md:h-[930px] h-[550px] w-full m-auto pt-4 pb-8  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      >
        <div>
          <div className=' bg-black bg-opacity-60 backdrop-blur-lg lg:mx-[40rem] md:mx-[15rem]'>
            <div className="  py-[1rem]">
              <p id={slides[currentIndex].url} className="text-center lg:text-5xl md:text-2xl text-base uppercase  text-slate-100 shadow-current font-semibold tracking-tighter"> {slides[currentIndex].text}</p>
            </div>
            <div className="lg:pb-[1rem] md:py-[1rem] py-[0.5rem] mx-4 ">
              <p id={slides[currentIndex].url} className="text-justify lg:text-xs md:text-xs text-xs   text-slate-100"> {slides[currentIndex].subText}</p>
            </div>
          </div>
        </div>

      </div>
      {slides.map((slide, slideIndex) => (
        <div key={slide.id}>
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >

          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-slate-100 cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-slate-100 cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

        </div>
      ))}
    </div>
  );
}

export default HeroCarousel
