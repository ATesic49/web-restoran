import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='flex py-8 flex-col justify-center gap-8 items-center min-h-screen  overflow-hidden relative'>
            <div className='absolute bg-gradient-to-t from-blue-400 to-blue-200 opacity-25 -z-10 blur-lg top-1/3 w-1/3 left-1/2 h-1/2 '> </div>
            <div className='absolute bg-gradient-to-t from-pink-400 to-pink-100 opacity-15 -z-10 blur-lg aspect-square  top-1/2 -translate-y-1/2 rounded-full  left-0  w-1/2 '> </div>

            <h1 className='text-4xl text-gray-800 font-bold'>Pozovi nas, ili zakazi sastanak</h1>
            <div className='grid text-white grid-cols-2 relative gap-x-16 gap-y-8 bg-gradient-to-tr from-blue-400 to-pink-200 p-8 pb-4 rounded shadow-lg shadow-blue-200'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100%_-_2rem)] w-[1px] bg-gray-100'></div>
                <div className='w-full  flex flex-col gap-4 '>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-sm'>Ime i Prezime:</p>

                        <input type="text" className='p-2 rounded text-sm outline-none w-[20em] text-gray-500 ' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-sm'>Email:</p>

                        <input type="text" className='p-2 rounded text-sm outline-none w-[20em] text-gray-500' />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-1 '>
                    <p className='text-sm '>Poruka:</p>

                    <textarea name="" className='w-full rounded h-full outline-none  text-sm p-2 text-gray-500' id="" defaultValue={''}></textarea>
                </div>
                <div className='px-4 col-span-2 cursor-pointer py-2 rounded  ml-auto text-gray-800 text-sm w-fit -mt-4 bg-gray-50   '>Pošalji</div>
            </div>
            <p className='-my-4 text-gray-500'>ili</p>
            <Link href={'tel:+381644737375'} className='p-2 rounded flex justify-center border-gray-500 text-gray-800 items-center border-2 text-sm   px-4 py-2'>
                0644737375
            </Link>
        </div>
    )
}

export default page