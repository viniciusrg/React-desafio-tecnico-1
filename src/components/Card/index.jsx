import React from 'react';
import { Link } from 'react-router-dom';
import { Box, DivImagem, DivInfos, ImagemPerfil } from './style';


export default ({ nome, imagem, descricao, id, idade, telefone }) => {
    return (
        <Link to={`/detalhes?id=${id}`}>
            <Box>
                <DivImagem>
                    <ImagemPerfil src={imagem} alt='Pessoa' />
                </DivImagem>
                <DivInfos>
                    <div>
                        <h3>{nome}</h3>
                        <h4>{descricao}</h4>

                    </div>
                    <div>
                        <p>{idade}</p>
                        <p>{telefone}</p>
                    </div>
                </DivInfos>
            </Box>
        </Link>
    )
}
