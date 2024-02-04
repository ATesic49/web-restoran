import Image from 'next/image'
import React from 'react'
import svg from '@/public/svgs/hero.svg'
function Hero() {
  return (
    <div className='flex justify-between items-centers p-16 bg-orange-200'>
      <div className='flex flex-col justify-start px-8 py-16 items-start gap-4 '>
        <h1 className='text-gray-900 text-4xl md:text-6xl max-w-[8em] font-bold '>Lorem Ipsum Dolor.</h1>
        <p className='text-gray-500 text-lg max-w-[20em]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, eligendi!</p>
      </div>
      <div className='flex justify-center items-center '>
        <Image src={svg} alt=''></Image>
      </div>
      <div></div>
    </div>
  )
}

export default Hero