import Header from "../components/Base/Header/Header";
import Footer from "../components/Base/Footer/Footer";
import LangProvider from "../context/LangContext";
import HeaderMobile from "../components/Base/HeaderMobile/HeaderMobile";
import FooterMobile from "../components/Base/FooterMobile/FooterMobile";

const Base = (props) => {
    return (
        <LangProvider>
            <Header/>
            <HeaderMobile/>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
            <FooterMobile/>
        </LangProvider>)
}

export default Base;