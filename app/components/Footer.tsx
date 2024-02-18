import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='flex bg-gray-100 justify-between gap-4 items-center p-4 text-sm'>
      <p className='text-gray-600 text-xs md:text-sm'>
        &copy; 2024. Sva prava zadržana.
      </p>
      <div className='flex justify-center  items-center gap-4'>
        <Link href={'https://www.instagram.com/web.restoran/'} className='flex  justify-center items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 stroke-gray-600" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">

            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
        </Link>
        <Link href={'https://www.instagram.com/web.restoran/'} className='flex  justify-center items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6  stroke-gray-600" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </Link>

      </div>
    </div>
  )
}

export default Footer