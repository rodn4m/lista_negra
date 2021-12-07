import { useState, useEffect } from 'react'
import Api from '../../service/api';
import { Container } from './styled'

const api = new Api();

export default function Lista() { 

const [usuarios, setUsuarios] = useState([]);
const [nome, setNome] = useState('');

    const Listar = async() => {
        
        let r = await api.listarNomes();
        setUsuarios(r);
    }

    const inserir = async () => {
        if (nome !== '') {
            let r = await api.inserirNomes(nome);
            if (r.erro) {
                alert('Usuário já existe!');
            }
            else {
                alert('Usuário inserido!');
                setNome('');
            }
        } else {
            alert('Nome inválido')
        }
        }

        useEffect(() => { 
            Listar();
          }, [usuarios])

    return (
        <Container>
            <div className="box">
                <div className="titulo">Novo</div>
                <div className="subtitulo">Nome<input type="text" value={nome} onChange={e => setNome(e.target.value)}/><button onClick={inserir}>Ok</button></div>
            </div>

            <div className="lista">Lista<button>OK</button></div>
                <thead>
                    <th>id</th>
                    <th>id_nome</th>
                </thead>
        {usuarios.map((item) =>
                <tr className="cor-alternada">
                <td> {item.id} </td>
                <td> {item.id_nome} </td>
            </tr>
        )}
        </Container>
    )

}