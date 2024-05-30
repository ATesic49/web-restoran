import React from 'react'
import portfolio from '@/public/imgs/Portfolio.png'
import portfolio2 from '@/public/imgs/portfolio2.png'
import Image from 'next/image'
import Link from 'next/link'
function Portfolio() {
    return (
        <div className='flex justify-center gap-8 bg-gray-950 items-start p-8 md:p-16 flex-col relative z-10'>
            <div className='absolute inset-0 grid grid-cols-[repeat(20,128px)] md:grid-cols-[repeat(20,256px)] divide-x divide-gray-800 -z-10 overflow-hidden'>
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
            <h2 className='md:text-6xl text-3xl text-gray-200 font-bold '>
                Prortfolio
            </h2>
            <div className='flex items-center justify-between w-full'>
                <p className='text-gray-400 text-sm md:text-lg max-w-[600px]'>Ovo ispred vas je jedan od naših prethodnih projekata koji služi da vam pokaže kako bi Vaš sajt mogao da izgleda u koliko odaberete saradnju sa nama :)</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-center md:mt-8  '>
                <div className=' md:w-32 flex aspect-square gap-2 md:gap-8 md:flex-col mx-auto row-start-2 md:row-start-auto    justify-between items-center'>

                    <div className='md:w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-green-500' width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
                            <path d="M11 4h2" />
                            <path d="M12 17v.01" />
                            <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p className='text-xs text-center text-gray-300'>Responzivno za mobilne telefone</p>
                    </div>
                    <div className='md:w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-green-500' width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                            <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>

                        <p className='text-xs text-center text-gray-300'>Moderan i dobro promišljen dizajn</p>
                    </div>
                </div>
                <div className='w-full col-span-2 flex flex-col gap-2 justify-center items-center  relative'>
                    <Image className='object-contain border rounded-lg shadow-lg ' src={portfolio} alt=''></Image>
                </div>
                {/* <div className='w-full flex aspect-square bg-blue-200 gap-8 flex-col justify-between items-center'>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                </div> */}

            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 items-center justify-center md:mt-8'>
                <div className='w-full col-span-2 flex flex-col gap-2 justify-center items-center  relative '>
                    <Image className='object-contain rounded-lg shadow-lg border' src={portfolio2} alt=''></Image>
                </div>
                <div className=' col-start-2 md:col-start-auto md:w-32 w-full flex aspect-square gap-2 md:gap-8 md:flex-col mx-auto   justify-between items-center'>

                    <div className='md:w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8  stroke-green-500' width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                            <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                        <p className='text-xs text-center text-gray-300'>Brzo učitavanje stranica</p>
                    </div>
                    <div className=' md:w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-green-500' width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">

                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                            \                        </svg>
                        <p className='text-xs text-center text-gray-300'>Pozitivno iskstvo posetioca</p>
                    </div>
                </div>

                {/* <div className='w-full flex aspect-square bg-blue-200 gap-8 flex-col justify-between items-center'>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                </div> */}

            </div>
            <Link href={'/o-nama'} className='px-4 py-2 rounded-lg bg-gradient-to-t shadow-sm shadow-blue-600 from-blue-500 to-blue-400 md:mt-8 mx-auto text-lg text-gray-50 '>Više o nama</Link >

        </div>
    )
}

export default Portfolio