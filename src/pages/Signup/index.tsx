import Image from "next/image"
import { Container, Content } from "./styles"
import logo from '../../assets/logo.png'
import Link from "next/link"

const Signup = () => (
  <Container>
    <Content>
      <Image src={logo} alt="GoFinance" width={150} />
      <input type="text" placeholder="Nome de usuário" autoComplete="off" />
      <input type="text" placeholder="Email" autoComplete="off" />
      <input type="password" placeholder="Senha" autoComplete="off" />
      <input type="password" placeholder="Repetir Senha" autoComplete="off" />
      <button>Cadastrar</button>
      <p>Já possui uma conta? <Link href="/Signin">Entre</Link></p>
    </Content>
  </Container>
)

export default Signup