import React from 'react'
import Button from '../Button/Button'

function Container() {
  return (
    <div className='relative bg-DarkGrayishBlue w-11/12 h-1/2 rounded-xl flex flex-col items-center justify-center gap-10 px-10 font-Manrope'>
      <h1 className='text-NeonGreen uppercase text-xs font-extrabold tracking-[.25em]'>Advice #1</h1>
      <p className='text-LightCyan font-extrabold text-3xl text-center'>
        " It is easy to sit up and take notice, what's difficult is getting up and taking action."
      </p>
      <img src="/public/assets/pattern-divider-mobile.svg" alt="mobile-divider" />
    <Button/>
    </div>
  )
}

export default Container