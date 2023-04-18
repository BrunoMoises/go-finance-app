import { ReactNode } from 'react';
import { Container } from './styles'

interface TableContainerProps {
    children: ReactNode;
}

export const TableContainer = ({ children }: TableContainerProps) => (
    <Container>
        {children}
    </Container>
)
