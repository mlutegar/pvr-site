import Base from "./Base";
import Banner from "../components/Sessoes/Home/Desktop/Banner/Banner";
import NossaHistoria from "../components/Sessoes/Home/Desktop/NossaHistoria/NossaHistoria";
import NossosServicos from "../components/Sessoes/Home/Desktop/NossosServicos/NossosServicos";
import AssessorHome from "../components/Sessoes/Home/Desktop/AssessorHome/AssessorHome";
import TransacoesHome from "../components/Sessoes/Home/Desktop/Transacoes/Transacoes";
import NossaEquipe from "../components/Sessoes/Home/Desktop/NossaEquipe/NossaEquipe";
import ContatoMobile from "../components/Sessoes/Home/Mobile/ContatoMobile/ContatoMobile";
import Formulario from "../components/Sessoes/Home/Desktop/Formulario/Formulario";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import NossaHistoriaMobile from "../components/Sessoes/Home/Mobile/NossaHistoriaMobile/NossaHistoriaMobile";
import NossosServicosMobile from "../components/Sessoes/Home/Mobile/NossosServicosMobile/NossosServicosMobile";
import TransacoesMobile from "../components/Sessoes/Home/Mobile/TransacoesMobile/TransacoesMobile";
import NossaEquipeMobile from "../components/Sessoes/Home/Mobile/NossaEquipeMobile/NossaEquipeMobile";
import Contato from "../components/Sessoes/Home/Desktop/Contato/Contato";
import FormularioMobile from "../components/Sessoes/Home/Mobile/FormularioMobile/FormularioMobile";

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
            <NossosServicosMobile/>
            <AssessorHome/>
            <TransacoesHome/>
            <TransacoesMobile/>
            <NossaEquipe/>
            <NossaEquipeMobile/>
            <Contato/>
            <ContatoMobile/>
            <Formulario/>
            <FormularioMobile/>
        </Base>
    )
}

export default Home