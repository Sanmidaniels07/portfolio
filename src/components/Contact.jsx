import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]'>
      <form method='POST' action='https://getform.io/f/a38f3bf9-eab5-4183-b813-42bf5eed23ef' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink text-gray-300 '>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email -sanmidaniels07@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='bg-[#ccd6f6] my-4 p-2' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact