import React from "react";
import { BotaoStyle } from "./Style";
import { Link } from "react-router-dom";

const Botao = (props) => {
    return (
        <BotaoStyle modo={props.modo}>
            <Link to={props.href} onClick={props.ref !== "" ? () => window.scrollTo(0, 0) : null}>
                <button className="btn" type={props.type} onClick={props.onClick} disabled={props.disabled}>
                    {props.texto}
                    {props.children}
                </button>
            </Link>
        </BotaoStyle>
    );
};

export default Botao;
