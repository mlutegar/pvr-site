import styled from "styled-components"

const HeaderMobileStyle = styled.header`
    font-family: Montserrat, serif;
    font-size: var(--corpo);
    font-weight: 400;
    display: none;
    padding-top: 20px;

    .menuLang {
        margin-right: 45px;
        padding-bottom: 300px;
    }

    .Mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 35px;
        max-width: 1920px;
    }

    img {
        width: 100px;
    }

    .center {
        gap: 50px;
        font-size: var(--subtitulo);
    }

    .right {
        gap: 0;
        display: flex;
    }

    .buggerMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        max-width: 1920px;
    }

    svg {
        width: 45px;
        height: 45px;
        color: #44617C;
    }

    .ativo {
        display: flex;
    }

    .desativo {
        display: none;
    }

    .menuMobile {
        z-index: 1;
        top: 0;
        right: 0;
        position: fixed;
        width: 100%;
    }

    .fundoPreto {
        background: rgba(0, 0, 0, 0.44);
        width: 25%;
    }

    .fundoBranco {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        background: rgb(255, 255, 255);
        width: 75%;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .menuItens {
        display: flex;
        flex-direction: column;
        font-size: var(--subtitulo);
        font-weight: 400;
        font-family: Montserrat, serif;
        text-align: center;
        padding: 60px 46px;
        gap: 63px;
        align-items: flex-end;
    }

    .mobile {
        display: flex;
    }

    .botaoFechar {
        display: flex;
        justify-content: flex-end;
        /* height: 190px; */
        /* padding: 10px 100px; */
        margin-top: 42px;
        margin-right: 35px;
    }

    .langButton {
        width: 46px;
        height: 46px;
        cursor: pointer;
        font-size: var(--botao);
        font-family: Montserrat, serif;
        font-weight: 400;
        transition: background-color 0.3s, transform 0.3s;
        border: 1px solid #44617C;

        &:hover {
            transform: scale(1.1);
        }
    }

    .en {
        padding: 1px;
        transition: background-color 0.3s, transform 0.3s;
    }

    .lnAtivo {
        background: #44617C;
        color: white;
        border: 1px solid #44617C;
    }

    .lnDesativo {
        background: white;
        color: #44617C;
    }

    @media (max-width: 768px) {
        display: block;
    }
`

export {HeaderMobileStyle}