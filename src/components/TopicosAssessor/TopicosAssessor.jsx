import {TopicosAssessorStyle} from "./Style";
import TopicoAssessor from "./TopicoServico/TopicoAssessor";

const TopicosAssessor = () => (
    <TopicosAssessorStyle>
        <TopicoAssessor
            titulo="Sell-side"
            descricao={[
                "Blindagem dos sócios ao longo do processo de venda, garantindo que o mesmo continue focado nas operações da Companhia",
                "Construção de apresentações e materiais traduzidos para a linguagem dos investidores, acelerando as análises e eventuais propostas",
                "Maximização do valor pago pelo investidor, com um time dedicado especializado no processo de negociação"
            ]}
        />

        <TopicoAssessor
            titulo="Título Exemplo"
            descricao={[
                "Equipe dedicada na busca e acesso aos targets que se adequem a estratégia do cliente, reduzindo o tempo de seleção",
                "Maior compreensão da realidade do lado vendedor, uma vez que Middle Market é majoritariamente composto por empresas familiares",
                "Elimina a necessidade do cliente alocar capital humano em um projeto fora do core business"
            ]}
        />

        <TopicoAssessor
            titulo="Título Exemplo"
            descricao={[
                "Possibilidade de maior entendimento das necessidades do cliente, oferecendo um leque maior de soluções",
                "Network com investidores de dívida elimina a frustração de iniciar um projeto com incertezas quanto a demanda por determinado papel",
                "Equipe dedicada na construção de materiais e negociação com investidores"
            ]}
        />

        <div className="efeito">
            <div className="Graficopequeno2">
                <div className="Coluna1"
                     style={{width: '80px', height: '45px', opacity: 0.30, background: '#D9D9D9'}}></div>
                <div className="Coluna2"
                     style={{width: '80px', height: '113px', opacity: 0.30, background: '#EFEFEF'}}></div>
                <div className="Coluna3"
                     style={{width: '80px', height: '184px', opacity: 0.30, background: '#577FA4'}}></div>
            </div>
        </div>
    </TopicosAssessorStyle>
)

export default TopicosAssessor;
