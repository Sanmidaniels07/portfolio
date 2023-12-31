import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import profilePix from '../assets/profilepix.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <br />
      <br />
    <div>
        <img src={profilePix} alt="profile" className='rounded-full w-50 h-26 mt-44' />
      </div>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        DANIEL OMOWOLE
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        I'm a Software Developer.
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m a Software developer with fullstack proficiency specialized in building exceptional digital user interfaces, 
        user experiences & web functionalities leveraging fullstack knowledge.
      </p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>      
    </div>
  </div>
  )
}

export default Home