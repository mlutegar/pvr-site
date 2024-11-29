import {TopicosAssessorMobileStyle} from "./Style";
import TopicoAssessorMobile from "./TopicoServicoMobile/TopicoAssessorMobile";

const TopicosAssessorMobile = () => (
    <TopicosAssessorMobileStyle>
        <TopicoAssessorMobile
            titulo="Sell-side"
            descricao={[
                "Blindagem dos sócios ao longo do processo de venda, garantindo que o mesmo continue focado nas operações da Companhia",
                "Construção de apresentações e materiais traduzidos para a linguagem dos investidores, acelerando as análises e eventuais propostas",
                "Maximização do valor pago pelo investidor, com um time dedicado especializado no processo de negociação"
            ]}
        />

        <TopicoAssessorMobile
            titulo="Buy-side"
            descricao={[
                "Equipe dedicada na busca e acesso aos targets que se adequem a estratégia do cliente, reduzindo o tempo de seleção",
                "Maior compreensão da realidade do lado vendedor, uma vez que Middle Market é majoritariamente composto por empresas familiares",
                "Elimina a necessidade do cliente alocar capital humano em um projeto fora do core business"
            ]}
        />

        <TopicoAssessorMobile
            titulo="Emissão de dívida"
            descricao={[
                "Possibilidade de maior entendimento das necessidades do cliente, oferecendo um leque maior de soluções",
                "Network com investidores de dívida elimina a frustração de iniciar um projeto com incertezas quanto a demanda por determinado papel",
                "Equipe dedicada na construção de materiais e negociação com investidores"
            ]}
        />
    </TopicosAssessorMobileStyle>
)

export default TopicosAssessorMobile;
