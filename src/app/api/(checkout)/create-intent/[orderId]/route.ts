import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  let paymentIntent; 

  if (order && stripe && typeof order.price === 'number') {
    paymentIntent = await stripe.paymentIntents.create({
      amount: order.price * 100,
      currency: "brl",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  }

  if (paymentIntent) {
    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: { intent_id: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  }

  return new NextResponse(
    JSON.stringify({ message:"Pedido não existe!" }),
    { status: 404 }
  );
}
