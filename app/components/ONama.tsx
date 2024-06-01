import Image from 'next/image'
import React from 'react'
import oNama from '@/public/imgs/heroBg.jpeg'
import image from '@/public/imgs/onamaPicaso.jpeg'
import Link from 'next/link'
function ONama() {
    return (
        <div className='flex justify-center relative md:gap-8 items-start p-8 bg-gray-950 md:p-16 flex-col z-10'>
            <div className='absolute inset-0 grid grid-cols-[repeat(20,128px)] md:grid-cols-[repeat(20,256px)] divide-x-2  divide-gray-800 -z-10 overflow-hidden'>
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
            <h2 className='text-3xl md:text-6xl text-gray-100 font-bold '>
                O nama
            </h2>
            <div className='flex justify-between md:flex-row flex-col gap-8  md:px-4  items-center w-full '>
                <p className='text-gray-200 text-sm md:text-lg max-w-[30em]'>

                    <br className='h-4 ' />
                    <br className='h-4 ' />
                    Naš tim se trenutno sastoji od <strong className='text-gray-300'> dvoje ljudi</strong>, jedan je specijalizovan za izradu web sajtova, dok je drugi zadužen za marketing firme.
                    <br className='h-4 ' />
                    <br className='h-4 ' />

                    Naša firma je trenutno u razvoju, odrađeno je svega nekoliko web sajtova.Do sada nismo imali primedbu i svi naši klijenti su iz saradnje izašli <strong className='text-gray-300'>
                        zadovoljni </strong>  podignutim kvalitetom svog posla.
                    <br className='h-4 block bg-red w-2  ' />
                    <br className='h-4 block bg-red w-2  ' />
                    Ovim tekstom želimo da iskažemo <strong className='text-gray-300'>
                        iskrenost </strong>  u radu i da Vam damo do znanja želju o dobroj saradnji.
                </p>
                <Image src={image} alt='' className='md:w-1/3 rounded-t-2xl  aspect-square  rounded'></Image>

            </div>
            <Link href={'/o-nama'} className='px-4 mt-8 py-2 rounded-lg bg-gradient-to-t shadow-sm shadow-blue-600 from-blue-500 to-blue-400 mx-auto text-lg text-gray-50'>Više o nama</Link>
        </div>
    )
}

export default ONama