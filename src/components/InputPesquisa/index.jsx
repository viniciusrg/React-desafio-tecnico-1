import React, { useState } from 'react';
import styled from 'styled-components';
import { Usuarios } from '../../MOOK/usuários'

const Input = styled.input`
    width: 100%;
    height: 45px;
    background-color: inherit;
    border: 2px solid var(--cor-font);
    border-radius: .8rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: var(--cor-font);
    padding: 0rem 1rem;

    ::placeholder{
        color: var(--cor-font);
    }
`

export default ({ placeholder, user, setUser }) => {
    
    const handleInput = (e) => {
        const valor = (e.target.value);
            const valorInput = valor.toLocaleLowerCase();
            const listaFiltrada = Usuarios.filter(usuario => usuario.nome.toLocaleLowerCase().includes(valorInput));
            setUser(listaFiltrada);
    }

    return (
        <Input onChange={handleInput} placeholder={placeholder} type='text' />
    )
}
