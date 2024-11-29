import Base from "./Base";
import TransacoesInteiro from "../components/Sessoes/Transacoes/Desktop/TransacoesInteiro/TransacoesInteiro";
import TransacoesInteiroMobile
    from "../components/Sessoes/Transacoes/Mobile/TransacoesInteiroMobile/TransacoesInteiroMobile";

const Transacoes = () => {
    return (
        <Base>
            <TransacoesInteiro/>
            <TransacoesInteiroMobile/>s
        </Base>
    )
}

export default Transacoes