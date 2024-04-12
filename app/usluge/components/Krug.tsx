'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion, motionValue } from 'framer-motion'
import { Reem_Kufi_Fun } from 'next/font/google'

function Krug() {
    const ref = useRef(null)

    return (
        <motion.div
            ref={ref}
            animate={{ x: 100, }}
            transition={{ duration: 8, repeat: Infinity }}
            className='aspect-square rounded-full bg-yellow-400 text-white text-sm flex justify-center items-center px-8'>Krug</motion.div>
    )
}

export default Krug