import Link from 'next/link'
import React from 'react'

function MobileNavbar() {
    return (
        <div className='fixed w-full bg-white bottom-0 border-t z-50 sm:hidden grid grid-cols-4 justify-center items-center'>

            <Link href="/o-nama" className='text-graya-900 text-blue-400 bg-red-200 flex justify-center items-center text-center text-[10px] flex-col gap-1 w-full py-2 '>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-8  stroke-blue-400 fill-blue-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                O nama</Link>
            <Link href="/o-nama" className='text-graya-900 text-blue-400 border-r flex justify-center items-center text-center text-[10px] flex-col gap-1 w-full py-2 '>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-blue-400 fill-blue-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                O nama</Link>
            <Link href="/o-nama" className='text-graya-900 text-blue-400 border-r flex justify-center items-center text-center text-[10px] flex-col gap-1 w-full py-2 '>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-8  stroke-blue-400 fill-blue-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                O nama</Link>
            <Link href="/o-nama" className='text-graya-900 text-blue-400 border-r flex justify-center items-center text-center text-[10px] flex-col gap-1 w-full py-2 '>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-8  stroke-blue-400 fill-blue-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                O nama</Link>



        </div>
    )
}

export default MobileNavbar