import {useState} from 'react';
import axios from "axios";
import {Form} from "@unform/web";
import Input from "../../components/form/input";

const Login = () => {

    const [hasError, setHasError] = useState('hidden');

    const doLogin = (data) => {
        axios.post('http://localhost:3004/login', {
            email: data.email,
            password: data.password
        }).then( res => {
            setHasError('hidden');
            localStorage.setItem('user', res.data.email);
            localStorage.setItem('isLogged', true);
            window.location = '/';
        }).catch(err => {
            setHasError('hasError');
            localStorage.removeItem('isLogged');
        });

    };

    return (
        <Form onSubmit={doLogin}>
            <div className="App">
                <div className="texto">
                    <h1 className="f1">Seja bem-vindo</h1>
                    <h2 className="f2">Para continuar<br/> por favor faça login</h2>
                    <h1 className="logo">Logotipo</h1>
                </div>

                <div className="div-login">

                    <p>Utilize o painel agora<br/>mesmo</p>

                    <div className={hasError}>
                        <span>Usuário ou senha inválidos</span>
                    </div>

                    <Input name="email" placeholder="Digite o seu e-mail"/>
                    <Input name="password" type="password" placeholder="Digite a sua senha"/>




                    <p id="remember">Esqueci minha senha</p>
                    <button type="submit">Login</button>

                </div>

            </div>
        </Form>
    )
};



export default Login;