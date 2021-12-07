import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})
export default class Api {

async listarNomes() {
let r = await api.get(`/tb_lista_negra/`);
return r.data;
}

async inserirNomes(nome) {
    let r = await api.post(`/id_nome/`, { nome });
    return r.data;
}
}