import Base from "./Base";
import Banner from "../components/Sessoes/Home/Banner/Banner";
import NossaHistoria from "../components/Sessoes/Home/NossaHistoria/NossaHistoria";
import NossosServicos from "../components/Sessoes/Home/NossosServicos/NossosServicos";
import AssessorHome from "../components/Sessoes/Home/AssessorHome/AssessorHome";
import TransacoesHome from "../components/Sessoes/Home/Transacoes/Transacoes";
import NossaEquipe from "../components/Sessoes/Home/NossaEquipe/NossaEquipe";
import Contato from "../components/Sessoes/Home/Contato/Contato";
import Formulario from "../components/Sessoes/Home/Formulario/Formulario";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import NossaHistoriaMobile from "../components/Sessoes/Home/NossaHistoriaMobile/NossaHistoriaMobile";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Se houver um hash (ex: #section2), rola até o elemento correspondente
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <Base>
            <Banner/>
            <NossaHistoria/>
            <NossaHistoriaMobile/>
            <NossosServicos/>
            <AssessorHome/>
            <TransacoesHome/>
            <NossaEquipe/>
            <Contato/>
            <Formulario/>
        </Base>
    )
}

export default Home