import Image from 'next/image'
import React from 'react'
import oNama from '@/public/imgs/heroBg.jpeg'
import image from '@/public/imgs/laptop.jpeg'
import Link from 'next/link'
function ONama() {
    return (
        <div className='flex justify-center gap-8 items-start p-8 bg-gray-950 md:p-16 flex-col'>

            <h2 className='text-3xl md:text-6xl text-gray-100 font-bold '>
                O nama
            </h2>
            <div className='flex justify-between md:flex-row flex-col gap-8  md:px-4  items-center w-full '>
                <p className='text-gray-200 text-sm md:text-lg max-w-[30em]'>

                    <br className='h-4 ' />
                    <br className='h-4 ' />
                    Nas tim se trenutno sastoji od <strong className='text-gray-300'> dvoje ljudi</strong>, jedan je specijalizovan za izradu websajtova, dok je drugi zaduzen za marketing firme.
                    <br className='h-4 ' />
                    <br className='h-4 ' />

                    Nasa firma je trenutno u razvoju, odradjeno je svega nekoliko websajtova i do sada nismo imali primedbu i svi nasi klijenti su iz saradnje izasli <strong className='text-gray-300'>
                        zadovoljni </strong> i sa podignutim kvalitetom svog posla
                    <br className='h-4 block bg-red w-2  ' />
                    <br className='h-4 block bg-red w-2  ' />
                    Ovim tekstom zelimo da iskazemo <strong className='text-gray-300'>
                        iskrenost </strong>  u radu i da vam damo do znanja zelju o radu i dobroj saradnji.
                </p>
                <Image src={image} alt='' className='md:w-1/3 rounded-t-2xl  aspect-square  rounded'></Image>

            </div>
            <Link href={'/o-nama'} className='px-4 py-2 rounded-lg bg-gradient-to-t shadow-sm shadow-blue-600 from-blue-500 to-blue-400 mx-auto text-lg text-gray-50'>Više o nama</Link>
        </div>
    )
}

export default ONama