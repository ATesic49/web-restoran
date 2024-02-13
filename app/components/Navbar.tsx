import Link from 'next/link'
import React from 'react'
import logo from '@/public/imgs/hero.png'
import Image from 'next/image'
function Navbar() {
    return (
        <div className=' flex justify-between fixed z-50 bg-white bg-opacity-20 backdrop-blur-sm top-0 w-full left-0 items-center px-8 py-4'>
            <Link href='/' className='bg-gradient-to-t from-blue-700 to-blue-300 italic font-bold bg-clip-text text-transparent p-1'>WebRestoran

            </Link>
            <nav className='hidden md:flex text-gray-500 font-semibold text-lg justify-center items-center gap-8 '>
                <Link href="/o-nama" className='text-gray-800 hover:underline underline-offset-8'>O nama</Link>
                <Link href="/o-nama" className=' hover:underline underline-offset-8'>Portfolio</Link>
                <Link href="/o-nama" className=' hover:underline underline-offset-8'>Kontakt</Link>
                <Link href={'/'} className='bg-gradient-to-t text-xs from-blue-500 px-2 py-1 shadow-sm  rounded-lg to-blue-400 flex justify-center items-center gap-2  text-gray-100 duration-200 hover:scale-95 focus:scale-90 shadow-blue-700  ml-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-gray-100' viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

        </div>
    )
}

export default Navbar