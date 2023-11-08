import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { getAdvice } from '../../services/advice.service'

function Container() {

  const [advice, setAdvice] = useState('')

  const getData = async () => {
    try {
      let response = await getAdvice();
      if (response) {
        setAdvice(response);
      } 
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
};

useEffect(() => {
  getData();
}, []);


  return (
    <div className='relative bg-DarkGrayishBlue lg:w-[38vw] w-11/12 min-h-1/2 lg:min-h-45%  rounded-xl flex flex-col items-center justify-between py-12 gap-10 px-10 lg:gap-8 font-Manrope'>
      <h1 className='text-NeonGreen uppercase text-xs lg:text-sm font-extrabold tracking-[.25em] lg:tracking-[0.35em]'>{advice ? `Advice #${advice.slip.id}` : 'Loading...'}</h1>
      <p className='text-LightCyan font-extrabold text-3xl lg:text-3xl text-center'>
      {advice ? `"${advice.slip.advice}"` : 'Loading...'}
      </p>
      <img className='lg:hidden' src="assets/pattern-divider-mobile.svg" alt="mobile-divider" />
      
      <img className='lg:flex hidden' src="assets/pattern-divider-desktop.svg" alt="desktop-divider" />
    <Button onClick={getData}/>
    </div>
  )
}

export default Container