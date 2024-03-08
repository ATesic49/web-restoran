import React from 'react'
import KruznaAnim from './components/KruznaAnim'

function page() {
    return (
        <div className='md:p-16 p-8 mt-16 md:mt-8 gap-16 flex flex-col justify-center items-center w-full text-gray-900'>
            <h1 className='text-center max-w-[10em] text-4xl md:text-6xl font-bold'>Šta sve nudi jedan WebRestoran</h1>
            <KruznaAnim />

        </div>
    )
}

export default page