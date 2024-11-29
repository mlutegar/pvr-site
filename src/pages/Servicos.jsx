import Base from "./Base";
import MergesAquisitions from "../components/Sessoes/Servicos/Desktop/MergesAquisitions/MergesAquisitions";
import TituloServico from "../components/Sessoes/Servicos/Desktop/TituloServico/TituloServico";
import ConsultoriasEspecializadas from "../components/Sessoes/Servicos/Desktop/ConsultoriasEspecializadas/ConsultoriasEspecializadas";
import PrincipaisTrabalhos from "../components/Sessoes/Servicos/Desktop/PrincipaisTrabalhos/PrincipaisTrabalhos";
import TituloServicoMobile from "../components/Sessoes/Servicos/Mobile/TituloServicoMobile/TituloServicoMobile";
import MergesAquisitionsMobile
    from "../components/Sessoes/Servicos/Mobile/MergesAquisitionsMobile/MergesAquisitionsMobile";
import ConsultoriasEspecializadasMobile
    from "../components/Sessoes/Servicos/Mobile/ConsultoriasEspecializadasMobile/ConsultoriasEspecializadasMobile";
import PrincipaisTrabalhosMobile from "../components/Sessoes/Servicos/Mobile/PrincipaisTrabalhos/PrincipaisTrabalhos";

const Servicos = () => {
    return (
        <Base>
            <TituloServico/>
            <TituloServicoMobile/>
            <MergesAquisitions/>
            <MergesAquisitionsMobile/>
            <ConsultoriasEspecializadas/>
            <ConsultoriasEspecializadasMobile/>
            <PrincipaisTrabalhos/>
            <PrincipaisTrabalhosMobile/>
        </Base>
    )
}

export default Servicos