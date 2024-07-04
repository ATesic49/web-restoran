import Image from "next/image";
import React from "react";
import oNama from "@/public/imgs/heroBg.jpeg";
import image from "@/public/imgs/onamaPicaso.jpeg";
import Link from "next/link";
function ONama() {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center bg-gray-950 p-8 md:gap-8 md:p-16">
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
      <h2 className="text-3xl font-bold text-gray-100 md:text-6xl">O nama</h2>
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:px-4">
        <p className="max-w-[30em] text-sm text-gray-200 md:text-lg">
          <br className="h-4" />
          <br className="h-4" />
          Naš tim se trenutno sastoji od{" "}
          <strong className="text-gray-300"> dvoje ljudi</strong>, jedan je
          specijalizovan za izradu web sajtova, dok je drugi zadužen za
          marketing firme.
          <br className="h-4" />
          <br className="h-4" />
          Naša firma je trenutno u razvoju, odrađeno je svega nekoliko web
          sajtova. Do sada nismo imali primedbu i svi naši klijenti su iz
          saradnje izašli <strong className="text-gray-300">
            zadovoljni{" "}
          </strong>{" "}
          podignutim kvalitetom svog posla.
          <br className="bg-red block h-4 w-2" />
          <br className="bg-red block h-4 w-2" />
          Ovim tekstom želimo da iskažemo{" "}
          <strong className="text-gray-300">iskrenost </strong> u radu i da Vam
          damo do znanja želju o dobroj saradnji.
        </p>
        <Image
          src={image}
          alt=""
          className="aspect-square rounded rounded-t-2xl md:w-1/3"
        ></Image>
      </div>
      <Link
        href={"/o-nama"}
        className="mx-auto mt-8 rounded-lg bg-gradient-to-t from-blue-500 to-blue-400 px-4 py-2 text-lg text-gray-50 shadow-sm shadow-blue-600"
      >
        Više o nama
      </Link>
    </div>
  );
}

export default ONama;
