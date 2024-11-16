import Base from "./Base";
import MergesAquisitions from "../components/MergesAquisitions/MergesAquisitions";
import TituloServico from "../components/TituloServico/TituloServico";
import ConsultoriasEspecializadas from "../components/ConsultoriasEspecializadas/ConsultoriasEspecializadas";
import PrincipaisTrabalhos from "../components/PrincipaisTrabalhos/PrincipaisTrabalhos";

const ServicosPage = () => {
    return (
        <Base>
            <TituloServico/>
            <MergesAquisitions/>
            <ConsultoriasEspecializadas/>
            <PrincipaisTrabalhos/>
        </Base>
    )
}

export default ServicosPage