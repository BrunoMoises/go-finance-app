import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.black1};
    padding: 40px;

    p {
        margin: 0 auto;
    }

    img {
        margin-bottom: 30px;
    }

    input {
        width: 491px;
        height: 57px;
        border-radius: 8px;
        ::-webkit-input-placeholder {
            font-size: 20px;
        }
    }
  
    span {
      margin: 0 auto;
    }

    button {
        width: 491px;
        height: 51px;
        padding: 0;
        margin: 0 auto;
    }

    a {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;

        &:hover {
            color: ${(props) => props.theme.colors.secondary};
            text-decoration: underline;
        }
    }
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
`

export const ErrorMessage = styled.span`
    color: red;
    font-size: 16px;
`