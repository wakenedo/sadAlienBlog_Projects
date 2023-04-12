import SetupOptions from 'components/Setup/SetupOptions';
import React, { useState } from 'react'

const HeaderSteps = [
  {
    id: 1,
    name: 'Ufo',
    image: 'https://i.ibb.co/fMsbHvk/Spaceship.png',
    textTop: 'Are UFOs real?',
    linkText: 'Check here',
    link: 'https://www.google.com/search?q=are+ufos+real?&source=lmns&bih=1054&biw=2133&hl=pt-BR&sa=X&ved=2ahUKEwjJmduC1Ib9AhXGOLkGHQ65DL4Q_AUoAHoECAEQAA',
    //instruction: 'What are people saying about this?.'
  },
  {
    id: 2,
    name: 'Atomic',
    image: 'https://i.ibb.co/DpPhyBs/Atomic.png',
    textTop: 'Popcorn with atomic energy?',
    linkText: 'Check out here',
    link: 'https://knowledge.carolina.com/discipline/physical-science/the-science-of-popcorn/',
    //instruction: 'What would be the applications of this.'
  },
  {
    id: 3,
    name: 'Responsiveness',
    image: 'https://i.ibb.co/v439q9W/Responsive.png',
    textTop: 'Experts guarantee is not real!',
    linkText: 'You know the drill...',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    //instruction: 'Could it be real?'
  },
]

const items = [
  {
    id: 1,
    step: 'Step 1 - Nihil',
    title: 'Project Start',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.',
    icon: 'https://i.ibb.co/bv4v7pC/rocket-icon.png',
    additionalDetails: <SetupOptions />
  },
  {
    id: 2,
    step: 'Step 2 - Ipsum',
    title: 'Setting up the environment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.',
    icon: 'https://i.ibb.co/KhQNPqc/gear-icon.png',
    additionalDetails: <SetupOptions />,
  },
  {
    id: 3,
    step: 'Step 3 - Facilis',
    title: 'Deploying the project',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.',
    icon: 'https://i.ibb.co/kXV2sp1/flags-icon.png',
    additionalDetails: <SetupOptions />,
  },
  {
    id: 4,
    step: 'Step 4 - Aperiam',
    title: 'Ready to go',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.',
    icon: 'https://i.ibb.co/fCTBSX9/code-icon.png',
    additionalDetails: <SetupOptions />,
  },
];



const DefaultSteps = () => {
  const [showDetails, setShowDetails] = useState(Array(2).fill(false));

  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };
  return (
    <div className="lg:mt-4 ">
      <div className="bg-no-repeat bg-[url(https://i.ibb.co/dcg2tkd/space2.jpg)] bg-[#FDFFA6] h-full content  py-4 px-2 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-4 lg:px-4 xl:mb-8 ">
        <div className=" p-4 h-full xl:mt-0 mt-0 m-auto text-justify">
          <div className="bg-[#6590FF] p-0.5 lg:min-h-[215px]">
            <div className="p-2 flex justify-around text-center">
              {HeaderSteps.map((step) => {
                return (

                  <div key={step.id} className="w-[250px] h-[290px] shadow flex-col ">
                    <div className="px-10 pt-5">
                      <img alt="github" src={step.image} className="" />
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-slate-600 uppercase font-semibold">{step.name}</p>
                    </div>
                    <div>
                      <span className="font-normal text-xs tracking-wide text-[#FDFFA6] ">
                        {step.textTop}
                      </span>
                    </div>
                    <div>
                      <a href="https://github.com/" className="hover:text-[#0A4EFF] underline font-normal text-xs tracking-wide text-[#FDFFA6] ">
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
              <div className="container mx-auto flex flex-col rounded-b-lg p-6 bg-[#FDFFA6]  border-2 border-[#6590FF] shadow">
                {items.map((step, index) => (
                  <div key={index}>
                    <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 ml-30 lg:space-y-0">

                      <div className="flex items-center justify-center absolute ">
                        <img src={step.icon} alt={step.title} className="w-16 h-16 text-slate-600  " />
                      </div>
                      <div className="flex flex-col justify-center max-w-3xl  text-slate-600 text-center col-span-full lg:col-span-3 lg:text-left">
                        <div>
                          <button
                            className="mt-4 bg-transparent hover:text-slate-900 font-extrabold text-slate-600 py-2 px-4 absolute right-[29rem] rounded-lg  "
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
                          <div className="ml-[7.5rem] mt-2  p-4 rounded-lg w-full">
                            ''
                          </div>
                        )}
                      </div>


                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>

  )
}

export default DefaultSteps