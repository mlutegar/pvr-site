import { TopicoAssessorStyle } from "./Style";

const TopicoAssessor = ({ titulo, descricao }) => (
    <TopicoAssessorStyle>
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
    </TopicoAssessorStyle>
);

export default TopicoAssessor;
