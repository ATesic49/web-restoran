'use client'
import React, { useEffect } from 'react'
import { Reorder } from 'framer-motion'
import { useState } from "react"




function Reordera() {
  function getScreenWidth(): number {
    return window.innerWidth;
  }

  const [windowq, setWindowq] = useState(200)
  useEffect(() => {
    setWindowq(getScreenWidth())
  }, [])
  const svgs = [
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
      <path d="M15 12v-3" /></>,
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></>

    ,
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
      <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
      <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
      <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
      <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
      <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
      <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
    </>,
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
      <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </>,
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
      <path d="M20 12l-8 8l-4 -4" />
    </>

  ]

  const divs = [reorderItem(svgs[0], 'Next js.'), reorderItem(svgs[1], 'Tailwind CSS'),
  reorderItem(svgs[2], 'React js.'), reorderItem(svgs[3], 'HTML 5')
    , reorderItem(svgs[4], 'Framer Motion')
  ]


  const [items, setItems] = useState([0, 1, 2, 3, 4, 5])
  return (

    <Reorder.Group
      layoutScroll


      className='grid md:grid-flow-col md:justify-center w-9/12 gap-4  md:grid-cols-5' axis={windowq > 768 ? 'x' : 'y'} values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          {divs[item]}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}

export default Reordera



const reorderItem = (svg: JSX.Element, natpis: string) => {
  return (
    <div className='p-4 rounded-lg cursor-pointer duration-200 hover:bg-gray-100 hover:scale-95 bg-gray-50 w-full border flex flex-col gap-1 text-sm justify-center items-center'>

      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 stroke-blue-300" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {svg}
      </svg>
      <p>{natpis}</p>
    </div>
  )
}