import React from 'react'
import Button from '../Button'
import { Container, Nav, NavItem, NavMenuUl } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'

const HeaderNav: React.FC = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = async () => {
       try{
            auth.logout()
            navigate('/login')
       }catch(error){
           alert('Erro ao deslogar')
       }
    }

    return (
        <Container>
            <Nav>
                <NavMenuUl>
                    <NavItem>
                        Bem-vindo(a)
                    </NavItem>
                    <NavItem>
                        <Button
                            type='button'
                            color='#ccc'
                            radius='5px'
                            height='50px'
                            border='none'
                            width='120px'
                            onClick={handleLogout}
                        >
                            Sair
                        </Button>
                    </NavItem>
                </NavMenuUl>
            </Nav>
        </Container>
    )
}

export default HeaderNav