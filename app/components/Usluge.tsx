import Image from 'next/image'
import React from 'react'
import image from '@/public/imgs/Portfolio.png'
import Link from 'next/link'
function Usluge() {
    return (
        <div
            className='flex flex-col gap-8 p-8 md:p-16  bg-gray-100'
        >
            <h2
                className='text-3xl md:text-6xl font-bold text-center text-gray-800'
            >Šta mi nudimo?</h2>
            <div
                className='flex gap-8 justify-start items-center'>
                <p className='text-gray-700 text-sm md:text-xl font-bold text-center w-full'>
                    Nudimo izradu websajta takvog da ce

                    poželeti da ode u Vaš restoran, ili kafić.
                </p>


            </div>

            <div className='grid grid-flow-col md:grid-flow-row md:grid-cols-3 overflow-y-visible overflow-x-auto ites-center gap-8 py-2'>

                <Link href={'/usluge/#ResponzivniDizajn'} className='flex gap-4 py-4 px-4 rounded-lg  flex-col border   items-center justify-center shadow-md duration-200 cursor-pointer focus:scale-95 bg-gray-100 hover:bg-gray-200 shadow-blue-200 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-blue-500 rotiranje" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">

                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.5 7h11" />
                        <path d="M6.5 17h11" />
                        <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                        <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                    </svg>
                    <h3 className='text-sm  text-gray-800 text-center max-w-[10em] '>Besplatan sastanak</h3>
                </Link>

                <Link href={'/usluge/#ResponzivniDizajn'} className='flex gap-4 py-4 px-4 rounded-lg  flex-col border   items-center justify-center shadow-md duration-200 cursor-pointer focus:scale-95 bg-gray-100 hover:bg-gray-200 shadow-blue-200 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-blue-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
                        <path d="M11 4h2" />
                        <path d="M12 17v.01" />
                        <path d="M15 19l2 2l4 -4" />
                    </svg>
                    <h3 className='text-sm  text-gray-800 text-center '>Responzivni Dizajn</h3>
                </Link>
                <Link href={'/usluge/#ResponzivniDizajn'} className='flex gap-4 py-4 px-4 rounded-lg  flex-col border   items-center justify-center shadow-md duration-200 cursor-pointer focus:scale-95 bg-gray-100 hover:bg-gray-200 shadow-blue-200 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-blue-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">

                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7h3" />
                        <path d="M3 11h2" />
                        <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" />
                        <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" />
                    </svg>
                    <h3 className='text-sm  text-gray-800 text-center '>Brzo Učitavanje Stranica</h3>
                </Link>
                <Link href={'/usluge/#ResponzivniDizajn'} className='flex gap-4 py-4 px-4 rounded-lg  flex-col border   items-center justify-center shadow-md duration-200 cursor-pointer focus:scale-95 bg-gray-100 hover:bg-gray-200 shadow-blue-200 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-blue-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">


                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                        <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                        <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                        <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                    </svg>
                    <h3 className='text-sm  text-gray-800 text-center min-w-[5em] '>Dizajn Koji Se Ističe</h3>
                </Link>
                <Link href={'/usluge/#ResponzivniDizajn'} className='flex gap-4 py-4 px-4 rounded-lg  flex-col border   items-center justify-center shadow-md duration-200 cursor-pointer focus:scale-95 bg-gray-100 hover:bg-gray-200 shadow-blue-200 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-blue-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">

                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17l6 -6l4 4l8 -8" />
                        <path d="M14 7l7 0l0 7" />
                    </svg>
                    <h3 className='text-sm  text-gray-800 text-center min-w-[5em] '>Zagarantovan Uspeh</h3>
                </Link>
                <Link href={'/usluge'} className='text-center flex justify-center items-center text-sm'>Pogledaj Više...</Link>
            </div>

        </div>
    )
}

export default Usluge