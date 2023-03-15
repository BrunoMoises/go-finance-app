import { ReactNode } from 'react';
import { Header } from '../Header';
import { Container, Main } from './styles'

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => {
  return (
    <Container>
        <Header />
      <Main>
        {children}
      </Main>
    </Container>
  )
}

export default AppTemplate