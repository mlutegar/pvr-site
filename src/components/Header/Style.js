import styled from "styled-components"

const Top = styled.header`
    .nav {
        font-family: Montserrat, serif;
        font-size: 20px;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 50px 150px 0;
        max-width: 1920px;

        & a {
            text-decoration: none;
            color: black;
        }

        & a:hover {
            color: #577FA4; /* Cor de destaque ao passar o mouse */
            text-decoration: none; /* Sublinha o texto no hover */
        }
    }

    .LangButtonsContainer {
        display: flex;
        gap: 0;
    }

    .LangButton {
        width: 46px;
        height: 46px;
        background: white;
        border: 1px solid #44617C;
        cursor: pointer;
        font-size: 24px;
        font-family: Montserrat,serif;
        font-weight: 400;
        color: #44617C;
        transition: background-color 0.3s, transform 0.3s;
    }


    .LangButton#btnEN {
        background: white;
        padding: 1px;
        color: #44617C;
        border: 1px solid #44617C;
        transition: background-color 0.3s, transform 0.3s;
    }

    .LangButton.active {
        background: #44617C;
        color: white;
        border: 1px solid #44617C;
    }

    .LangButton.active#btnEN {
        background: #44617C;
        color: white;
    }

    /* Hover Effect */

    .LangButton:hover {
        transform: scale(1.1);
    }

    .navbaritens {
        display: flex;
        gap: 70px;
    }
`

export {Top}