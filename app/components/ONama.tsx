import Image from 'next/image'
import React from 'react'
import oNama from '@/public/imgs/heroBg.jpeg'
import image from '@/public/imgs/laptop.jpeg'
import Link from 'next/link'
function ONama() {
    return (
        <div className='flex justify-center gap-8 items-start p-8  md:p-16 flex-col'>

            <h2 className='text-3xl md:text-6xl text-gray-800 font-bold '>
                O nama
            </h2>
            <div className='flex justify-between md:flex-row flex-col gap-8  md:px-4  items-center w-full '>
                <p className='text-gray-500 text-sm md:text-lg max-w-[30em]'>
                    Što se nas tiče, moramo da vam odamo jednu tajnu... <strong className='text-gray-700'>Imamo samo 18 godina.</strong>
                    <br className='h-2 ' />
                    Naš tim sastoji se iz svega dvoje ljudi, od kojih je jedan zadužen za izradu web sajtova, a drugi za marketing.
                    <br className='h-2 ' />

                    Ne želimo da se pravimo da smo neka ogromna firma, jer vama to <strong className='text-gray-700'> u suštini i ne treba.</strong>
                    <br className='h-2 block bg-red w-2  ' />
                    Vama samo trebaju ljudi koji zaista žele da vam ponognu da <strong className='text-gray-700'> ostvarite svoj cilj </strong>, pre nego da vam samo uzmu novac, i prekopiraju tudji sajt čisto da bi vas &apos;otarasili&apos;.
                </p>
                <Image src={image} alt='' className='md:w-1/3 rounded-t-2xl  aspect-square  rounded'></Image>

            </div>
            <Link href={'/o-nama'} className='px-4 py-2 rounded-lg bg-gradient-to-t shadow-sm shadow-blue-600 from-blue-500 to-blue-400 mx-auto text-lg text-gray-50'>Više o nama</Link>
        </div>
    )
}

export default ONama