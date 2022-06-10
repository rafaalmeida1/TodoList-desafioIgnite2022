import { Container, Content } from './style';
import logoImg from '../../assets/Logo.svg'

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo Todo" />
            </Content>
        </Container>
    )
}