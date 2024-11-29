import { TopicoAssessorMobileStyle } from "./Style";

const TopicoAssessorMobile = ({ titulo, descricao }) => (
    <TopicoAssessorMobileStyle>
        <div className="topico">
            <img src="imagens/triangulo.png"/> {titulo}
        </div>
        <div className="descricao">
            <ul>
                {descricao?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </TopicoAssessorMobileStyle>
);

export default TopicoAssessorMobile;
