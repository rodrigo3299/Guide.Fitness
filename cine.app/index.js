import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(express.json()); // Para analisar JSON no corpo da requisição

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://rodrigo:rodrigo3277@cluster0.mx80r.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro de conexão:', err));

// Endpoint de login (POST)
app.post('/login', (req, res) => {
  // Seu código de autenticação aqui
  res.send('Endpoint de login');
});

// Endpoint para acessar a página de login (GET)
app.get('/login', (req, res) => {
  res.send('Página de login'); // Pode ser um HTML ou outro conteúdo
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
