Atividade 1 

a = respostaDoUsuario recebe o valor digitado pelo usuário através de um prompt
numero converte o valor de respostaDoUsuario para um número usando Number()
O código então verifica se o número digitado (numero) é par
Se numero % 2 === 0, ou seja, se o resto da divisão de numero por 2 for zero, então o código imprime "Passou no teste." no console
Caso contrário, ou seja, se numero % 2 !== 0 (o resto da divisão por 2 não é zero), o código imprime "Não passou no teste." no console

b = O código imprime "Passou no teste." no console quando o número digitado pelo usuário (numero) é par. Isso ocorre porque quando um 
número é par, o resto da divisão por 2 é zero (numero % 2 === 0).

c = O código imprime "Não passou no teste." no console quando o número digitado pelo usuário (numero) é ímpar. Neste caso, o resto da 
divisão por 2 não é zero (numero % 2 !== 0)

Atividade 2 

a = O código serve para determinar o preço de uma fruta com base no nome da fruta fornecido pelo usuário. Utiliza um switch case para
verificar o valor de fruta e atribuir o preço correspondente à variável preco. Se a fruta não estiver listada nos cases, o preço padrão é definido pelo default.

b = Se o valor de fruta for "Maçã", o switch case atribuirá o valor 2.25 à variável preco. Portanto, a mensagem impressa no console será: 
O preço da fruta Maçã é R$ 2.25

c = Se retirarmos o break que está logo acima do default, o fluxo de execução continuará para o default após o caso "Pêra". Isso significa que se o usuário escolher 
"Pêra", o preço será atribuído como 5 (valor definido no default). A mensagem impressa no console seria:
O preço da fruta Pêra é R$ 5

Atividade 3 

a = A primeira linha está solicitando ao usuário que digite um número através de um prompt. O valor digitado é então convertido para um número usando Number(), e esse 
número é atribuído à variável numero.

b  = Se o usuário digitar o número 10, ele será maior que 0, portanto a condição if(numero > 0) será verdadeira. Isso fará com que o código dentro do bloco if seja executado,
incluindo a impressão no console de "Esse número passou no teste". A variável mensagem será declarada dentro deste bloco com o valor "Essa mensagem é secreta!!!".
// portanto a mensagem que vai ser impressa no terminal será:
Esse número passou no teste

c = Sim, haverá um erro no console. O erro ocorre porque a variável mensagem é declarada dentro do bloco {} do if. Em JavaScript, variáveis declaradas com let ou const têm escopo 
de bloco, o que significa que elas só são acessíveis dentro do bloco onde foram declaradas.

Atividade 4 

// a) Pergunta ao usuário qual a idade dele e guarda na variável
const idadeStr = prompt("Qual é a sua idade?");

// b) Converte a idade para o tipo Number usando o cast para Number
const idade = Number(idadeStr);

// c) Verifica se a idade é maior ou igual a 18 (idade mínima para dirigir no Brasil)
if (idade >= 18) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}

Atividade 5

const turno = prompt("Digite o turno que você estuda: M (Matutino), V (Vespertino) ou N (Noturno)").toUpperCase();

if (turno === 'M') {
  console.log("Bom Dia!");
} else if (turno === 'V') {
  console.log("Boa Tarde!");
} else if (turno === 'N') {
  console.log("Boa Noite!");
} else {
  console.log("Turno não reconhecido. Por favor, digite M, V ou N.");
}

Atividade 6

const turno = prompt("Digite o turno que você estuda: M (Matutino), V (Vespertino) ou N (Noturno)").toUpperCase();

switch (turno) {
  case 'M':
    console.log("Bom Dia!");
    break;
  case 'V':
    console.log("Boa Tarde!");
    break;
  case 'N':
    console.log("Boa Noite!");
    break;
  default:
    console.log("Turno não reconhecido. Por favor, digite M, V ou N.");
    break;
}

Atividade 7 

const genero = prompt("Qual o gênero do filme que vão assistir?").toLowerCase();
const precoIngresso = Number(prompt("Qual o preço do ingresso?"));

if (genero === 'fantasia' && precoIngresso < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}




