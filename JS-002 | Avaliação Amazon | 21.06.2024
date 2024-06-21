// 2) No site Amazon, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional SWITCH / CASE, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice de 5 a menor que 7 (destaque na página da categoria), índice de 7 a menor que 9 (destaque em promoções), índice igual ou maior a 9 (destaque na página principal).


// Critérios de avaliação:

// (1,0) Receber e armazenar as notas dos três quesitos (avaliação).
// (1,0) Calcular o índice do produto (média aritmética) com três casas após a vírgula e mostrar na tela.
// (1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.

let qualidade_do_produto;
let custo_beneficio_do_produto;
let durabilidade_do_produto;
let soma_das_notas_do_produto;
let media_da_nota_do_produto;
const quantidade_de_avaliações = 3;
const indice_baixo = 5;
const indice_medio = 7;
const indice_alto = 9;

qualidade_do_produto = Number(prompt(`Qual a nota que você da para a qualidade do produto?`));
custo_beneficio_do_produto = Number(prompt(`Qual a nota que você da para o custo beneficio do produto?`));
durabilidade_do_produto = Number(prompt(`Qual a nota que você da para a durabilidade do produto?`));

soma_das_notas_do_produto = qualidade_do_produto + custo_beneficio_do_produto + durabilidade_do_produto;
media_da_nota_do_produto = soma_das_notas_do_produto / quantidade_de_avaliações;

switch(true){
    case media_da_nota_do_produto < indice_baixo:
        alert(`Não ganha destaque.\nIndice: ${media_da_nota_do_produto.toFixed(3)}.`);
        break;

    case media_da_nota_do_produto >= indice_baixo && media_da_nota_do_produto < indice_medio:
        alert(`Destaque na pagina da categoria.\nIndice: ${media_da_nota_do_produto.toFixed(3)}`);
        break;

    case  media_da_nota_do_produto >= indice_medio && media_da_nota_do_produto < indice_alto:
        alert(`Destaque em promoções.\nIndice: ${media_da_nota_do_produto.toFixed(3)}.`);
        break;

    default:
        alert(`Destaque na página principal.\nIndice: ${media_da_nota_do_produto.toFixed(3)}.`);
};
