import React from 'react'

const ProjectsPageTitle = ({ children }) => {
  return (
    <div className="xl:mt-9  mt-5 mx-auto max-w-7xl px-4 sm:px-6  ">
      <p className=" text-5xl  mb-2 font-thin tracking-wide uppercase text-slate-900">
        {children}
      </p>
      <hr className="mt-4 mb-6 border-sky-800" />
      <p className=" text-md  mb-2 font-thin tracking-wide uppercase text-slate-900">
        This is your studio rendered Projects Page, it's simple and easy to do it.
      </p>
    </div>
  )
}

export default ProjectsPageTitle