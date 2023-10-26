import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";


// BUSCAR TODAS CATEGORIAS
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Algo deu errado!" }),
      { status: 500 }
    );
  }
};