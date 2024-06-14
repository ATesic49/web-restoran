import Image from "next/image";
import React from "react";
import svg from "@/public/imgs/logo.png";
import heroBg from "@/public/imgs/heroBg.jpeg";
import bgbg from "@/public/imgs/bggb.jpeg";
import Link from "next/link";
function Hero() {
  return (
    <div className="heroj relative z-10 flex flex-col items-center justify-between bg-gray-950 p-8 pt-16 md:min-h-[100vh] md:flex-row md:gap-8 md:p-16">
      <div className="absolute inset-0 -z-10 grid grid-cols-[repeat(20,128px)] divide-x-2 divide-gray-800 overflow-hidden md:grid-cols-[repeat(20,256px)]">
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
        <div className="h-full w-full"></div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-center gap-8">
        <h1 className="bg-gradient-to-t from-blue-400 to-pink-300 bg-clip-text text-3xl font-bold leading-8 text-transparent md:max-w-[8em] md:text-6xl">
          Izrada web sajtova na nivou iznad.
        </h1>
        <p className="text-sm font-normal text-gray-400 md:max-w-[20em] md:text-base">
          Čak 98% najuspešnijih biznisa pripisuju veliki deo svoga uspeha
          profesinalnoj
          <span> izradi web sajta.</span>{" "}
        </p>
        <Link
          href="/kontakt"
          className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-blue-500 to-blue-400 px-2 py-1 text-sm text-blue-50 shadow-sm shadow-blue-600 duration-200 hover:scale-95 focus:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 stroke-blue-50 md:w-8"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
            <path d="M10 16h6" />
            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 8h3" />
            <path d="M4 12h3" />
            <path d="M4 16h3" />
          </svg>
          Zakaži Stastanak
        </Link>
      </div>
      <div className="relative flex aspect-square w-5/6 items-center justify-center md:w-1/2">
        {/* <Image priority className='md:w-5/6 w-2/3  ' src={svg} alt=''></Image> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -left-8 top-2 fill-gray-100 opacity-20 blur-lg"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 20 20"
        >
          <g>
            <path
              d="M14.4 4.4 13 5.8l4.2 4.2-4.2 4.2 1.4 1.4L20 10zM5.6 4.4 0 10l5.6 5.6L7 14.2 2.8 10 7 5.8zM9.989 16.184l-1.972-.328 2-12.03 1.972.328z"
              fill="#ffffff"
              opacity="1"
              data-original="#ffffff"
            ></path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-100"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 20 20"
        >
          <g>
            <path
              d="M14.4 4.4 13 5.8l4.2 4.2-4.2 4.2 1.4 1.4L20 10zM5.6 4.4 0 10l5.6 5.6L7 14.2 2.8 10 7 5.8zM9.989 16.184l-1.972-.328 2-12.03 1.972.328z"
              fill="#ffffff"
              opacity="1"
              data-original="#ffffff"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
