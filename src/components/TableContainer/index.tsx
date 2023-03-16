import { ReactNode } from 'react';
import { TableNavBar } from '../TableNavBar';
import { Container } from './styles'

interface TableContainerProps {
    children: ReactNode;
}

export const TableContainer = ({ children }: TableContainerProps) => (
    <Container>
        <TableNavBar />
        {children}
    </Container>
)
