import {ContatoStyle} from "./Style";
import MapComponent from "../../../MapComponent/MapComponent";

const Contato = () => (
    <ContatoStyle>
        <div className="dv-co-titulo" id={"contato"}>
            Contato
        </div>

        <div className="dv-co-conteudo">

            <div className="dv-co-co-mapa">
                <div id="map" className="Mapa Mapa-contato">
                    <MapComponent/>
                </div>
            </div>

            <div className="dv-co-co-info">
                <div className="dv-co-co-in-item">
                    <div className="dv-co-co-in-icone">
                        <img src="imagens/contatoicone1.png"/>
                    </div>
                    <div className="dv-co-co-in-texto">
                        Av. Brig Faria Lima 1461 4º Andar<br/>
                        Torre Sul, Jardim Paulistano<br/>
                        CEP: 01452-921<br/>
                        São Paulo - SP
                    </div>
                </div>

                <div className="dv-co-co-in-item">
                    <div className="dv-co-co-in-icone">
                        <img src="imagens/contatoicone2.png"/>
                    </div>
                    <div className="dv-co-co-in-texto">
                        contato@pvrcapital.com
                    </div>
                </div>

                <div className="dv-co-co-in-item">
                    <div className="dv-co-co-in-icone">
                        <img src="imagens/contatoicone3.png"/>
                    </div>
                    <div className="dv-co-co-in-texto">
                        PVR Capital
                    </div>
                </div>
            </div>
        </div>
    </ContatoStyle>
)

export default Contato;