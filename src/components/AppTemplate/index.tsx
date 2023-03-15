import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Header } from '../Header';
import { Container, Main } from './styles'

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => {
  const { pathname } = useRouter()
  const isAuthPages = pathname == '/Signin' || pathname == '/Signup'
  return (
    <Container>
      {!isAuthPages && <Header />}
      <Main>
        {children}
      </Main>
    </Container>
  )
}

export default AppTemplate