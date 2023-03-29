import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../../components/Card';
import Container from '../../components/Container';
import { Usuarios } from '../../MOOK/usuários';

export default () => {
    const location = useLocation();
    const idParams = new URLSearchParams(location.search).get('id');

    const [nome, imagem, telefone, descricao, idade] = [Usuarios[idParams].nome, Usuarios[idParams].imagem, Usuarios[idParams].telefone, Usuarios[idParams].descricao, Usuarios[idParams].idade]

    return(
        <Container>
            <Card id={idParams} nome={nome} imagem={imagem} telefone={telefone} descricao={descricao} idade={idade} />
            <Link to='/'><h4>Voltar</h4></Link>
        </Container>
    )
}
