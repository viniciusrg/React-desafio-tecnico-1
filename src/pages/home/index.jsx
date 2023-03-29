import React, { useState } from 'react';
import Container from '../../components/Container';
import { Titulo } from './styled';
import Card from '../../components/Card';
import InputPesquisa from '../../components/InputPesquisa';
import { Usuarios } from '../../MOOK/usuários';

function Home() {
const [user, setUser] = useState(Usuarios);

  return (
    <Container>
      <Titulo>Lista de usuários</Titulo>
      <InputPesquisa user={user} setUser={setUser} placeholder='Pesquisar...'/>
      {
        user.map((user)=>{
          return <Card key={user.id} id={user.id} nome={user.nome} descricao={user.descricao} imagem={user.imagem}/>
        })
      }
    </Container>
  );
}

export default Home;
