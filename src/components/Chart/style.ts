import styled from 'styled-components'

export const Container = styled.div`
    height: 613;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

interface SubtitleProps {
    color: string;
}

export const Subtitle = styled.div<SubtitleProps>`
    display: flex;
    gap: 15px;

    div {
        background-color: ${props => props.color};
        width: 20px;
        height: 22px;
    }
`