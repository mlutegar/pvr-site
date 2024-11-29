import {NossaHistoriaMobileStyle} from "./Style";

const NossaHistoriaMobile = () => (
    <NossaHistoriaMobileStyle>
        <div className="conteudo-nossa-historia">
            <div className="titulo-nossa-historia">
                <div className="titulo-principal-nossa-historia">
                    A PVR Capital
                </div>
                <div className="subtitulo-nossa-historia">
                    Nossa História
                </div>
            </div>
            <div className="corpo-nossa-historia">
                A PVR Capital foi fundada em 2024 por uma equipe multidisciplinar com vasta experiência em
                projetos de
                emissão de dívida estruturada, M&A e IPO, com o objetivo de prover soluções que vão desde o
                planejamento
                estratégico até a captação de recursos para as empresas, utilizando diversos instrumentos
                financeiros
                tais
                como: emissão de dívida, joint ventures, aporte de capital e venda parcial ou total das ações.
            </div>
        </div>
        <div className="imagem-nossa-historia">
            <img src="imagens/nossaHistoria.png"/>
        </div>
    </NossaHistoriaMobileStyle>
)

export default NossaHistoriaMobile;