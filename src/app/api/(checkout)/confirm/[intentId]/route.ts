import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Pago!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "O pedido foi atualizado!" }),
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