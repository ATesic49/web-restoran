"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
function Kontakt() {
  const [emailState, setEmailState] = useState({
    ime: "",
    email: "",
    poruka: "",
  });
  const [status, setStatus] = useState("");
  const handleSubmit = async () => {
    if (
      emailState.ime.length < 5 ||
      emailState.email.length < 12 ||
      emailState.poruka.length < 10
    )
      return setStatus("Molimo Vas popunite polja do kraja.");
    else {
      try {
        setStatus("circ");
        const res = await axios.post("/api/email", { ...emailState });
        console.log(res);
        if (res.data.status) {
          setStatus(res.data.status);
          setTimeout(() => {
            setStatus("");
          }, 2000);
        } else {
          throw new Error("Negde je došlo do greške");
        }
      } catch (e: any) {
        console.log(e);
        setStatus(e.message);
        setTimeout(() => {
          setStatus("");
        }, 2000);
      }
    }
  };
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-gray-950 py-8 pt-24 text-gray-400">
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
      <div className="absolute left-1/2 top-1/3 -z-10 h-1/2 w-1/3 bg-gradient-to-t from-blue-400 to-blue-200 opacity-25 blur-lg">
        {" "}
      </div>
      <div className="absolute left-0 top-1/2 -z-10 aspect-square w-1/3 -translate-y-1/2 rounded-full bg-gradient-to-t from-pink-400 to-pink-100 opacity-10 blur-lg">
        {" "}
      </div>

      <h1 className="w-5/6 text-center text-2xl font-bold text-gray-400 md:w-auto md:text-left md:text-4xl">
        Pozovi nas, ili zakaži sastanak
      </h1>
      <div className={`-my-4 text-green-500`}>
        {status === "Molimo Vas popunite polja do kraja." ? (
          <div className="text-red-500">{status}</div>
        ) : (
          <>{status === "circ" ? <CircularProgress /> : <>{status}</>}</>
        )}
      </div>

      <div className="relative mx-4 grid grid-cols-2 gap-x-16 gap-y-8 rounded bg-gradient-to-tr from-blue-500 to-pink-300 p-8 pb-4 text-white shadow-md shadow-blue-950">
        <div className="absolute left-1/2 top-1/2 h-[calc(100%_-_2rem)] w-[1px] -translate-x-1/2 -translate-y-1/2 md:bg-gray-300"></div>

        <div className="col-span-2 flex w-full flex-col gap-4 md:col-span-1">
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <p className="text-sm">Ime i Prezime:</p>

            <input
              onChange={(e) => {
                setEmailState({
                  ...emailState,
                  ime: e.target.value,
                });
              }}
              type="text"
              className="w-full rounded bg-gray-200 p-2 text-sm text-gray-600 outline-none md:w-[20em]"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="text-sm">Email:</p>

            <input
              type="text"
              className="w-full rounded bg-gray-200 p-2 text-sm text-gray-600 outline-none md:w-[20em]"
              onChange={(e) => {
                setEmailState({
                  ...emailState,
                  email: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="col-span-2 -mt-4 flex w-full flex-col gap-1 md:col-span-1 md:mt-0">
          <p className="text-sm">Poruka:</p>

          <textarea
            onChange={(e) => {
              setEmailState({
                ...emailState,
                poruka: e.target.value,
              });
            }}
            name=""
            className="h-full min-h-[7.5em] w-full rounded bg-gray-200 p-2 text-sm text-gray-600 outline-none"
            id=""
            defaultValue={""}
          ></textarea>
        </div>
        <div
          className="col-span-2 ml-auto w-fit cursor-pointer rounded bg-gray-50 px-4 py-2 text-sm text-gray-800 md:-mt-4"
          onClick={handleSubmit}
        >
          {" "}
          Pošalji
        </div>
      </div>

      <p className="-my-4 text-gray-400">ili</p>
      <Link
        href={"tel:+381644737375"}
        className="flex items-center justify-center rounded border-2 border-gray-400 p-2 px-4 py-2 text-sm text-gray-300"
      >
        0644737375
      </Link>
    </div>
  );
}

export default Kontakt;
