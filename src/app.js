import React from 'react'
import {Footer ,Blog ,Possibility ,Features ,WhatGPT3 ,Header} from './container'
import {Cta , Brand, Navbar} from './components'
import './app.css'
const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar>
          
        </Navbar>
        <Header/>
      </div>
      
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
