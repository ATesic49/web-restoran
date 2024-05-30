'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/public/imgs/hero.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import path from 'path'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className=' flex justify-between fixed z-50 bg-gray-950  bg-opacity-50 backdrop-blur-lg top-0 w-full left-0 items-center px-4 md:px-8 py-4'>
            <Link href='/' className='bg-gradient-to-t from-gray-50 to-gray-200 italic font-bold bg-clip-text text-transparent  p-1'>NEXT LEVEL

            </Link>
            <nav className='hidden md:flex text-gray-200 font-semibold text-lg justify-center items-center gap-8 '>
                <Link href="/o-nama" className={`${pathname === '/o-nama' && 'text-gray-100'}  hover:text-gray-100 hover:underline underline-offset-8 duration-200`}>O nama</Link>
                <Link href="/usluge" className={` hover:underline underline-offset-8 
                ${pathname === '/usluge' && 'text-gray-100'} duration-200  hover:text-gray-100
                `}>Usluge</Link>
                <Link href="/kontakt" className={` hover:underline 
                ${pathname === '/kontakt' && 'text-gray-100'} hover:text-gray-100 duration-200
                underline-offset-8`}>Kontakt</Link>
                <Link href={'/kontakt'} className='bg-gradient-to-t text-xs from-blue-500 px-2 py-1 shadow-sm  rounded-lg to-blue-400 flex justify-center items-center gap-2  text-gray-100 duration-200 hover:scale-95 focus:scale-90 shadow-blue-600  ml-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-gray-100' viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                        <path d="M10 16h6" />
                        <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M4 8h3" />
                        <path d="M4 12h3" />
                        <path d="M4 16h3" />
                    </svg>
                </Link>


            </nav>
            <div className='relative md:hidden '
                onClick={() => setIsOpen(!isOpen)}>
                <button className='shadow-blue-500 to-blue-400 rounded  flex gap-4 '

                >

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-gray-100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
                <motion.div className='flex flex-col rounded-md justify-center items-start md:hidden bg-gray-950  bg-opacity-75 backdrop-blur-lg  border top-[calc(100%_+_16px)] -z-10 p-4  absolute rounded-t-none  -right-4 gap-4 w-32  overflow-hidden'
                    initial={{ y: -100, opacity: 0 }}
                    animate={isOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, type: 'spring', ease: 'easeInOut', delay: 0.125 }}


                >
                    <Link href="/o-nama" className='text-gray-100 hover:underline underline-offset-8'>O nama</Link>
                    <Link href="/usluge" className='text-gray-100 hover:underline underline-offset-8'>Usluge</Link>
                    <Link href="/o-nama" className='text-gray-100 hover:underline underline-offset-8'>Kontakt</Link>
                    <Link href={'/kontakt'} className='-ml-1 bg-gradient-to-t text-xs from-blue-600 px-2 py-1 shadow-sm  rounded font-semibold to-blue-500 flex justify-center items-center   text-gray-100 duration-200 hover:scale-95 focus:scale-90 shadow-blue-700  '>
                        <p className='text-[10px]'>Zakaži sastanak</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 stroke-gray-100' viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                            <path d="M10 16h6" />
                            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 8h3" />
                            <path d="M4 12h3" />
                            <path d="M4 16h3" />
                        </svg>
                    </Link>



                </motion.div>
            </div>
        </div >
    )
}

export default Navbar