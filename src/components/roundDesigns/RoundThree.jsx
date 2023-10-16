import React from 'react'

const RoundThree = () => {
  return (
    <div>
        <div className='w-96 h-96 absolute bottom-0 left-18 animate-spin-slow'>
        <div className='w-32 h-32 rounded-full bg-orange-300 absolute top-0 blur-xl'></div>
        <div className='w-24 h-24 rounded-full bg-lime-600 absolute -bottom-10 left-16 blur-2xl'></div>
        <div className='w-28 h-28 rounded-full bg-orange-300 absolute top-32 -right-10 blur-2xl'></div>
        </div>
    </div>
  )
}

export default RoundThree