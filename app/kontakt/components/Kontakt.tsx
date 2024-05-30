'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { CircularProgress } from '@mui/material'
function Kontakt() {
    const [emailState, setEmailState] = useState({
        ime: '',
        email: '',
        poruka: ''
    })
    const [status, setStatus] = useState('')
    const handleSubmit = async () => {

        try {

            setStatus('circ')
            const res = await axios.post('/api/email', { ...emailState })
            if (res.data.status) {
                setStatus(res.data.status)
                setTimeout(() => { setStatus('') }, 2000)
            } else {
                throw new Error('Negde je došlo do greške')
            }
        } catch (e: any) {
            console.log(e)
            setStatus(e.message)
            setTimeout(() => { setStatus('') }, 2000)


        }

    }
    return (
        <div className='flex py-8 flex-col justify-center gap-8 items-center min-h-screen   relative bg-gray-950 text-gray-400 z-10 overflow-hidden pt-24'>
            <div className='absolute inset-0 grid grid-cols-[repeat(20,128px)] md:grid-cols-[repeat(20,256px)] divide-x divide-gray-800 -z-10 overflow-hidden'>
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
            <div className='absolute bg-gradient-to-t from-blue-400 to-blue-200 opacity-25 -z-10 blur-lg top-1/3 w-1/3 left-1/2 h-1/2 '> </div>
            <div className='absolute bg-gradient-to-t from-pink-400 to-pink-100 opacity-10 -z-10 blur-lg aspect-square  top-1/2 -translate-y-1/2 rounded-full  left-0  w-1/3 '> </div>

            <h1 className='md:text-4xl text-2xl w-5/6 text-center md:w-auto md:text-left text-gray-400 font-bold'>Pozovi nas, ili zakazi sastanak</h1>
            <div className={`-my-4 text-green-500 `}>
                {status === 'circ' ? <CircularProgress /> : <>{status}</>}
            </div>











            <div className='grid text-white grid-cols-2 relative gap-x-16 gap-y-8 bg-gradient-to-tr from-blue-500 to-pink-300 p-8 pb-4 rounded mx-4 shadow-md shadow-blue-950'>

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100%_-_2rem)] w-[1px] md:bg-gray-300'></div>



                <div className='w-full md:col-span-1 col-span-2 flex flex-col gap-4 '>
                    <div className='flex w-full flex-col justify-start items-start gap-1'>
                        <p className='text-sm'>Ime i Prezime:</p>

                        <input onChange={e => {
                            setEmailState({
                                ...emailState,
                                ime: e.target.value
                            })
                        }} type="text" className='p-2 rounded text-sm outline-none w-full md:w-[20em] text-gray-600 bg-gray-200 ' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <p className='text-sm'>Email:</p>

                        <input type="text" className='p-2 rounded text-sm outline-none w-full md:w-[20em] text-gray-600 bg-gray-200' onChange={e => {
                            setEmailState({
                                ...emailState,
                                email: e.target.value
                            })
                        }} />
                    </div>
                </div>

                <div className='w-full  md:col-span-1 col-span-2  flex flex-col gap-1 md:mt-0 -mt-4'>
                    <p className='text-sm '>Poruka:</p>

                    <textarea

                        onChange={e => {
                            setEmailState({
                                ...emailState,
                                poruka: e.target.value
                            })
                        }}
                        name="" className='w-full rounded h-full min-h-[7.5em] outline-none  text-sm p-2 text-gray-600 bg-gray-200' id="" defaultValue={''}></textarea>
                </div>
                <div className='px-4 col-span-2 cursor-pointer py-2 rounded  ml-auto text-gray-800 text-sm w-fit md:-mt-4 bg-gray-50   ' onClick={handleSubmit}> Pošalji</div>
            </div>










            <p className='-my-4 text-gray-400'>ili</p>
            <Link href={'tel:+381644737375'} className='p-2 rounded flex justify-center border-gray-400 text-gray-300 items-center border-2 text-sm   px-4 py-2'>
                0644737375
            </Link>
        </div>
    )
}

export default Kontakt