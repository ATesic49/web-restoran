import Image from 'next/image'
import React from 'react'
import svg from '@/public/imgs/hero.png'
import heroBg from '@/public/imgs/heroBg.jpeg'
import bgbg from '@/public/imgs/bggb.jpeg'
import { ImageResponse } from 'next/server'
function Hero() {
  return (
    <div className='flex bg-gray-100 flex-col md:flex-row gap-8  md:min-h-[100vh] justify-between items-center p-8 pt-16 md:p-16 relative'>

      <div className='flex flex-col justify-center  items-start gap-4 '>
        <h1 className='text-gray-950 text-3xl md:text-6xl   md:max-w-[8em] font-bold '>Podigni svoj Restoran na viši nivo.</h1>
        <p className='text-gray-500  font-normal text-sm md:text-base md:max-w-[20em]'>Naše istraživanje je pokazalo da čak oko 80% najpopularnijih restorana pripisuju veliki deo svoga uspeha izgradnji profesionalnog
          websajta. </p>
        <button className='bg-gradient-to-t  text-sm from-blue-500 px-2 py-1 shadow-sm  rounded-lg to-blue-400 flex justify-center items-center gap-2  text-blue-50 duration-200 hover:scale-95 focus:scale-90 shadow-blue-600  '>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 md:w-8 stroke-blue-50' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
            <path d="M10 16h6" />
            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 8h3" />
            <path d="M4 12h3" />
            <path d="M4 16h3" />
          </svg>
          Zakaži Stastanak</button>
      </div>
      <div className='flex justify-center md:w-1/2  items-center'>
        <Image className='w-2/3 ' src={svg} alt=''></Image>
      </div>

    </div>
  )
}

export default Hero