import emailjs from "emailjs-com";
import { FormularioStyle } from "./Style";
import Botao from "../../../Itens/Botao/Botao";
import {useContext} from "react";
import {LangContext} from "../../../../context/LangContext";

const Formulario = () => {
    const { lang, setLang } = useContext(LangContext);

    const enviarEmail = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Captura os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        const serviceID = "service_jcfaj7a";
        const templateID = "template_4deq5k1";

        // Parâmetros para o template do EmailJS
        const templateParams = {
            to_name: "Equipe PVR", // Nome do destinatário fixo
            from_name: nome,
            from_email: email,
            message: mensagem,
        };

        emailjs
            .send(
                serviceID, // Substitua pelo seu Service ID do EmailJS
                templateID, // Substitua pelo seu Template ID do EmailJS
                templateParams,
                "fLcr3VAzG5leG_3In" // Substitua pelo seu User ID do EmailJS
            )
            .then(
                (response) => {
                    alert("Mensagem enviada com sucesso para a equipe PVR!");
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
                    console.error("FAILED...", err);
                }
            );
    };

    return (
        <FormularioStyle>
            <div className="dv-formulario">
                <div className="dv-fo-titulo">
                    <div className="dv-fo-titulo-principal">Formulário</div>
                    <div className="dv-fo-titulo-subtitulo">
                        {lang === "PT" ? "Entre em contato com a PVR M&A" : "Contact PVR M&A"}
                    </div>
                </div>

                <div className="dv-fo-conteudo">
                    <form onSubmit={enviarEmail}>
                        <div className="dv-fo-co-parte1">
                            <div className="dv-fo-co-item">
                                <label htmlFor="nome">
                                    {lang === "PT" ? "Nome:" : "Name:"}
                                </label>
                                <input type="text" id="nome" name="nome" required />
                            </div>
                            <div className="dv-fo-co-item">
                                <label htmlFor="email">
                                    {lang === "PT" ? "Email:" : "Email:"}
                                </label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>

                        <div className="dv-fo-co-parte2">
                            <div className="dv-fo-co-item mensagem">
                                <label htmlFor="mensagem">
                                    {lang === "PT" ? "Mensagem:" : "Message:"}
                                </label>
                                <textarea id="mensagem" name="mensagem" required></textarea>
                            </div>
                            <div className="dv-fo-co-item-button">
                                <Botao
                                    texto="Enviar"
                                    modo={2}
                                    tipo="submit"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FormularioStyle>
    );
};

export default Formulario;
