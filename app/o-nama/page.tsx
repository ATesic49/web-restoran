import React from 'react'
import Heroa from '@/public/svgs/hero.svg'
import Image from 'next/image'
import Brojevi from './components/Brojevi'
import Reordera from './components/Reordera'
import s from '@/public/imgs/Portfolio.png'

function page() {

    return (
        <div className='md:p-m-16 m-8 flex flex-col gap-16'>
            <div className='absolute top-0 left-1/2 -translate-y-1/2 -z-10 -translate-x-1/2 w-2/3 bg-blue-300 opacity-20 rounded-full aspect-square'></div>
            <h1 className='mt-16 text-center max-w-[10em] mx-auto md:text-6xl text-3xl font-bold text-gray-900'>Sve što treba da znate o nama</h1>
            <Image src={Heroa} className='w-9/12 md:w-3/12  -my-16 mx-auto' alt='' />
            <div className='grid justify-center md:items-start items-center md:grid-cols-3 gap-8'>
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
                    text2='U koliko vam se ne bude svideo sajt koji vam budemo pravili, ne naplacujemo ništa za njega.'
                    delay={1} />
            </div>

            <div className='flex flex-col gap-8  justify-center items-center'>
                <div className='flex  flex-col justify-center w-full overflow-hidden items-center gap-8 md:gap-16 mt-8'>
                    <h2 className='text-gray-900 max-w-[90%] text-center mx-auto font-bold    text-3xl md:text-4xl '>
                        Programi koje koristimo
                    </h2>
                    <Reordera />

                </div>

            </div>
            <div className='flex flex-col gap-8 md:gap-16 md:p-8 justify-center items-center'>
                <h2 className='text-4xl text-gray-800 font-bold'>Naša Priča</h2>
                <div className=' w-full   grid md:grid-cols-2 gap-8'>
                    <p className='w-full md:text-lg text-sm text-gray-600 '>Kada sam, krajem 2021.   počeo da pravim websajtove, samo sam gledao na to kao na pripremu za fakultet.
                        Posle nekog vremena, zavoleo sam proces, i odlučio da se posvetim tome.
                        <span className='h-2 block' />
                        Naravno, sajtovi koje sam na početku pravio bili su žestoka kurčina, ali sam nastavio da se trudim i sada sam tu gde jesam.
                        <span className='h-2 block' />
                        Kako sam učio više i više, shvatio sam da programiranje samo po sebi nije dovoljno, i da treba da se posvetim i dizajniranju, i zaista, posle prve 2 knjige o dizajnu koje sam pročitao, moji sajtovi postali su 10 puta bolji nego pre.
                    </p>
                    <Image alt='' src={s} className=' w-full aspect-square md:aspect-auto bg-red-200 object-cover object-center'></Image>
                </div>
            </div>
        </div >
    )
}

export default page