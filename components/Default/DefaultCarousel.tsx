import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  {
    id: 1,
    url: 'https://i.ibb.co/dcg2tkd/space2.jpg',
    text: 'Ready to Deploy',
    subText: 'Soluções de sustentabilidade apropriadas para o seu negócio'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/T0HxqQs/space1.jpg',
    text: 'Custom Schemas',
    subText: 'A ferramenta ideal para quem deseja mapear emissões de gases de efeito estufa em pequenas e médias empresas. Conheça.'
  },
  {
    id: 3,
    url: 'https://i.ibb.co/dcg2tkd/space2.jpg',
    text: 'Easy to use Components',
    subText: 'A ferramenta ideal para quem deseja mapear emissões de gases de efeito estufa em pequenas e médias empresas. Conheça.'
  },

];

const DefaultCarousel = () => {
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
    <div className='max-w-full h-[780px] w-full m-auto pt-4 pb-8  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      >
        <div>
          <div className="pt-80">
            <p id={slides[currentIndex].url} className="text-center uppercase text-5xl text-slate-100 shadow-current font-semibold tracking-tighter"> {slides[currentIndex].text}</p>
          </div>
          <div>
            <p id={slides[currentIndex].url} className="text-center text text-xl text-slate-100"> {slides[currentIndex].subText}</p>
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

export default DefaultCarousel
