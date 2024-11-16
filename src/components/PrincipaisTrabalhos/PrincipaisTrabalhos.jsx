import {PrincipaisTrabalhosStyle} from "./Style";

const PrincipaisTrabalhos = () => (
    <PrincipaisTrabalhosStyle>
        <div className="titulo">
            Principais trabalhos realizados:
        </div>

        <div className="conteudo">
            <div className="parte1">
                <ul>
                    <li>
                        Análise do cenário econômico e setorial do cliente
                    </li>
                    <li>
                        Tendências de mercado e identificação de oportunidades
                    </li>
                    <li>
                        Entendimento da operação e análise financeira
                    </li>
                    <li>
                        Entendimento dos pontos críticos e estruturação de planos de contingenciamento
                    </li>
                    <li>
                        Elaboração de plano de negócios
                    </li>
                    <li>
                        Definição de um plano de ação
                    </li>
                    <li>
                        Coordenação da implementação do plano estabelecido, fazendo o acompanhamento do projeto
                    </li>
                </ul>
            </div>
            <div className="parte2">
                <ul>
                    <li>
                        Atuou como consultor exclusivo do Banco Interamericano de Desenvolvimento – BID, em projeto que
                        constituía a realização de um Market Sounding junto aos principais bancos de atacado e varejo do
                        Brasil para entendimento da receptividade de um fundo garantidor exclusivo para os ISPs
                    </li>
                    <li>
                        Projeto concluído no primeiro trimestre de 2023, dando o embasamento necessário para a
                        progressão do projeto macro do BID junto ao Ministério das Comunicações e o BNDES.
                    </li>
                    <div className="imagem">
                        <img src="imagens/empre3.png"/>
                    </div>
                </ul>
            </div>
        </div>
    </PrincipaisTrabalhosStyle>
)

export default PrincipaisTrabalhos;
