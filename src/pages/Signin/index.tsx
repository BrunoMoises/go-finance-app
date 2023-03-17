import Image from "next/image"
import { Container, Content } from "../../styles/auth/auth.styles"
import logo from '../../assets/logo.png'
import Link from "next/link"
import { useState } from "react"
import useLogin from "@/src/Hooks/useLogin"

const Signin = () => {
  const { login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => login({ username, password });
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        <input type="text" placeholder="Nome de usuário" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Senha do usuário" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signIn}>Entrar</button>
        <p>Ainda não possui uma conta? <Link href="/Signup">Cadastre-se</Link></p>
      </Content>
    </Container>
  )
}

export default Signin