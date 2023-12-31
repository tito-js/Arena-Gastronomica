"use client"

import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
import { useRouter } from 'next/navigation';

const Offer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/menu');
  };


  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXTO CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Quinta-Feira do Macarrão</h1>
        <p className="text-white xl:text-xl">
          30% de desconto em todos os pratos que tem macarrão
        </p>
        <CountDown/>
        <button className="bg-green-500 text-white rounded-md py-3 px-6" onClick={handleClick}>Pedir Agora</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
      </div>
    </div>
  );
};

export default Offer;
