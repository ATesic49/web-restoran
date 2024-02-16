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
            <div
                className='flex flex-col mt-8 gap-8 text-gray-600 text-sm md:text-lg'>
                <div
                    className='flex gap-4 flex-col justify-center items-center'>
                    <h3 className='text-xl text-gray-800'>Pre 30 godina...</h3>
                    <div className='rounded-lg overflow-hidden flex flex-col gap-4 h-96 w-1/3 shadow-lg shadow-blue-300'>
                        <Image src={image} className='h-1/2 object-cover' alt=''></Image>
                        <p className='mx-4'>Restorani su se otvarali lako. Svaki je uspevao u svom poslu...</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Usluge