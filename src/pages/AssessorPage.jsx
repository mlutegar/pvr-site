import Base from "./Base";
import TituloAssessor from "../components/TituloAssessor/TituloAssessor";
import TopicosAssessor from "../components/TopicosAssessor/TopicosAssessor";
import Destaques from "../components/Destaques/Destaques";

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