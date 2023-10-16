import React from 'react'

const RoundTwo = () => {
  return (
    <div className='w-[500px] h-[500px] absolute bottom-0 right-32'><div className='w-full h-full relative bottom-0 right-0 animate-spin-slow'>
    <div className='w-40 h-40 rounded-full bg-orange-300 absolute top-0 blur-xl'></div>
    <div className='w-24 h-24 rounded-full bg-lime-600 absolute -bottom-10 left-16 blur-2xl'></div>
    <div className='w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl'></div>

  </div></div>
  )
}

export default RoundTwo