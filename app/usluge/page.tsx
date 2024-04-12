import React from 'react'
import KruznaAnim from './components/KruznaAnim'
import Ispod from './components/Ispod'
import DeoGrida from './components/DeoGrida'
import phone from '@/public/imgs/telefon.jpg'
import japanac from '@/public/imgs/japanac.jpg'
import lapTop from '@/public/imgs/laptop.jpeg'
import meni from '@/public/imgs/meni.jpeg'
import Kontent from './components/Kontent'
function page() {
    return (
        <div className='md:p-16 p-8 mt-16 md:mt-8 gap-16 flex flex-col justify-center items-center w-full text-gray-900'>
            <h1 className='text-center max-w-[10em] text-2xl md:text-6xl font-bold'>Šta sve nudi jedan WebRestoran?</h1>
            <Ispod />
            <div className='grid md:grid-cols-4 gap-8 w-full items-start'>
                <DeoGrida d={.2} h={'Responzivan Dizajn.'} p='Cak 71% interneta se odvija na dmobilnim telefonima.Nasi sajtovi su veoma prilagodjeni mobilnoj trafici.' img={phone} />
                <DeoGrida
                    d={.4}
                    h='Izrada sajta po zelji.'
                    p='U koliko vam se bilo sta na sajtu ne svidi, mi to promenimo.Ako zelite nesto da dodate, na raspolaganju smo.' img={lapTop} />
                <DeoGrida
                    d={.6}

                    h='Optimizacija za kupce.'
                    p='Na internetu, svaki sekund je bitan. Trudimo se da nasi sajtovi rade brze od drugih.' img={japanac} />
                <DeoGrida
                    d={.8}
                    h='Funkcionalan Deo sajta'
                    p='Bar Kod meni, onlajn rezervacija stolova ... ' img={meni} />
            </div>
            <div className='flex flex-col gap-16 w-full px-4'>
                <Kontent img={phone} h='Besplatan sastanak' p={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad mollitia aliquid consequuntur possimus natus quas voluptate quo vero, labore odio esse accusamus voluptatum delectus facere eligendi corrupti, explicabo facilis!'} />
                <Kontent img={japanac} h='Responzivni dizajn' p={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad mollitia aliquid consequuntur possimus natus quas voluptate quo vero, labore odio esse accusamus voluptatum delectus facere eligendi corrupti, explicabo facilis!'} />
                <Kontent img={lapTop} h='Dizajn koji se istice' p={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad mollitia aliquid consequuntur possimus natus quas voluptate quo vero, labore odio esse accusamus voluptatum delectus facere eligendi corrupti, explicabo facilis!'} />



            </div>

        </div>
    )
}

export default page