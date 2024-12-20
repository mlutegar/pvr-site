import {DestaquesStyle} from "./Style";

const Destaques = () => (
    <DestaquesStyle>
        <div className="titulo">
            Destaques
        </div>

        <div className="conteudo">
            <div className="coluna1">
                “Vender a empresa é um dos principais momentos da jornada de um empreendedor. É nesta hora que todo
                sacrifício feito ao longo de anos de trabalho será financeiramente recompensado. Por isso, não há margem
                para erros e trilhar esta etapa com quem sabe é uma forma de mitigar riscos e evitar arrependimentos
                após a realização do negócio.”
            </div>

            <div className="coluna2">
                “Você está tomando a decisão que vai mudar a sua vida, muitas vezes com grande carga emocional
                envolvida, com muita complexidade de documentação, de regras. Portanto, é preciso trazer junto neste
                momento quem já vivenciou isso, quem compreende essas cláusulas, condições e a própria dinâmica
                envolvida.”
            </div>
        </div>

        <div className="efeito">
            <div className="Graficopequeno1">
                <div className="Coluna1"
                     style={{width: '80px', height: '45px', opacity: 0.30, background: '#D9D9D9'}}></div>
                <div className="Coluna2"
                     style={{width: '80px', height: '113px', opacity: 0.30, background: '#EFEFEF'}}></div>
                <div className="Coluna3"
                     style={{width: '80px', height: '184px', opacity: 0.30, background: '#577FA4'}}></div>
            </div>
        </div>
    </DestaquesStyle>
)

export default Destaques;
