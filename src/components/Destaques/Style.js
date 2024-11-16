import styled from "styled-components"

const DestaquesStyle = styled.header`
    padding: 88px 150px 0;
    background: #44617C;

    .titulo {
        color: #FFF;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    .conteudo {
        display: flex;
        justify-content: center;
        margin-top: 130px;
        margin-bottom: 50px;

        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
        .coluna1 {
            width: 35%;
            padding-right: 5%;
            border-right: 2px solid #577FA4;
        }
        
        .coluna2 {
            width: 35%;
            padding-left: 5%;
        }
    }

    .Graficopequeno1 {
        transform: scaleX(-1);
        /* transform-origin: 0 0; */
        justify-content: center;
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
    }
`

export {DestaquesStyle}