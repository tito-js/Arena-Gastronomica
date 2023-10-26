import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Macarronada</h1>
        <p className="text-white xl:text-xl">
         Venha Provar a deliciosa comida do nosso País. Comida caseira de qualidade com o gostinho Brasileiro 
        </p>
        <CountDown/>
        <button className="bg-green-500 text-white rounded-md py-3 px-6">Peça Agora</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-med relative md:h-med">
        <Image src="/Macarrao.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
