import Base from "./Base";
import MergesAquisitions from "../components/Sessoes/Servicos/MergesAquisitions/MergesAquisitions";
import TituloServico from "../components/Sessoes/Servicos/TituloServico/TituloServico";
import ConsultoriasEspecializadas from "../components/Sessoes/Servicos/ConsultoriasEspecializadas/ConsultoriasEspecializadas";
import PrincipaisTrabalhos from "../components/Sessoes/Servicos/PrincipaisTrabalhos/PrincipaisTrabalhos";

const Servicos = () => {
    return (
        <Base>
            <TituloServico/>
            <MergesAquisitions/>
            <ConsultoriasEspecializadas/>
            <PrincipaisTrabalhos/>
        </Base>
    )
}

export default Servicos