import React from 'react'
import RoundedOne from './components/roundDesigns/RoundedOne'
import RoundTwo from './components/roundDesigns/RoundTwo'
import RoundThree from './components/roundDesigns/RoundThree'
import RoundFour from './components/roundDesigns/RoundFour'
import Home from './Home'

const App = () => {
  return (
  <>
  <div className='w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden'>

    <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
      <Home/>
    </div>
    <div className='w-full h-full absolute top-0 left-0 z-10'>
      <RoundedOne/>
      <RoundTwo/>
      <RoundThree/>
      <RoundFour/>
    </div>
  </div>
  </>
  )
}

export default App