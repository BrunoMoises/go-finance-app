import Image from "next/image"
import { Container, Content, ErrorMessage, FormContainer } from "../../styles/auth/auth.styles"
import logo from '../../assets/logo.png'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import api from "@/src/services/api"
import useLogin from "@/src/Hooks/useLogin"
import {toast} from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [responseErrorMessage, setResponseErrorMessage] = useState("");
  const buttonLabel = isLoading ? "Carregando..." : "Cadastrar";
  const router = useRouter()
  const passwordIsValid = password == confirmPassword;
  const { login } = useLogin();
  const verifyEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const cleanErrors = () => {
    setHasError(false);
    setPasswordErrorMessage("");
    setEmailErrorMessage("");
    setResponseErrorMessage("");
  }
  const signup = async () => {
    const emailIsValid = verifyEmail(email);
    try {
      cleanErrors();
      setIsLoading(true);
      if (!emailIsValid) {
        setHasError(true);
        setEmailErrorMessage("O email não é válido...");
        throw Error();
      }
      if (!passwordIsValid) {
        setHasError(true);
        setPasswordErrorMessage("As senhas não são iguais...");
        throw Error();
      }
      await api.post("/user", {
        username,
        email,
        password,
      });
      await login({ username, password });
      router.push("/");
    } catch (err: any) {
      toast.error("Não foi possível efetuar cadastro.")
      const userAlreadyExists = err.response?.status === 500
      const hasEmptyInput = err.response?.status === 400
      if (userAlreadyExists)
        setResponseErrorMessage("Já existe um usuário cadastrado com este email ou username.");
      if (hasEmptyInput)
        setResponseErrorMessage("É necessário preencher todos os campos para se cadastrar.");
    } finally {
      setIsLoading(false);
    }
  }
  const InputProps = [
    {
      type: "text",
      placeholder: "Nome de usuário",
      setState: setUsername,
      errorMessage: ''
    },
    {
      type: "text",
      placeholder: "Email",
      setState: setEmail,
      errorMessage: emailErrorMessage
    },
    {
      type: "password",
      placeholder: "Senha",
      setState: setPassword,
      errorMessage: ''
    },
    {
      type: "password",
      placeholder: "Confirmar senha",
      setState: setConfirmPassword,
      errorMessage: passwordErrorMessage
    }
  ]
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        <FormContainer>
          {InputProps.map((prop) => (
            <>
              <input
                key={prop.placeholder}
                type={prop.type}
                placeholder={prop.placeholder}
                onChange={(e) => prop.setState(e.target.value)}
              />
              {hasError && <ErrorMessage>{prop.errorMessage}</ErrorMessage>}
            </>
          ))}
          <button onClick={signup}>{buttonLabel}</button>
          <ErrorMessage>{responseErrorMessage}</ErrorMessage>
          <p>Já possui uma conta? <Link href="/Signin">Entre</Link></p>
        </FormContainer>
      </Content>
    </Container>
  )
}

export default Signup