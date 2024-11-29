import styled from "styled-components"

const TituloServicoStyle = styled.header`
    padding: 0 150px;
    margin-top: 50px;
    
    .titulo {
        color: #44617C;
        font-family: Montserrat;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: 35px; /* 87.5% */
    }

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

export {TituloServicoStyle}