"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const data = [
  {
    id: 1,
    title: "Bebidas Refrescantes Coquetel de Diversos sabores",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Bolo de Chocolate Favorito do nosso Vinicius JR",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Deliciosa Moqueca de Peixe, tradicional do Nordeste do nosso País.",
    image: "/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    router.push('/menu');
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-yellow-50">
      {/* TEXTO CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-blue-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-green-500 text-white py-4 px-8" onClick={handleClick}>Pedir agora</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
