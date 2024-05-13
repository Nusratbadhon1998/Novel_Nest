import React from 'react'
import Slider from './Slider'

function Hero() {
  return (
    <>
  {/* Section: Design Block */}
  <section className="mb-40">
 
    {/* Background image */}
    {/* <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[500px]"></div> */}
    <Slider></Slider>
    <div className="w-100 z-50 relative mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
      <div className="text-center">
        <div className="block rounded-lg   px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-beige  backdrop-blur-lg shadow-black/20 md:py-16 md:px-12 mt-[-170px] ">
          <h1 className="mt-2 mb-16 text-5xl  font-bold tracking-tight md:text-6xl xl:text-7xl">
          Choose Your Book! <br />
            <span className="text-yellow text-2xl font-thin">Books That Really Matter!! </span>
          </h1>
          <a
            className="mb-2 inline-block rounded bg-black px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-none hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-none focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:border-black bg-none md:mr-2 md:mb-0"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            href="#"
            role="button"
          >
            Discover Books
          </a>
          <a
            className="inline-block bg-yellow text-black rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-none focus:text-none focus:outline-none focus:ring-0 active:text-primary-700 "
            data-te-ripple-init=""
            data-te-ripple-color="light"
            href="#!"
            role="button"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Hero