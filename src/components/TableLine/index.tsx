import Image from 'next/image';
import { Container } from './styles'
import deleteIcon from '../../assets/delete.png'

interface TableLineProps {
    title: string;
    description: string;
}

export const TableLine = ({ title, description }: TableLineProps) => (
    <Container>
        <span>{title}</span>
        <span>{description}</span>
        <Image src={deleteIcon} alt="" width={24} />
    </Container>
)
