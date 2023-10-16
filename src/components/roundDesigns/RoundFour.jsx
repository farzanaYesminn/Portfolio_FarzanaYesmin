import React from 'react'

const RoundFour = () => {
  return (
    <div>
        <div className='w-96 h-96 absolute bottom-0 -right-10 animate-spin-slow'>
        <div className='w-18 h-18 rounded-full bg-designColor absolute top-0 blur-xl'></div>
        <div className='w-24 h-24 rounded-full bg-green-300 absolute -bottom-10 left-16 blur-2xl'></div>
        <div className='w-18 h-18 rounded-full bg-orange-300 absolute top-32 -right-10 blur-2xl'></div>
        </div>
    </div>
  )
}

export default RoundFour