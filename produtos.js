const produtos = [
    {
        id: 1,
        nome: "Escova Limpa Sapato com Dispenser",
        preco: "R$ 10,90",
        precoAntigo: "R$ 22,90",
        nota: "4.9",
        loja: "Loja Oficial",
        categoria: "Casa",
        status: "Disponível",
        imagem: "imagens/escova.jpg",
        link: "https://shopee.com.br/",
        descricao: "Escova prática com dispenser para sabão, facilitando a limpeza de calçados."
    },

    {
        id: 2,
        nome: "Organizador de Gaveta",
        preco: "R$ 17,90",
        precoAntigo: "R$ 39,90",
        nota: "5.0",
        loja: "Loja Oficial",
        categoria: "Casa",
        status: "Disponível",
        imagem: "imagens/organizador.jpg",
        link: "https://shopee.com.br/",
        descricao: "Ideal para organizar roupas, acessórios e diversos objetos com praticidade."
    },

    {
        id: 3,
        nome: "Escorredor Dobrável",
        preco: "R$ 34,90",
        precoAntigo: "R$ 79,90",
        nota: "4.8",
        loja: "Loja Oficial",
        categoria: "Casa",
        status: "Disponível",
        imagem: "imagens/escorredor.jpg",
        link: "https://shopee.com.br/",
        descricao: "Escorredor dobrável que economiza espaço e facilita a organização da cozinha."
    }

        ,
    {
        id: 4,
        nome: "Suporte para Celular",
        preco: "R$ 19,90",
        precoAntigo: "R$ 45,90",
        nota: "4.9",
        loja: "Loja Oficial",
        categoria: "Eletrônicos",
        status: "Disponível",
        imagem: "imagens/suporte-celular.jpg",
        link: "https://shopee.com.br/",
        descricao: "Suporte ajustável para celular, ideal para mesa de trabalho, estudos ou assistir vídeos."
    },

    {
        id: 5,
        nome: "Luminária LED USB",
        preco: "R$ 29,90",
        precoAntigo: "R$ 59,90",
        nota: "4.8",
        loja: "Loja Oficial",
        categoria: "Eletrônicos",
        status: "Disponível",
        imagem: "imagens/luminaria.jpg",
        link: "https://shopee.com.br/",
        descricao: "Luminária LED com alimentação USB e intensidade regulável."
    },

    {
        id: 6,
        nome: "Kit Organizadores de Cabos",
        preco: "R$ 15,90",
        precoAntigo: "R$ 34,90",
        nota: "4.7",
        loja: "Loja Oficial",
        categoria: "Eletrônicos",
        status: "Disponível",
        imagem: "imagens/cabos.jpg",
        link: "https://shopee.com.br/",
        descricao: "Organize fios e carregadores de forma prática e elegante."
    }

    ,
{
    id: 7,
    nome: "Organizador para Maquiagem",
    preco: "R$ 26,90",
    precoAntigo: "R$ 59,90",
    nota: "4.9",
    loja: "Loja Oficial",
    categoria: "Beleza",
    status: "Disponível",
    imagem: "imagens/maquiagem.jpg",
    link: "https://shopee.com.br/",
    descricao: "Organizador transparente para maquiagens, pincéis e acessórios."
},

{
    id: 8,
    nome: "Garrafa Térmica 500ml",
    preco: "R$ 39,90",
    precoAntigo: "R$ 79,90",
    nota: "4.8",
    loja: "Loja Oficial",
    categoria: "Casa",
    status: "Disponível",
    imagem: "imagens/garrafa.jpg",
    link: "https://shopee.com.br/",
    descricao: "Mantém bebidas quentes ou frias por várias horas."
},

{
    id: 9,
    nome: "Kit Potes Herméticos",
    preco: "R$ 49,90",
    precoAntigo: "R$ 99,90",
    nota: "5.0",
    loja: "Loja Oficial",
    categoria: "Cozinha",
    status: "Disponível",
    imagem: "imagens/potes.jpg",
    link: "https://shopee.com.br/",
    descricao: "Conjunto de potes herméticos ideais para armazenar alimentos."
}
];

function buscarProduto(id){

    return produtos.find(produto => produto.id == id);

}