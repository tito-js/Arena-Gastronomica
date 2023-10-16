import { PrismaClient } from '@prisma/client';
import express from 'express';

const ProdutosRouter = express.Router();

ProdutosRouter.get("/", (request, response ) => {
  const client = new PrismaClient();
  client.produto.findMany()
  .then((produtos) => {
      response.status(200).json(produtos);
  })
  .catch((erro) => {
      response.status(400).json(erro);
  });
});

ProdutosRouter.post("/", (request, response) => {
  if ((request.body.nome === undefined) || (request.body.preco === undefined)) {
      response.status(400).send("campos não especificados");
  } else {
      const client = new PrismaClient();
      client.produto.create({ data: request.body})
      .then((produto) => {
          response.status(201).send(`${produto.id}`);
      })
      .catch((erro) => {
          response.status(500).json(erro);
      });
  }
});

export default ProdutosRouter;