import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='flex flex-col justify-center gap-8 items-center py-32'>
            <h1 className='text-4xl text-gray-800 font-bold'>Pozovi nas, ili zakazi sastanak</h1>
            <div className='grid text-white grid-cols-2 relative gap-x-16 gap-y-8 bg-gradient-to-tr from-blue-400 to-pink-400 p-8 pb-4 rounded '>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[1px] bg-gray-400'></div>
                <div className='w-full  flex flex-col gap-4 '>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-sm'>Ime i Prezime:</p>

                        <input type="text" className='p-2 rounded text-sm outline-none w-[20em]' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-sm'>Ime Kompanije:</p>

                        <input type="text" className='p-2 rounded text-sm outline-none w-[20em]' />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-1 '>
                    <p className='text-sm '>Poruka:</p>

                    <textarea name="" className='w-full rounded h-full outline-none  text-sm p-2' id="" defaultValue={''}></textarea>
                </div>
                <div className='px-4 col-span-2 cursor-pointer py-2 rounded  ml-auto text-gray-800 text-sm w-fit -mt-4 bg-gray-50   '>Posalji</div>
            </div>
            <p className='-my-4 text-gray-500'>ili</p>
            <div className='p-2 rounded flex justify-center items-center border-2 text-sm   px-4 py-2'>
                <Link href={'tel:+381644737375'} className='text-sm'>0644737375</Link>
            </div>
        </div>
    )
}

export default page