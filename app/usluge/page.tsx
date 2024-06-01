import React from 'react'
import KruznaAnim from './components/KruznaAnim'
import Ispod from './components/Ispod'
import DeoGrida from './components/DeoGrida'
import phone from '@/public/imgs/responsiveDesign.png'
import japanac from '@/public/imgs/opitimisation.jpeg'
import lapTop from '@/public/imgs/sunceSija.jpeg'
import meni from '@/public/imgs/blueCollar.png'
import ladyinRed from '@/public/imgs/ladyinred.jpeg'
import stonks from '@/public/imgs/stonks.jpeg'
import meeting from '@/public/imgs/picassoMeeting.jpeg'
import Kontent from './components/Kontent'
function page() {
    return (
        <div className='md:p-16 p-8 pt-24 md:pt-24  gap-8  md:gap-16 flex flex-col justify-center items-center w-full text-gray-200 bg-gray-950 relative z-10'>
            <div className='absolute inset-0 grid grid-cols-[repeat(20,128px)] md:grid-cols-[repeat(20,256px)] divide-x-2   divide-gray-800 -z-10 overflow-hidden'>
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
            <h1 className='text-center max-w-[10em] text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-pink-300 p-2 -m-2'>Šta nudi Next Level?</h1>
            <Ispod />
            <div className='grid grid-cols-[repeat(4,_minmax(240px,_1fr))] gap-8 w-full  items-start justify-start md:overflow-hidden md:overflow-x-hidden overflow-x-scroll overflow-y-hidden '>
                <DeoGrida d={.2} h={'Responzivan Dizajn.'} p='Čak 71% interneta se odvija na mobilnim telefonima.Nasi sajtovi su veoma prilagodjeni mobilnoj trafici.' img={phone} />
                <DeoGrida
                    d={.4}
                    h='Izrada sajtova po zelji.'
                    p='U koliko vam se bilo sta na sajtu ne svidi, mi to promenimo.Ako zelite nesto da dodate, na raspolaganju smo.' img={lapTop} />
                <DeoGrida
                    d={.6}

                    h='Optimizacija za kupce.'
                    p='Na internetu, svaki sekund je bitan. Trudimo se da nasi sajtovi rade brze od drugih.' img={japanac} />
                <DeoGrida
                    d={.8}
                    h='Funkcionalan Deo sajta'
                    p='Plaćanje preko sajta, utilizacija bar kodova,povezivanje sa bazama podataka... ' img={meni} />
            </div>
            <div className='flex flex-col gap-16 w-full px-4'>
                <Kontent img={meeting} h='Besplatna procena sajta' p={'U koliko vam treba sajt, a ne znate koliko bi koštao,kakav bi bio, kakve vrste sajtova su sada popuarne itd.,možete kod nas da zakažete besplatan petanaestominnutni sastanak u kom ćete dobiti odgovor na sva vaša pitanja.'} />
                <Kontent img={stonks} h='Zagarantovan uspeh' p={' Naši sajtovi napravljeni su po evropsim standardima i uz dovoljno dobar maketing praktično mog da garantuju uspeh.U koliko ne budete dobili željene rezultate od našeg sajta, spremni smo za pun povraćaj novca.'} />
                <Kontent img={ladyinRed} h='Dizajn koji se istice' p={'U moru mnogih mononih sajtova preživeće samo oni koji svojim karakterom odudaraju od mase. Mi vam nudimo upravo to. Koristeći naše principe u dizajnu koje smo naučili u isavršili godinama iskustva, vaš sajt će moći da uništi vašu konkurenciju i probije se do vrha.'} />



            </div>

        </div>
    )
}

export default page