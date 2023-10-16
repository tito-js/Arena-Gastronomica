import express from 'express';

const ProdutosRouter = express.Router();

ProdutosRouter.get('/', function (request, response) {
  response.status(200).json([
    {
      id: 1,
      nome: 'Suco',
      preco: 5.5
    },
    {
      id: 2,
      nome: 'Salgado',
      preco: 6.5
    },
  ]);
});

export default ProdutosRouter;