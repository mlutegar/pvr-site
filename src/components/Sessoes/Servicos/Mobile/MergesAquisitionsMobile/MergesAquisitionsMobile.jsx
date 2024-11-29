import {MergesAquisitionsMobileStyle} from "./Style";

const MergesAquisitionsMobile = () => (
    <MergesAquisitionsMobileStyle>
        <div className="container">
            <div className="imagem">
                <img
                    src="imagens/merges.png"
                    alt={"Merges & Aquisitions"}
                />
            </div>
            <div className="conteudo">
                <div className="titulo">
                    Merges & Aquisitions
                </div>
                <div className="descricao">
                    Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do
                    Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização
                </div>
                <div className="exemplo">
                    <div className="imagem1">
                        <img src="imagens/empre1.png"/>
                    </div>
                    <div className="imagem2">
                        <img src="imagens/empre2.png"/>
                    </div>
                </div>
            </div>
        </div>
    </MergesAquisitionsMobileStyle>
)

export default MergesAquisitionsMobile;
