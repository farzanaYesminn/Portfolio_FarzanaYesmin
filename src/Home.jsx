import React from 'react'
import Left from './components/home/Left'

const Home = () => {
  return (
    <div className='w-[95%] h-[95%] bg-transparent text-white z-50 flex items-start justify-between'>
        <div className='w-16 h-96 bg-bodyColor'></div>
        <div className='w-[95%] h-full bg-transparent flex items-center'>
          {/* left part start */}
          <Left/>
          {/* right part start */}
          <div className='w-8/12 h-[95%] bg-bodyColor'></div>
        </div>
    </div>
  )
}

export default Home