import styled from "styled-components"

const TituloAssessorStyle = styled.header`
    padding: 0 150px;
    
    margin-top: 50px;
    margin-bottom: 70px;
    
    color: #44617C;
    font-family: Montserrat;
    font-size: var(--titulo);
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export {TituloAssessorStyle}