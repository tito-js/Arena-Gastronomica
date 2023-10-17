import ProductsRouter from '@/routers/ProdutosRouter';
import express from 'express';

const app = express();

app.get('/api', function (request, response) {
  response.status(200).send('Vamo velho');
});

app.use('/api/produtos', ProductsRouter);

export default app;