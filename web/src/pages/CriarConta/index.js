import logo from '../../img/Favicon.svg'
import { Form, Input, Button } from 'antd';
import {Link, useHistory } from 'react-router-dom';
import * as Styled from './CriarConta.js';



import http from '../../api';

export function CriarConta() {

    const history = useHistory();

    const onFinish = (values) => {
        console.log('Success:', values);

        if(values.password !== values.password2){
            return alert('As senhas devem ser iguais')
        }
        http.post('/users',{
            username: values.username,
            email: values.email,
            password: values.password
        })
        .then(function (response) {
            console.log(response);
            alert('Conta criada com sucesso!')
            history.push("/")
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    return(
        <Styled.Container>
            <div className='login'>
                <div className='title'>
                    <img src={logo} className='imagem'/>
                    <h1>Medicar</h1>
                </div>
                <h2>Crie sua conta</h2>
                <div className='formulario'>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        //initialValues={{ remember: true }}
                        onFinish={onFinish}
                        /* onFinishFailed={onFinishFailed} */
                        autoComplete="off"
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, /* message: 'Please input your username!' */ }]}
                        >
                            <Input placeholder="Nome"/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, /* message: 'Please input your username!' */ }]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, /* message: 'Please input your password!' */ }]}
                        >
                            <Input.Password placeholder="Senha"/>
                        </Form.Item>

                        <Form.Item
                            name="password2"
                            rules={[{ required: true, /* message: 'Please input your password!' */ }]}
                        >
                            <Input.Password placeholder="Confirmar Senha"/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Link to='/' className='cancelar'>
                                <Button type="primary" >
                                    Cancelar
                                </Button>
                            </Link>
                           
                                <Button htmlType="submit"  className='acessar'>
                                    Confirmar
                                </Button>
                           
                        </Form.Item>
                    </Form>
                </div>
            </div>
            
        </Styled.Container>
    )
}