import { ReactNode } from 'react';
import { Container, Header, Main } from './styles'

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => {
  return (
    <Container>
      <Header>

      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  )
}

export default AppTemplate