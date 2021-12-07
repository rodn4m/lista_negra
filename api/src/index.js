import db from './db.js'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get('/tb_lista_negra/', async (req, resp) => {
    try {
        let nome = await db.tb_lista_negra.findAll();
        resp.send(nome  );
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/id_nome', async (req, resp) => {
    try {
        let nomeParam = req.body;

        let s = await db.tb_lista_negra.findOne({ where: { id_nome: nomeParam.nome } });
        if (s != null)
        return resp.send({ erro: 'Nome já existe!' });

        let r = await db.tb_lista_negra.create({
            id_nome: nomeParam.nome,
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.listen(process.env.PORT, x => console.log(`subiu na porta ${process.env.PORT}`));