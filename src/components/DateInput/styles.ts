import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1 {
        color: ${(props) => props.theme.colors.primary};
        font-size: 16px;
        font-weight: bold;
    }
`