import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});