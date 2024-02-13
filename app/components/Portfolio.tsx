import React from 'react'
import portfolio from '@/public/imgs/Portfolio.png'
import portfolio2 from '@/public/imgs/portfolio2.png'
import Image from 'next/image'
function Portfolio() {
    return (
        <div className='flex justify-center gap-8 items-start p-16 flex-col'>

            <h2 className='text-6xl text-gray-950 font-bold '>
                Prortfolio
            </h2>
            <div className='flex items-center justify-between w-full'>
                <p className='text-gray-500 text-lg max-w-[600px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci fugiat ipsum sequi sapiente iste repellat inventore numquam. Dicta aliquam eligendi non fuga, voluptas libero, impedit natus, ut accusamus labore velit.</p>
            </div>
            <div className='grid grid-cols-3 items-center justify-center   mt-8    '>
                <div className=' w-32 flex aspect-square gap-8 flex-col mx-auto   justify-between items-center'>

                    <div className='w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-green-500' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
                            <path d="M11 4h2" />
                            <path d="M12 17v.01" />
                            <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p className='text-xs text-center text-gray-400'>Responzivno za mobilne telefone</p>
                    </div>
                    <div className='w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-green-500' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                            <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>

                        <p className='text-xs text-center text-gray-400'>Moderan i dobro promišljen dizajn</p>
                    </div>
                </div>
                <div className='w-full col-span-2 flex flex-col gap-2 justify-center items-center  relative'>
                    <Image className='object-contain border rounded-lg shadow-lg' src={portfolio} alt=''></Image>
                </div>
                {/* <div className='w-full flex aspect-square bg-blue-200 gap-8 flex-col justify-between items-center'>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                </div> */}

            </div>
            <div className='grid grid-cols-3 items-center justify-center   mt-8 '>
                <div className='w-full col-span-2 flex flex-col gap-2 justify-center items-center  relative '>
                    <Image className='object-contain rounded-lg shadow-lg border' src={portfolio2} alt=''></Image>
                </div>
                <div className=' w-32 flex aspect-square gap-8 flex-col mx-auto   justify-between items-center'>

                    <div className='w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-green-500' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
                            <path d="M11 4h2" />
                            <path d="M12 17v.01" />
                            <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p className='text-xs text-center text-green-500'>Responzivno za mobilne telefone</p>
                    </div>
                    <div className='w-32 flex-col gap-2 aspect-square flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 stroke-gray-900' width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
                            <path d="M11 4h2" />
                            <path d="M12 17v.01" />
                            <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p className='text-xs text-center text-gray-500'>Responzivno za mobilne telefone</p>
                    </div>
                </div>

                {/* <div className='w-full flex aspect-square bg-blue-200 gap-8 flex-col justify-between items-center'>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                    <div className='w-5/12 bg-red-200 aspect-square'></div>
                </div> */}

            </div>
            <button className='px-4 py-2 rounded-lg bg-gradient-to-t shadow-sm shadow-blue-600 from-blue-500 to-blue-400 mt-8 mx-auto text-lg text-gray-50'>Više o nama</button>

        </div>
    )
}

export default Portfolio