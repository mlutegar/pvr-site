import Base from "./Base";
import Banner from "../components/Sessoes/Home/Banner/Banner";
import NossaHistoria from "../components/Sessoes/Home/NossaHistoria/NossaHistoria";
import NossosServicos from "../components/Sessoes/Home/NossosServicos/NossosServicos";
import AssessorHome from "../components/Sessoes/Home/AssessorHome/AssessorHome";
import Transacoes from "../components/Sessoes/Home/Transacoes/Transacoes";
import NossaEquipe from "../components/Sessoes/Home/NossaEquipe/NossaEquipe";
import Contato from "../components/Sessoes/Home/Contato/Contato";
import Formulario from "../components/Sessoes/Home/Formulario/Formulario";

const Home = () => {
    return (
        <Base>
            <Banner/>
            <NossaHistoria/>
            <NossosServicos/>
            <AssessorHome/>
            <Transacoes/>
            <NossaEquipe/>
            <Contato/>
            <Formulario/>
        </Base>
    )
}

export default Home