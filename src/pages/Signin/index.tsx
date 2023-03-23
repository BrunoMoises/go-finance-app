import Image from "next/image"
import { Container, Content, ErrorMessage, FormContainer } from "../../styles/auth/auth.styles"
import logo from '../../assets/logo.png'
import Link from "next/link"
import { useState } from "react"
import useLogin from "@/src/Hooks/useLogin"

const Signin = () => {
  const { login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = () => {
    try {
      login({ username, password })
    } catch (error: any) {
      const userNotFound = error.response?.status === 404;
      if (userNotFound)
        setErrorMessage("Usuário e/ou senha não encontrado.");
    }
  }
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        <FormContainer>
          <input type="text" placeholder="Nome de usuário" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Senha do usuário" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signIn}>Entrar</button>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <p>Ainda não possui uma conta? <Link href="/Signup">Cadastre-se</Link></p>
        </FormContainer>
      </Content>
    </Container>
  )
}

export default Signin