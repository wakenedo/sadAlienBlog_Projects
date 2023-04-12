import React from 'react'

const ProjectTitle = ({ children }) => {
  return (
    <div className="xl:mt-9  lg:mt-5  lg:max-w-full max-w-full ">
      <p className=" lg:text-6xl md:text-4xl text-xl text-center mb-4 lg:mb-10 font-semibold  tracking-wide  uppercase text-slate-600">
        {children}
      </p>
    </div>
  )
}

export default ProjectTitle