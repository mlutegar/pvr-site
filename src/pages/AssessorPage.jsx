import Base from "./Base";
import TituloAssessor from "../components/Sessoes/AssessorSessao/Desktop/TituloAssessor/TituloAssessor";
import TopicosAssessor from "../components/Sessoes/AssessorSessao/Desktop/TopicosAssessor/TopicosAssessor";
import Destaques from "../components/Sessoes/AssessorSessao/Desktop/Destaques/Destaques";
import TituloAssessorMobile
    from "../components/Sessoes/AssessorSessao/Mobile/TituloAssessorMobile/TituloAssessorMobile";
import TopicoAssessorMobile
    from "../components/Sessoes/AssessorSessao/Mobile/TopicosAssessorMobile/TopicoServicoMobile/TopicoAssessorMobile";
import DestaquesMobile from "../components/Sessoes/AssessorSessao/Mobile/DestaquesMobile/DestaquesMobile";

const AssessorPage = () => {
    return (
        <Base>
            <TituloAssessor/>
            <TituloAssessorMobile/>
            <TopicosAssessor/>
            <TopicoAssessorMobile/>
            <Destaques/>
            <DestaquesMobile/>
        </Base>
    )
}

export default AssessorPage