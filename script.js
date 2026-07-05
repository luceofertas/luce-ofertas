const produtos = [

{
    id:1,
    nome:"Escova Limpa Sapato",
    preco:"R$ 10,90",
    precoAntigo:"R$ 22,90",
    nota:"4.9",
    loja:"Loja Oficial",
    categoria:"Casa",
    imagem:"imagens/escova.jpg",
    link:"produto.html"
},

{
    id:2,
    nome:"Organizador de Gaveta",
    preco:"R$ 17,90",
    precoAntigo:"R$ 39,90",
    nota:"5.0",
    loja:"Loja Oficial",
    categoria:"Casa",
    imagem:"imagens/gaveta.jpg",
    link:"produto.html"
},

{
    id:3,
    nome:"Escorredor Dobrável",
    preco:"R$ 34,90",
    precoAntigo:"R$ 79,90",
    nota:"4.8",
    loja:"Loja Oficial",
    categoria:"Casa",
    imagem:"imagens/escorredor.jpg",
    link:"produto.html"
}

];

function criarCard(produto){

    return `

    <article class="produto">

        <div class="produto-imagem">

            <img src="${produto.imagem}" alt="${produto.nome}">

        </div>

        <div class="produto-info">

            <span class="selo">

                Escolha da Luce

            </span>

            <h3>

                ${produto.nome}

            </h3>

            <div class="nota">

                ⭐ ${produto.nota}

            </div>

            <span class="preco-antigo">

                ${produto.precoAntigo}

            </span>

            <div class="preco">

                ${produto.preco}

            </div>

            <span class="loja">

                ${produto.loja}

            </span>

            <a href="${produto.link}" class="btn-produto">

                Ver detalhes

            </a>

        </div>

    </article>

    `;

}

function carregarProdutos(){

    const lista=document.getElementById("listaProdutos");

    if(!lista){

        return;

    }

    lista.innerHTML="";

    produtos.forEach(produto=>{

        lista.innerHTML+=criarCard(produto);

    });

}

document.addEventListener("DOMContentLoaded",()=>{

    carregarProdutos();

    if(typeof lucide!=="undefined"){

        lucide.createIcons();

    }

});

