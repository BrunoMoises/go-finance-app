import React from 'react'
import { Container } from './styles'

export const DateInput = ({ title }: { title: string }) => (
    <Container>
        <h1>{title}</h1>
        <input type="date" />
    </Container>
)
