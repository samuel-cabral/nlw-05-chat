import express from 'express';

const app = express();

app.get('/users', (request, response) =>
  response.json({
    message: 'HEllo NLW 05!',
  }),
);

app.post('/', (request, response) =>
  response.json({
    message: 'usuário salvo com sucesso!',
  }),
);

app.listen(3333, () => {
  console.log('Server is running on 3333 port!');
});
