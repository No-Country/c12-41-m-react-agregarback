import React from 'react'

const Home = () => {
  return (
    
       <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-[#333333]">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Accesibilidad y 
            <br className="hidden md:block" />
            cuidado de su dinero{' '}
            
          </h2>
         
         
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FBB53F] hover:bg-orange-400 focus:shadow-outline focus:outline-none"
            >
              Crear cuenta 
            </a>
            
            <a
              href="/"
              aria-label=""
              className="bg-transparent inline-flex justify-center hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg  h-12 items-center  px-6 border border-yellow-300 hover:border-transparent"
            >
              Iniciar sesión
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
