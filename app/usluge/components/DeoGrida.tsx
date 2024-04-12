'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
function DeoGrida({ h, p, img, d }: { h: string, p: string, img: StaticImageData, d: number }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{ delay: d }}
            className='  h-full  p-4 rounded-lg flex flex-col gap-4 items-center md:items-start justify-start group  '>
            <Image className='shadow-lg shadow-blue-200 duration-200  group-hover:scale-105 w-4/5 rounded-lg aspect-square ' src={img} alt={h}></Image>
            <h3 className='text-gray-800 font-bold text-xl '>{h}</h3>
            <p className='text-sm md:text-start text-center text-gray-500'>{p} </p>
        </motion.div>
    )
}

export default DeoGrida