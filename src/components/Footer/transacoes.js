function initTransacoes() {
    const transacoes = [
        {
            titulo: "TLSV & Grupo GPS 1",
            descricao: "Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização.",
            imagem1: "../static/src/empre1.png",
            imagem2: "../static/src/empre2.png"
        },
        {
            titulo: "TLSV & Grupo GPS 2",
            descricao: "Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização.",
            imagem1: "../static/src/empre1.png",
            imagem2: "../static/src/empre2.png"
        },
        {
            titulo: "TLSV & Grupo GPS 3",
            descricao: "Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização.",
            imagem1: "../static/src/empre1.png",
            imagem2: "../static/src/empre2.png"
        },
        {
            titulo: "TLSV & Grupo GPS 4",
            descricao: "Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização.",
            imagem1: "../static/src/empre1.png",
            imagem2: "../static/src/empre2.png"
        },
        {
            titulo: "TLSV & Grupo GPS 5",
            descricao: "Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização.",
            imagem1: "../static/src/empre1.png",
            imagem2: "../static/src/empre2.png"
        },
        {
            titulo: "TLSV & Grupo GPS 6",
            descricao: "Venda de 70% das Ações da TLSV, empresa líder na prestação de serviços para Telecom na região Sul do Brasil para o grupo GPS, empresa listada líder em outsourcing e terceirização.",
            imagem1: "../static/src/empre1.png",
            imagem2: "../static/src/empre2.png"
        }
    ];

    let currentIndex = 0;
    let isAnimating = false;

    function createCard(transacao, isCardMenor = false, numero) {
        const card = document.createElement("div");
        card.className = `Card ${isCardMenor ? "card-menor" : ""} card${numero + 1}`;

        card.innerHTML = `
            <div class="Fundo Fundo-box">
                <div class="Imagens">
                    <img class="Imagemempresa2" src="${transacao.imagem1}" />
                    <div class="Br"></div>
                    <img class="Imagemempresa1" src="${transacao.imagem2}" />
                </div>
                <div class="Conteudo-texto">
                    <div class="Titulo-transacao">${transacao.titulo}</div>
                    <div class="Descricao Descricao-transacao">${transacao.descricao}</div>
                </div>
            </div>
        `;
        return card;
    }

    function renderTransacoes() {
        const conteudoDiv = document.querySelector(".dv-ts-conteudo-cards");
        conteudoDiv.innerHTML = "";

        const visibleTransacoes = transacoes.slice(currentIndex, currentIndex + 3);
        visibleTransacoes.forEach((transacao, index) => {
            const card = createCard(transacao, index === 0 || index === 2, index);
            conteudoDiv.appendChild(card);
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        renderTransacoes();

        document.querySelector(".Botao-seta2").addEventListener("click", () => {
            if (isAnimating || currentIndex + 3 >= transacoes.length) return;

            isAnimating = true;
            const conteudoDiv = document.querySelector(".dv-ts-conteudo-cards");

            const firstCard = conteudoDiv.firstElementChild;
            const centralCard = conteudoDiv.children[1];
            const lastCard = conteudoDiv.lastElementChild;

            const novoCard3 = createCard(transacoes[0], true, 3);
            conteudoDiv.appendChild(novoCard3);

            firstCard.classList.add("saida-esquerda");
            centralCard.classList.add("central-to-left");
            lastCard.classList.add("card-to-center");
            novoCard3.classList.add("card-novo-4");

            firstCard.addEventListener("animationend", () => {
                currentIndex++;
                renderTransacoes();
                isAnimating = false;
            }, {once: true});
        });

        document.querySelector(".Botao-seta1").addEventListener("click", () => {
            if (isAnimating || currentIndex === 0) return;

            isAnimating = true;
            const conteudoDiv = document.querySelector(".dv-ts-conteudo-cards");
            const firstCard = conteudoDiv.firstElementChild;
            const lastCard = conteudoDiv.lastElementChild;
            const centralCard = conteudoDiv.children[1];

            const novoCard1 = createCard(transacoes[0], true, -1);
            conteudoDiv.appendChild(novoCard1);

            lastCard.classList.add("saida-direita");
            centralCard.classList.add("central-to-right");
            firstCard.classList.add("card-to-center-from-left");
            novoCard1.classList.add("card-novo-0");

            lastCard.addEventListener("animationend", () => {
                currentIndex--;
                renderTransacoes();
                isAnimating = false;
            }, {once: true});
        });
    });
}

initTransacoes();

export { initTransacoes };