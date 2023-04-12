import React from 'react'

const DefaultButtons = () => {
  return (
    <div>
      <a href='/' className='w-80 items-center mx-auto'>
        <button type="button" className={`py-2 px-4  bg-slate-400 hover:bg-slate-600 font-thin text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 `}>
          Saiba Mais
        </button>
      </a>
      <div className="bg-slate-600 rounded-b-lg shadow">
        <h3 className=" text-2xl font-semibold tracking-tight uppercase text-slate-900 p-0.5">
          <a href="/" className="px-[0.35rem] hover:text-slate-600 hover:bg-slate-400 hover:rounded-b-md">
            10 steps to get rich without working!
          </a>
        </h3>
      </div>
      <div className="bg-[#FDFFA6] rounded-b-lg shadow">
        <h3 className=" text-2xl font-semibold tracking-tight uppercase text-sky-900 p-0.5">
          <a href="/" className="px-[0.35rem] hover:text-[#FDFFA6] hover:bg-[#6590FF] hover:rounded-b-md">
            10 steps to get rich without working!
          </a>
        </h3>
      </div>
    </div>
  )
}

export default DefaultButtons