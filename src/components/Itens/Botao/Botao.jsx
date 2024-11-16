import React from "react";
import { BotaoStyle } from "./Style";
import { Link } from "react-router-dom";

const Botao = (props) => {
    return (
        <BotaoStyle modo={props.modo}>
            <Link to={props.href}>
                <button className="btn" type={props.type} onClick={props.onClick} disabled={props.disabled}>
                    {props.texto}
                </button>
            </Link>
        </BotaoStyle>
    );
};

export default Botao;
