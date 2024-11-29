import styled from "styled-components";

const BotaoStyle = styled.header`
    .btn {
        padding: 18px 92px;
        background: ${(props) =>
                props.modo === 2 ? "#577FA4" : "#E8E8E8"};
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: var(--botao);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        color: ${(props) =>
                props.modo === 2 ? "#E8E8E8" : "#577FA4"};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }

    .btn:hover {
        background-color: ${(props) =>
                props.modo === 2 ? "#476B89" : "#D4D4D4"};
        transform: scale(1.1);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 768px) {
        .btn{
            padding: 20px 39px;
            border-radius: 6px;
        }
    }
`;

export { BotaoStyle };
