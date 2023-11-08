import React from 'react'
import Button from '../Button/Button'

function Container() {
  return (
    <div className='relative bg-DarkGrayishBlue lg:w-[38vw] w-11/12 min-h-1/2 lg:min-h-45% lg:h-[45vh] rounded-xl flex flex-col items-center py-12 gap-10 px-10 lg:gap-8 font-Manrope'>
      <h1 className='text-NeonGreen uppercase text-xs lg:text-sm font-extrabold tracking-[.25em] lg:tracking-[0.35em]'>Advice #117</h1>
      <p className='text-LightCyan font-extrabold text-3xl lg:text-3xl text-center'>
        " It is easy to sit up and take notice, what's difficult is getting up and taking action."
      </p>
      <img className='lg:hidden' src="assets/pattern-divider-mobile.svg" alt="mobile-divider" />
      
      <img className='lg:flex hidden' src="assets/pattern-divider-desktop.svg" alt="desktop-divider" />
    <Button/>
    </div>
  )
}

export default Container