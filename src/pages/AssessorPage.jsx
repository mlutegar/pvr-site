import Base from "./Base";
import TituloAssessor from "../components/Sessoes/AssessorSessao/TituloAssessor/TituloAssessor";
import TopicosAssessor from "../components/Sessoes/AssessorSessao/TopicosAssessor/TopicosAssessor";
import Destaques from "../components/Sessoes/AssessorSessao/Destaques/Destaques";

const AssessorPage = () => {
    return (
        <Base>
            <TituloAssessor/>
            <TopicosAssessor/>
            <Destaques/>
        </Base>
    )
}

export default AssessorPage