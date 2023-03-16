import Image from 'next/image'
import React from 'react'
import { Container } from './styles'
import searchIcon from '../../assets/search.png'

export const SearchBar = () => (
    <Container>
        <input type="search" placeholder='Pesquisar' />
        <Image src={searchIcon} alt="Moeda" width={12} />
    </Container>
)
