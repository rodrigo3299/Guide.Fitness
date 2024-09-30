import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(express.json());


mongoose.connect('mongodb+srv://rodrigo:rodrigo3277@cluster0.mx80r.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro de conexão:', err));


app.post('/login', (req, res) => {
  
  res.send('Endpoint de login');
});


app.get('/login', (req, res) => {
  res.send('Página de login'); 
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
