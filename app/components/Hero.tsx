import Image from 'next/image'
import React from 'react'
import svg from '@/public/imgs/logo.png'
import heroBg from '@/public/imgs/heroBg.jpeg'
import bgbg from '@/public/imgs/bggb.jpeg'
import Link from 'next/link'
function Hero() {
  return (
    <div className='heroj flex bg-gray-950 flex-col md:flex-row md:gap-8  md:min-h-[100vh] justify-between items-center p-8 pt-16 md:p-16 relative z-10'>
      <div className='absolute inset-0 grid grid-cols-[repeat(20,128px)] md:grid-cols-[repeat(20,256px)] md:divide-x-2 divide-x divide-gray-800 -z-10 overflow-hidden'>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
        <div className='w-full h-full'></div>
      </div>

      <div className='flex flex-col justify-center mt-8 items-start gap-8 '>
        <h1 className='text-gray-100 text-3xl md:text-6xl   md:max-w-[8em] font-bold '>Podigni svoj web sajt na viši nivo.</h1>
        <p className='text-gray-500  font-normal text-sm md:text-base md:max-w-[20em]'>Čak 80% najpopularnijih restorana pripisuju veliki deo svoga uspeha izgradnji profesionalnog
          websajta. </p>
        <Link href='/kontakt' className='bg-gradient-to-t  text-sm from-blue-500 px-2 py-1 shadow-sm  rounded-lg to-blue-400 flex justify-center items-center gap-2  text-blue-50 duration-200 hover:scale-95 focus:scale-90 shadow-blue-600  '>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 md:w-8 stroke-blue-50' width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
            <path d="M10 16h6" />
            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 8h3" />
            <path d="M4 12h3" />
            <path d="M4 16h3" />
          </svg>
          Zakaži Stastanak</Link>
      </div>
      <div className='flex justify-center md:w-1/2 w-5/6 aspect-square relative items-center'>
        {/* <Image priority className='md:w-5/6 w-2/3  ' src={svg} alt=''></Image> */}
        <svg xmlns="http://www.w3.org/2000/svg" className=' fill-gray-100 absolute blur-lg top-2 -left-8 opacity-20' version="1.1" x="0" y="0" viewBox="0 0 20 20" ><g><path d="M14.4 4.4 13 5.8l4.2 4.2-4.2 4.2 1.4 1.4L20 10zM5.6 4.4 0 10l5.6 5.6L7 14.2 2.8 10 7 5.8zM9.989 16.184l-1.972-.328 2-12.03 1.972.328z" fill="#ffffff" opacity="1" data-original="#ffffff"></path></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className=' fill-gray-100 ' version="1.1" x="0" y="0" viewBox="0 0 20 20" ><g><path d="M14.4 4.4 13 5.8l4.2 4.2-4.2 4.2 1.4 1.4L20 10zM5.6 4.4 0 10l5.6 5.6L7 14.2 2.8 10 7 5.8zM9.989 16.184l-1.972-.328 2-12.03 1.972.328z" fill="#ffffff" opacity="1" data-original="#ffffff"></path></g></svg>
      </div>

    </div>
  )
}

export default Hero