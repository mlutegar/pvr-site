import styled from "styled-components"

const TituloAssessorMobileStyle = styled.header`
    display: none;
    margin-top: 50px;
    
    text-align: center;
    flex-direction: column;
    
    color: #44617C;
    font-family: Montserrat,sans-serif;
    font-size: var(--titulo);
    font-style: normal;
    font-weight: 600;
    line-height: normal;


    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {TituloAssessorMobileStyle}