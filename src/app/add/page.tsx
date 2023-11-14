"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File>();

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setFile(item);
  };

  const upload = async () => {
    if (!file) {
      throw new Error("Nenhum arquivo selecionado para upload.");
    }
  
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      console.log("Iniciando upload...");
      const response = await fetch("https://api.imgbb.com/1/upload?key=6953750a78ee26d27c47fbfc39c4e639", {
        method: "POST",
        body: formData,
      });

      console.log("Resposta do upload:", response);

      if (!response.ok) {
        throw new Error("Erro durante o upload da imagem para o ImgBB");
      }
  
      const responseData = await response.json();
      console.log("Dados da resposta:", responseData);

      // Retorna a URL da imagem no ImgBB
      return responseData.data.url;
    } catch (error) {
      console.error("Erro durante o upload:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const url = await upload();
      console.log("URL da imagem:", url);

      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        }),
      });

      console.log("Resposta do servidor:", res);

      const data = await res.json();
      console.log("Dados do servidor:", data);

      router.push(`/product/${data.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center text-green-500">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
        <h1 className="text-4xl mb-2 text-blue-300 font-bold">
          Adicionar novo produto
        </h1>
        <div className="w-full flex flex-col gap-2 ">
          <label
            className="text-sm cursor-pointer flex gap-4 items-center"
            htmlFor="file"
          >
            <Image src="/upload.png" alt="" width={30} height={20} />
            <span>Upload Imagem</span>
          </label>
          <input
            type="file"
            onChange={handleChangeImg}
            id="file"
            className="hidden"
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Titulo</label>
          <input
            className="ring-1 ring-blue-500 p-4 rounded-sm placeholder:text-blue-400 outline-none"
            type="text"
            placeholder="Produto"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Descrição</label>
          <textarea
            rows={3}
            className="ring-1 ring-blue-500 p-4 rounded-sm placeholder:text-blue-400 outline-none"
            placeholder="Descrição do produto."
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Preço</label>
          <input
            className="ring-1 ring-blue-500 p-4 rounded-sm placeholder:text-blue-400 outline-none"
            type="number"
            placeholder="R$0"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Categoria</label>
          <input
            className="ring-1 ring-blue-500 p-4 rounded-sm placeholder:text-blue-400 outline-none"
            type="text"
            placeholder="pratos/sobremesas/bebidas"
            name="catSlug"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Opções</label>
          <div className="flex">
            <input
              className="ring-1 ring-blue-500 p-4 rounded-sm placeholder:text-blue-400 outline-none"
              type="text"
              placeholder="Pequeno/Médio/Grande."
              name="title"
              onChange={changeOption}
            />
            <input
              className="ring-1 ring-blue-500 p-4 rounded-sm placeholder:text-blue-400 outline-none"
              type="number"
              placeholder="Preço Adicionais"
              name="additionalPrice"
              onChange={changeOption}
            />
            <button
              className="bg-green-500 p-2 text-white"
              onClick={() => setOptions((prev) => [...prev, option])}
            >
              Adicionar Opções
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="p-2  rounded-md cursor-pointer bg-gray-200 text-gray-400"
                onClick={() =>
                  setOptions((prev) =>
                    prev.filter((item) => item.title !== opt.title)
                  )
                }
              >
                <span>{opt.title}</span>
                <span className="text-xs"> (+ R${opt.additionalPrice})</span>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 p-4 text-white w-48 rounded-md relative h-14 flex items-center justify-center"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddPage;