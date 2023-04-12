import React from 'react'

const CreatorLogo = () => {
  return (
    <div className=" p-4 lg:ml-[42%]">
      <div className="text-sm ">
        <p>Created by</p>
      </div>
      <a href="/">
        <img alt="creator" src="https://i.ibb.co/fk6ccsH/logo.png" className="h-[200px] w-[300]" />
      </a>
    </div>
  )
}

export default CreatorLogo