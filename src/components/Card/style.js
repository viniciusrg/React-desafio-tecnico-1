import styled from "styled-components"

export const Box = styled.div`
    width: 100%;
    height: 120px;
    background-color: #222;
    border-radius: .8rem;
    padding: 0rem 1rem;
    display: flex;
    justify-content: baseline;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    border: 2px solid var(--cor-primaria);
    cursor: pointer;
`

export const DivImagem = styled.div`
    width: auto;
`

export const ImagemPerfil = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, .5) 0px 0px 6px;
`

export const DivInfos = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: space-between;
    align-items: center;
h3{
    color: var(--cor-primaria);
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: rgba(0, 0, 0, .5) 0px 0px 1px;
}

h4{
    font-size: 1rem;
    font-weight: 400;
}
`
