import React, { useState } from 'react'
import loginImage2 from '../../assets/loginImage2.jpg'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, FormContainer, FormContent, PhotoLogin } from './styles';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth()
    const navigate = useNavigate()

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try{
            await auth.authenticate(email, password)
            navigate('/profile')
          }catch(error){
              alert('login inválido')
          }
    }

    return (
        <Container>
            <FormContent onSubmit={handleOnSubmit}>
                <div className="content_top">
                    <h1>Logue com sua conta!</h1>
                </div>
                <FormContainer>
                    <label style={{ marginBottom: '6px', fontWeight: '500' }} htmlFor='email'>Email:</label>
                    <Input
                        name='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label style={{ marginBottom: '6px', fontWeight: '500' }} htmlFor='password'>Senha:</label>
                    <Input
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </FormContainer>
                <Button
                    type='submit'
                    color='#6EA9FA'
                    border='1px solid #ccc'
                    width='130px'
                    height='50px'
                    radius='5px'
                >
                    Entrar
                </Button>
                <Link to="/create" style={{ marginTop: '20px' }}>Não possui uma conta? Cadastre-se</Link>
            </FormContent>
            <PhotoLogin>
                <img src={loginImage2} alt="Imagem login" />
            </PhotoLogin>
        </Container>

    )
}

export default Login