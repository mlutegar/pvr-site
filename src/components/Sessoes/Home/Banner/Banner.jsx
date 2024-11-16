import { BannerStyle } from "./Style";

const Banner = () => (
    <BannerStyle>
        <div className="banner mp">
            <div>
                <div>
                    <div className="Titulo">
                        <span className="Titulo-destaque">Performance,</span>
                        <span className="Titulo-destaque">Valor e</span>
                        <span className="Titulo-destaque">Resultado:</span>
                        <span className="Titulo-subtitulo">Estratégia Financeira</span>
                        <span className="Titulo-subtitulo">para o Sucesso Empresarial.</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="Grafico">
                    <div className="Coluna1"
                         style={{ width: '141px', height: '161px', opacity: 0.60, background: '#E8E8E8' }}></div>
                    <div className="Coluna2"
                         style={{ width: '141px', height: '269px', opacity: 0.60, background: '#577FA4' }}></div>
                    <div className="Coluna3"
                         style={{ width: '141px', height: '567px', opacity: 0.60, background: '#44617C' }}></div>
                    <div className="Coluna4"
                         style={{ width: '141px', height: '695px', opacity: 0.60, background: '#D0D0D0' }}></div>
                </div>
            </div>
        </div>
    </BannerStyle>
)

export default Banner;
