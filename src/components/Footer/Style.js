import styled from "styled-components"

const FooterStyle = styled.header`
    padding: 50px 150px;
    
    .dv-footer {
        background: white;
        padding: 50px 150px;
    }

    .dv-fr-conteudo {
        display: flex;
        justify-content: space-between;
        border-top: 4px solid #577FA4;
        padding-top: 20px;
    }

    .dv-fr-co-nav {
        display: flex;
        gap: 50px;
        & a{
            color: #44617c;
            font-size: 24px;
            font-family: Montserrat, sans-serif;
            font-weight: 400;
            word-wrap: break-word;
        }
    }

    .dv-fr-co-logo {

    }

    .dv-fr-copyright {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export {FooterStyle}