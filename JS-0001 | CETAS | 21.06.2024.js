// 1) O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema utilizando estrutura condicional IF/ELSE IF/ELSE, que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

// Vaga para Equipe de Resgate -> O candidato deve ter de 18 a 60 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
// Vaga para Equipe de Tratamento -> O candidato deve ter de 23 a 65 anos, possuir formação em "Veterinária" e residir em Florianópolis.


// Critérios de avaliação:

// (1,0) Receber e armazenar os dados do candidato.
// (1,5) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer.
// (0,5) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer".

const idade_minima_para_concorrer_para_equipe_de_resgate = 18;
const idade_maxima_para_concorrer_para_equipe_de_resgate = 60;
const idade_minima_para_concorrer_para_equipe_de_tratamento = 23;
const idade_maxima_para_concorrer_para_equipe_de_tratamento = 65;
const formacao_em_biologia = `Biologia`;
const formacao_em_veterinaria = `Veterinária`;
const formacao_em_ecologia = `Ecologia`;
const cidade_requirida = `Florianópolis`;
let nome_do_usuario;
let idade_do_usuario;
let formacao_do_usuario;
let cidade_do_usuario;
let idade_valida_para_equipe_de_resgate = false;
let idade_valida_para_equipe_de_tratamento = false;
let pode_concorrer_a_equipe_de_resgate = false;
let pode_concorrer_a_equipe_de_tratamento = false;
let formacao_requirida_para_equipe_de_resgate = false;
let cidade_requisitada = false;
let formacao_requirida_para_equipe_de_tratamento = false;

nome_do_usuario = prompt(`Qual o nome do usuário?`);
idade_do_usuario = Number(prompt(`Qual a idade do usuário?`));
formacao_do_usuario = prompt(`Qual a formação do usuário?`);
cidade_do_usuario = prompt(`Qual a cidade do usuário?`);

if(idade_do_usuario >= idade_minima_para_concorrer_para_equipe_de_resgate && idade_do_usuario <= idade_maxima_para_concorrer_para_equipe_de_resgate){

  idade_valida_para_equipe_de_resgate = true;

} else{
    idade_valida_para_equipe_de_resgate = false;
};


if(formacao_do_usuario == formacao_em_biologia || formacao_do_usuario == formacao_em_ecologia){
    formacao_requirida_para_equipe_de_resgate = true;
};
if(formacao_do_usuario == formacao_em_veterinaria){
    formacao_requirida_para_equipe_de_tratamento = true;
}
if(idade_do_usuario >= idade_minima_para_concorrer_para_equipe_de_tratamento && idade_do_usuario <= idade_maxima_para_concorrer_para_equipe_de_tratamento){
    idade_valida_para_equipe_de_tratamento = true;
};

if(cidade_do_usuario == cidade_requirida){
  cidade_requisitada = true;
};


if(idade_valida_para_equipe_de_resgate == true && formacao_requirida_para_equipe_de_resgate == true && cidade_requisitada == true){
    pode_concorrer_a_equipe_de_resgate = true;
};

if(idade_valida_para_equipe_de_tratamento == true && formacao_requirida_para_equipe_de_tratamento == true && cidade_requisitada == true){
  pode_concorrer_a_equipe_de_tratamento = true;
};

if(pode_concorrer_a_equipe_de_resgate == true && pode_concorrer_a_equipe_de_tratamento == true){
    alert(`Olá ${nome_do_usuario}, você está apto para concorrer a vaga da Equipe de Resgate e da Equipe de Tratamento!`);
}
else if(pode_concorrer_a_equipe_de_resgate == true){
    alert(`Olá ${nome_do_usuario}, você está apto para concorrer a vaga da Equipe de Resgate!`);
} 
else if(pode_concorrer_a_equipe_de_tratamento == true){
    alert(`Olá ${nome_do_usuario}, você está apto para concorrer a vaga da Equipe de Tratamento!`);
} else {
    alert(`Olá ${nome_do_usuario}! Infelizmente você não está apto para concorrer as vagas..`);
};
