import {BannerStyle} from "./Style";
import {LangContext} from "../../../../../context/LangContext";
import {useContext} from "react";

const Banner = () => {
    const { lang, setLang } = useContext(LangContext);

    return (
        <BannerStyle>
            <div className="Titulo">
            <span className="Titulo-destaque">
                {lang === "PT" ? "Performance," : "Performance,"}
            </span>
                <span className="Titulo-destaque">
                    {lang === "PT" ? "Valor e" : "Value and"}
            </span>
                <span className="Titulo-destaque">
                    {lang === "PT" ? "Resultado:" : "Result:"}
            </span>
                <span className="Titulo-subtitulo">
                    {lang === "PT" ? "Estratégia Financeira" : "Financial Strategy"}
            </span>
                <span className="Titulo-subtitulo">
                    {lang === "PT" ? "para o Sucesso Empresarial." : "for Business Success."}
            </span>
            </div>

            <div className="Grafico">
                <div className="Coluna1"></div>
                <div className="Coluna2"></div>
                <div className="Coluna3"></div>
                <div className="Coluna4"></div>
            </div>
        </BannerStyle>
    )
}

export default Banner;
