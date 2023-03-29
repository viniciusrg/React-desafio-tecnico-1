import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 720px;
    height: 100vh;
    overflow-y: scroll;
    min-height: 95vh;
    background-color: var(--cor-background);
    border-radius: 0.8rem;
    box-shadow: rgba(255, 255, 255, .2) 0px 0px 1px 1px;
    padding: 1rem;
`

export default ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}