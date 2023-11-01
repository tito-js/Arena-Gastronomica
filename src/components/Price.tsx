"use client";

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const { addToCart } = useCartStore();

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])

  
  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  const handleCart = ()=>{
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    })
    toast.success("O produto foi adicionado ao carrinho!")
  }


  return (
    <div className="flex flex-col gap-4">
       <h2 className="text-2xl font-bold">R${total}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
      {product.options?.length &&
          product.options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-blue-400 rounded-md"
            style={{
              background: selected === index ? "rgb(59 130 246)" : "white",
              color: selected === index ? "white" : "black",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTIDADE E ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTIDADE */}
        <div className="flex justify-between w-full p-3 ring-1 ring-blue-500">
          <span>Quantidade</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="uppercase w-56 bg-green-500 text-white p-3 ring-1 ring-green-500"  onClick={handleCart}>
          add no carrinho
        </button>
      </div>
    </div>
  );
};

export default Price;
