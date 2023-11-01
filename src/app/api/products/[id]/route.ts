import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


//PEGAR UM PRODUTO
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
  
    try {
      const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
      return new NextResponse(
        JSON.stringify(product),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Deu algo errado!" }),
        { status: 500 }
      );
    }
  };