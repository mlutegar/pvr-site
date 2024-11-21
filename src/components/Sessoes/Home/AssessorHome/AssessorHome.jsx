import {AssessorHomeStyle} from "./Style";
import {Link} from "react-router-dom";
import Botao from "../../../Itens/Botao/Botao";
import {LangContext} from "../../../../context/LangContext";
import {useContext} from "react";

const AssessorHome = () => {
    const {lang, setLang} = useContext(LangContext);

    return (
        <AssessorHomeStyle>
            <div className="Assessor-conteudo">
                <div className="Assessor-titulo">
            <span>
                {lang === "PT" ? "A importância de contratar" : "The importance of hiring"}
            </span>
                    <span>
                            {lang === "PT" ? "de um assessor financeiro" : "a financial advisor"}
            </span>
                </div>
                <div className="Assessor-corpo">
                    {lang === "PT" ? "A contratação de um assessor financeiro agrega valor a uma potencial transação permitindo aos sócios que foquem na operação da empresa ao mesmo tempo que um time dedicado conduza as negociações e supra as demandas dos investidores." : "The hiring of a financial advisor adds value to a potential transaction allowing the partners to focus on the operation of the company while a dedicated team conducts negotiations and meets the demands of investors."}
                </div>
                <div className="dv-assessor-botao">
                    <Botao
                        href={"/assessor"}
                        modo={2}
                        texto={"Saiba mais"}
                    />
                </div>
            </div>
        </AssessorHomeStyle>
    )
};

export default AssessorHome;