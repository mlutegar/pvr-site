import Header from "../components/Base/Header/Header";
import Footer from "../components/Base/Footer/Footer";
import LangProvider from "../context/LangContext";

const Base = (props) => {
    return (
        <LangProvider>
            <Header/>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
        </LangProvider>)
}

export default Base;