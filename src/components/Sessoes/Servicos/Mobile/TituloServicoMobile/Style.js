import styled from "styled-components"

const TituloServicoMobileStyle = styled.header`
    display: none;
    margin-top: 10px;
    text-align: center;
    flex-direction: column;
    font-family: Montserrat, sans-serif;
    align-items: center;
    justify-content: center;
    
    .titulo {
        padding: 10px 10px;
        width: 90%;
        color: #44617C;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: 35px; /* 87.5% */
    }


    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {TituloServicoMobileStyle}