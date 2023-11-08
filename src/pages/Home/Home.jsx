
import React from 'react'
import Container from '../../components/Card/Container'

function Home() {
  return (
    <div className='bg-DarkBlue flex justify-center items-center h-screen'>
        <Container/>
        <div className="flex flex-col montserrat-500 text-center text-sm text-neutral-50 pb-5 lg:pl-5 lg:absolute lg:left-0 lg:bottom-0">
        <div>
        Challenge by <a className="underline text-super-dark-cyan" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        </div>
        <div>Coded by <a className="underline italic" href="https://github.com/CalderonCodes">Christopher Calderon</a>.</div>
        </div>
    </div>
  )
}

export default Home