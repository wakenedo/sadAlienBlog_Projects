import React, { useState } from 'react';

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface LogosProps {
  logos?: Logo[];
}

const logos: Logo[] = [
  {
    id: 1,
    alt: 'AWS',
    src: 'https://cdn.iconscout.com/icon/free/png-256/aws-3215369-2673787.png'
  },
  {
    id: 2,
    alt: 'Google Cloud',
    src: 'https://cdn.iconscout.com/icon/free/png-256/google-cloud-2038785-1721670.png'
  },
  {
    id: 3,
    alt: 'Azure',
    src: 'https://cdn.iconscout.com/icon/free/png-256/azure-1868965-1583140.png'
  },
  {
    id: 4,
    alt: 'Digital Ocean',
    src: 'https://cdn.iconscout.com/icon/free/png-256/digital-ocean-3620821-3030139.png'
  },
  {
    id: 5,
    alt: 'Heroku',
    src: 'https://cdn.iconscout.com/icon/free/png-256/heroku-2-569467.png'
  },
  {
    id: 6,
    alt: 'Heroku',
    src: 'https://cdn.iconscout.com/icon/free/png-256/heroku-2-569467.png'
  },
  {
    id: 7,
    alt: 'Heroku',
    src: 'https://cdn.iconscout.com/icon/free/png-256/heroku-2-569467.png'
  },
  // add more SVG objects here as needed
];

const DefaultPartnersLogos: React.FC<LogosProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsToShow = isExpanded ? logos : logos.slice(0, 6);

  return (
    <div className="max-w-7xl mt-8 mx-auto">

      <section className="p-6 pt-2 bg-slate-600 rounded-lg  ">
        <p className=" text-2xl  mb-2 font-semibold tracking-tight uppercase text-slate-100">
          Partners
        </p>
        <hr className="mb-7 border-slate-100" />
        <div className="flex flex-wrap justify-center mx-auto">
          {itemsToShow.map((logo) => (
            <div key={`logo-${logo.id}`} className="w-fit mx-2 my-2">
              <img src={logo.src} alt={logo.alt} className="lg:h-44" />
            </div>
          ))}
          {logos.length > 4 && (
            <div className="w-full text-center mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-600 transition-all duration-200 delay-75"
              >
                <img
                  alt={isExpanded ? 'arrow-up' : 'arrow-down'}
                  src={isExpanded ? 'https://i.ibb.co/M5pDfkJ/up-arrow-white.png' : 'https://i.ibb.co/4tJ4J7G/down-arrow-white.png'}
                  className="h-4 w-6 mr-2"
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DefaultPartnersLogos;