import Image from 'next/image'
import React from 'react'
import image from '@/public/imgs/Portfolio.png'
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

            <div className='flex jstify-center ites-center gap-8'>

                <div className='flex gap-4 py-4 px-4 rounded-lg flex-col border  items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.004 2c4.942 0 8.288 2.503 8.85 6.444a12.884 12.884 0 0 1 -2.163 9.308a11.794 11.794 0 0 1 -3.51 3.356c-1.982 1.19 -4.376 1.19 -6.373 -.008a11.763 11.763 0 0 1 -3.489 -3.34a12.808 12.808 0 0 1 -2.171 -9.306c.564 -3.95 3.91 -6.454 8.856 -6.454zm1.913 14.6a1 1 0 0 0 -1.317 -.517l-.146 .055a1.5 1.5 0 0 1 -1.054 -.055l-.11 -.04a1 1 0 0 0 -.69 1.874a3.5 3.5 0 0 0 2.8 0a1 1 0 0 0 .517 -1.317zm-5.304 -6.39a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -1.497l-2 -2zm8.094 .083a1 1 0 0 0 -1.414 0l-2 2l-.083 .094a1 1 0 0 0 1.497 1.32l2 -2l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" className='fill-blue-500' />
                    </svg>
                    <h3 className='text-sm '>Responzivni Dizajn</h3>
                </div>


            </div>

        </div>
    )
}

export default Usluge