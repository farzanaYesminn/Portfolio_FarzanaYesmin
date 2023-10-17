import React from 'react';
import { Jule } from '../../assets';


const Left = () => {
  return (
    <div className='w-4/8 h-full bg-bodyColor rounded-2xl'>
      {/* Upper */}
      <div className='w-full h-3/5 '>
        <img 
        src={Jule} 
        alt="My Picture" 
        className='w- h-full object-cover rounded-2xl bg-orange-200		'
        loading='priority'
        />

      </div>

      {/* lower */}
      <div className='w-full h-2/5 '></div>

      
        
    </div>
  )
}

export default Left