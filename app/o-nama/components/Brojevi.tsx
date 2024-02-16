'use client'
import React, { use, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
function Brojevi({ br, naslov, text1, text2, delay }: {
    br: number
    naslov: string
    text1: string
    text2: string
    delay: number
}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true, margin: '-20%' })
    return (

        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay }}
            className='flex flex-col gap-4'>
            <h2 className='font-bold text-xl text-gray-800'> <span className='inline-flex pl-1 rounded-full justify-center items-center bg-orange-300 text-gray-100 w-8 aspect-square mr-2'>{br}.</span>{naslov}</h2>
            <p className='text-sm ml-10 text-gray-600 max-w-[20em]'>{text1}
                <span className='block h-2'></span>
                {text2}
            </p>
        </motion.div>
    )
}

export default Brojevi