import { Prisma, PrismaClient } from "@prisma/client";
import express from 'express';

const ProdutosRouter = express.Router();

ProdutosRouter.get("/", (request, response ) => {
  const client = new PrismaClient();
  client.product.findMany()
  .then((produtos) => {
      response.status(200).json(produtos);
  })
  .catch((erro) => {
      response.status(400).json(erro);
  });
});

ProdutosRouter.get("/:id" , (request, response) => {
  const id = +request.params.id;

  if (isNaN(id)) {
      response.status(400).send("id isNaN");
  } else {
      const client = new PrismaClient();
      client.product.findUnique({where: {id: id}})
      .then((produto) => {
          if (produto === null) {
              response.status(404).send("not found")
          } else {
              response.status(200).json(produto);
          }
      })
      .catch((erro) => {
          response.status(404).json(erro);
      });
  }
});

ProdutosRouter.post("/", (request, response) => {
  if ((request.body.title === undefined) || (request.body.price === undefined)) {
      response.status(400).send("campos não especificados");
  } else {
      const client = new PrismaClient();
      client.product.create({ data: request.body})
      .then((produto) => {
          response.status(201).send(`${produto.id}`);
      })
      .catch((erro) => {
          response.status(500).json(erro);
      });
  }
});

ProdutosRouter.put("/:id", (request, response) => {
  const id = +request.params.id;

  if (isNaN(id)) {
      response.status(400).send("id não numerico")
  } else if ((request.body.nome === undefined) || (request.body.preco === undefined)) {
      response.status(400).send("campos não especificados");
  } else {
      const client = new PrismaClient();
      client.product.update({
          where: {id},
          data: request.body
      })
      .then(() => {
              response.status(200).end();
      })
      .catch((erro) => {
          if (erro instanceof Prisma.PrismaClientKnownRequestError) {
              response.status(404).send("not found");
          }
          response.status(500).json(erro);
      });
  }
});

ProdutosRouter.delete("/:id", (request, response) => {
  const id = +request.params.id;

  if(isNaN(id)) {
      response.status(400).send("id não numerico")
  } else {
      const client = new PrismaClient();
      client.product.delete({where: {id}})
      .then(() => {
          response.status(200).end();
      })
      .catch((erro) => {
      if (erro instanceof Prisma.PrismaClientKnownRequestError) {
          response.status(404).send("not found");
      }
          response.status(500).json(erro);
      });
  }
});


export default ProdutosRouter;