import Image, { StaticImageData } from 'next/image'
import React from 'react'
function Kontent({ h, p, img }: { h: string, p: string, img: StaticImageData }) {
    return (
        <div className='grid justify-between md:grid-cols-2 items-center gap-4'>
            <div className='flex flex-col gap-4 items-center  '>
                <h2 className='md:text-2xl text-xl md:-ml-2  md:mr-auto font-bold text-gray-800'>{h}</h2>
                <p className='text-gray-600  md:text-base text-center md:text-left text-sm md:w-[35em]'>{p}</p>

            </div>
            <div className='w-full h-full'>
                <Image alt={h} className='rounded-lg md:w-1/2 aspect-square mx-auto' src={img} ></Image>
            </div>
        </div>
    )
}

export default Kontent