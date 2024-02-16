import React from 'react'
import Heroa from '@/public/svgs/hero.svg'
import Image from 'next/image'
import Brojevi from './components/Brojevi'
function page() {
    return (
        <div className='md:p-16 p-8 flex flex-col gap-8'>
            <div className='absolute top-0 left-1/2 -translate-y-1/2 -z-10 -translate-x-1/2 w-2/3 bg-blue-300 opacity-20 rounded-full aspect-square'></div>
            <h1 className='mt-8 text-center max-w-[10em] mx-auto md:text-6xl text-3xl font-bold text-gray-900'>Sve što treba da znate o nama</h1>
            <Image src={Heroa} className='w-3/12 -my-8 mx-auto' alt='' />
            <div className='grid grid-cols-3 gap-8 grid-rows-3'>
                <Brojevi br={1}
                    naslov='Iskustvo u programiranju'
                    text1='Naše iskustvo u pravljenju sajtova sada već ulazi u treću godinu.'
                    text2='Smartramo da se tajna našeg uspeha krije u neprestanom učenju i usavršavanju.'
                    delay={.5} />
                <Brojevi br={2}
                    naslov='Dizajn Sajtova'
                    text1='Takođe, treba napomenuti da smo jedni od retkih na tržištu koji se bave i dizajnom sajtova.'
                    text2='Na taj način obezbeđujemo Vama sajt koji će da privlači kupce, a nama zadovoljne mušterije.'
                    delay={.75} />
                <Brojevi br={3}
                    naslov='Garantujemo uspeh'
                    text1='Mislimo da je jako bitno da se naš klient oseća sigurno i da zna da je njegov sajt u dobrim rukama.'
                    text2='U koliko vam se ne bude svideo sajt koji vam budemo pravili, ne naplacujemo ništa za njega.                  U koliko vam se ne bude svideo sajt koji vam budemo pravili,
                ne naplacujemo ništa za njega.'
                    delay={1} />
            </div>
        </div>
    )
}

export default page