import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


// ALTERAR O STATUS DE UM PEDIDO
export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
  
    try {
      const body = await req.json();
  
      await prisma.order.update({
        where: {
          id: id,
        },
        data: { status: body },
      });
      return new NextResponse(
        JSON.stringify({ message: "O pedido foi alterado!" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Algo deu errado!" }),
        { status: 500 }
      );
    }
  };