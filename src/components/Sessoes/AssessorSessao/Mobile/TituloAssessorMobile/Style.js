import styled from "styled-components"

const TituloAssessorMobileStyle = styled.header`
    display: none;
    padding: 0 10px;
    margin-top: 50px;
    margin-bottom: 70px;

    width: 100%;
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