"use client";

import { OrderType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success("O status do pedido foi alterado!")
  };

  if (isLoading || status === "loading") return "Loading...";

  return (
    <></>
  );
};
export default OrdersPage;