import { ReactNode } from 'react';
import { Body, Container, Header } from './styles'

interface TableDetailsProps {
    children: ReactNode;
}

export const TableDetails = ({ children }: TableDetailsProps) => (
    <Container>
        <Header>
            <h1>Título</h1>
            <h1>Descrição</h1>
        </Header>
        <Body>
            {children}
        </Body>
    </Container>
)
