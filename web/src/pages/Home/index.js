import logo from '../../img/Favicon.svg'
import * as Styled from './home.js';
import {Link, useHistory} from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons'
import img from '../../img/Vector.svg'
import { useState, useEffect } from 'react';
import http from '../../api';

export function Home() {
    const [consultas, setConsultas] = useState();
    const history = useHistory();

    useEffect(() => {
        http.get('/consultas')
        .then(function (response) {
            console.log(response);
            setConsultas(response.data); 
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    function desmarcar(id) {
        http.delete('/consultas/' + id)
        .then(function (response) {
            console.log(response);
            alert('Consulta Desmarcada')
            http.get('/consultas')
                .then(function (response) {
                    console.log(response);
                    setConsultas(response.data); 
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
            alert('Erro ao desmarcar consulta')
        });
    }

    return (
        <Styled.Container>
            <div className='menu'>
                <div className='logo'>
                    <img src={logo} className='imagem'/>
                    <h1>Medicar</h1>
                </div>
                <div className='menuDesconectar'>
                    <h1>Jonathan</h1>
                    <Link to='/'>
                        <button>Desconectar</button>
                    </Link>
                </div> 
            </div>
            <div className='conteudo'>
                <div className='cabecalhoTabela'>
                    <h1>Consultas Clinicas</h1>
                    <Link to='CadastrarConsulta'>
                        <button>
                            <img src={img} className='imagem'/>
                            Nova Consulta
                        </button>
                    </Link>
                </div>
                <div className='menuTabela'>
                    <h1>ESPECIALIDADE</h1>
                    <h1>PROFISSIONAL</h1>
                    <h1>DATA</h1>
                    <h1>HORA</h1>
                </div>
                <div >
                    {consultas?.map((consulta) => 
                        <div key={consulta.id} className='conteudoTabela'>
                            <span>{consulta.medico.especialidade.nome}</span>
                            <span>{consulta.medico.nome}</span>
                            <span>{consulta.dia}</span>
                            <span>{consulta.horario}</span>
                            <div className='acoes' onClick={() => desmarcar(consulta.id)}>
                                <CloseOutlined />
                                <h1>Desmacar</h1>
                            </div>
                            
                        </div>
                    )}
                </div> 
            </div>
        </Styled.Container>
    )
}
