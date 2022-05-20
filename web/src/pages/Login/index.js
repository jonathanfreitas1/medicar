import { useContext } from 'react';
import logo from '../../img/Favicon.svg'
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import * as Styled from './login.js';
import history from '../../history';
import http from '../../api';
import { useHistory } from 'react-router-dom'
import StoreContext from '../../components/Store/Context';
import { useEffect } from 'react';




export function Login() {
    const {setToken} = useContext(StoreContext);
    const history = useHistory();

    /* useEffect(() =>{
        localStorage.setItem('token', null)
    },[]) */

    async function onFinish(values) {
        console.log('Success:', values);
        await http.post('/users/login',{
            username: values.username,
            password: values.password
        })
        .then(function (response) {
            const token = response.data
            //localStorage.setItem('token', token)
            console.log(response.data);
            setToken(token.token)
            history.push('/Home')
            
        })
        .catch(function (error) {
            console.log(error);
            alert('Senha ou Login incorreto')
        });

        //console.log(localStorage.getItem('token'))
    };
    return(
        <Styled.Container>
            <div className='login'>
                <div className='title'>
                    <img src={logo} className='imagem'/>
                    <h1>Medicar</h1>
                </div>
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
                            <Input placeholder="Email ou Login"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, /* message: 'Please input your password!' */ }]}
                        >
                            <Input.Password placeholder="Senha"/>
                        </Form.Item>
                        

                        <Form.Item  valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Lembrar minha senha</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Link to="/CriarConta">
                                <Button>
                                    Criar Conta
                                </Button>
                            </Link>
                            
                                <Button htmlType="submit" className='acessar'>
                                    Acessar
                                </Button>
                            
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Styled.Container>
    )
}
