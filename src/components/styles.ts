import styled from "styled-components"
import { colors } from "styles/createGlobalStyle"

export const Cabecalho = styled.header`
    display: flex;
    border-bottom: 0.5rem solid ${ colors.secondary};
    picture svg {
        height: 6rem;
        width: 6rem;
    } 
`