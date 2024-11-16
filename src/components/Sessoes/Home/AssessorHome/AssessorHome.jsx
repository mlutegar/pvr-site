import {AssessorHomeStyle} from "./Style";
import {Link} from "react-router-dom";
import Botao from "../../../Itens/Botao/Botao";

const AssessorHome = () => (
    <AssessorHomeStyle>
        <div className="Assessor">
            <div className="Assessor-conteudo">
                <div className="Assessor-titulo">
            <span>
                A importância de contratar
            </span>
                    <span>
                 de um assessor financeiro
            </span>
                </div>
                <div className="Assessor-corpo">
                    A contratação de um assessor financeiro agrega valor a uma potencial transação permitindo aos sócios
                    que
                    foquem na operação da empresa ao mesmo tempo que um time dedicado conduza as negociações e supra as
                    demandas
                    dos investidores.
                </div>
                <div className="dv-assessor-botao">
                    <Botao
                        href={"/assessor"}
                        modo={2}
                        texto={"Saiba mais"}
                    />
                </div>
            </div>
        </div>

    </AssessorHomeStyle>
)

export default AssessorHome;