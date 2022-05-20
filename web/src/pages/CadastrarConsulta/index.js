import * as Styled from './CadastrarConsulta';

import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import http from '../../api';

export function CadastrarConsulta() {

    const [especialidades, setEspecialidades] = useState(null);
    const [especialidadesConfirmacao, setEspecialidadesConfirmacao] = useState(true);
    const [medicos, setMedicos] = useState(null);
    const [medicosConfirmacao, setMedicosConfirmacao] = useState(true);
    const [datas, setDatas] = useState(null);
    const [datasConfirmacao, setDatasConfirmacao] = useState(true);
    const [horas, setHoras] = useState(null);
    const history = useHistory();
    
    useEffect(() => {
        http.get('/especialidades')
        .then(function (response) {
            console.log(response);
            setEspecialidades(response.data); 
        })
        .catch(function (error) {
            console.log(error);
        });

        
    },[])

    useEffect(() => {
        http.get('/medicos/?search=&especialidade=1')
        .then(function (response) {
            console.log(response);
            setMedicos(response.data); 
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    useEffect(() => {
        http.get('/agendas')
        .then(function (response) {
            console.log(response.data);
            setDatas(response.data); 
            setHoras(response.data[0].horarios)
            
        })
        .catch(function (error) {
            console.log(error);
        });
        
    },[])

    function cadastrar(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data.data)
        console.log(data.hora)
        http.post('/consultas', {
            agenda_id: data.data,
            horario: data.hora 
        })
        .then(function (response) {
            console.log(response.data);
            alert('Consulta agendada')
            history.push('/Home')
        })
        .catch(function (error) {
            console.log(error);
            alert('Erro ao cadastrar consulta, tente novamente')
        });
    }

    function liberarMedico(){
        setEspecialidadesConfirmacao(false)
    }

    function liberarData(){
        setMedicosConfirmacao(false)
    }

    function liberarHoras(){
        setDatasConfirmacao(false)
    }

    return (
        <Styled.Container>
            <div className='formulario'>
                <h1>Nova Consulta</h1>
                <form onSubmit={cadastrar}>
                    <select name='especialidade' placeholder='Especialidade' onChange={liberarMedico}>
                        {especialidades?.map(especialidade => {
                            return <option 
                                        key={especialidade.id} 
                                        value={especialidade.id}>
                                            {especialidade.nome}
                                    </option>
                        })}
                    </select>
                    <select 
                        placeholder='Medico' 
                        name='medico' 
                        disabled={especialidadesConfirmacao}
                        onChange={liberarData}
                    >
                        {medicos?.map(medico => {
                            return <option 
                                        key={medico.id} 
                                        value={medico.id}>
                                            {medico.nome}
                                    </option>
                        })}
                    </select>
                    <select 
                        placeholder='Data' 
                        name='data'
                        disabled={medicosConfirmacao}
                        onChange={liberarHoras}
                    >
                        {datas?.map(data => {
                            return <option 
                                        key={data.id} 
                                        value={data.id}>
                                            {data.dia}
                                        </option>
                        })}
                    </select> 
                   
                    <select 
                        placeholder='Hora' 
                        name='hora'
                        disabled={datasConfirmacao}
                        
                    >
                        {horas?.map(hora => {
                            return <option value={hora}>
                                        {hora}
                                    </option>
                        })}
                    </select>
                    <div className='botoes'>
                        <Link to='/Home'>
                        <button className='botaoCancelar'>Cancelar</button>
                        </Link>
                        <button className='botaoConfirmar' type="submit">Confirmar</button>
                    </div>
                </form>
            </div>
            
            
        </Styled.Container>
        
    )
}