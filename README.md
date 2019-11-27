# Desafio Grupo Boticário

## Requesitos

Para começar primeiro, você deve clonar ou baixar o repositório.

Você também deve ter o node.js e o yarn instalados no seu computador.

## Instalação

O primeiro passo é instalar todas as dependências da aplicação.

Instale toda as dependências com o comando abaixo.

`yarn install`

## Iniciar o projeto

Precisará de dois terminais, um para rodar o server das `API` e outro para o `webpack`, para rodar toda a aplicação localmente.

Assim que estiver instalados todas as depencias inicie o server das `API` com o comando: 

` 
  yarn run start-auth
`

Depois o comando do `webpack`:

`
  yarn run dev
`

## O Problema

O Boticário tem várias soluções para ajudar seus revendedores(as) a gerir suas finanças e alavancar
suas vendas. Também existem iniciativas para impulsionar as operações de vendas como metas
gameficadas e desconto em grandes quantidades de compras.

Agora queremos criar mais uma solução, e é aí que você entra com seu talento ;)

A oportunidade proposta é criar um sistema de Cashback, onde o valor será disponibilizado como
crédito para a próxima compra da revendedora no Boticário;

Cashback quer dizer “dinheiro de volta”, e funciona de forma simples: o revendedor faz uma
compra e seu benefício vem com a devolução de parte do dinheiro gasto.

Sendo assim o Boticário quer disponibilizar um sistema para seus revendedores(as) cadastrarem
suas compras e acompanhar o retorno de cashback de cada um.

## A Solução

Foi criado uma aplicação que possui todas os requesitos do desafio como:

* Tela de cadastro de um novo revendedor(a) solicitando Nome completo, CPF, e-
mail e senha;
* Tela de login para informar e-mail e senha;
* Tela de cadastro de compras onde deverá ser informado o código, valor e data;
* Tela de listagem das compras cadastradas exibindo as informações de código da
compra, valor, data, % de cashback aplicado, valor do cashback e status do
cadastro;
* Tela para exibir o valor de cashback acumulado até o momento, esta informação
virá de uma das APIs do boticário, que é um outro sistema que agrupa e consolida
todas as vendas do revendedor(a);
* Tela de informações do sistema, nesta tela terá nome, e-mail e outros dados do
desenvolvedor, no caso seus dados

## Problemas do desafio

O Problema é muito complexo para ser realizado somente do front-end, então com o pouco conhecimento que possuo de back consegui criar quatro `endpoints`. Todos feitos em `node` com `json-server`, segue os endpoint: 

* `/auth/login`: para relizar login com autenticação JWT, endpoint feito em node.

* `/auth/register`: Cadastro de um novo usuário com todas validações para ver se o mesmo já existe na base de dados.

* `/auth/login/shopping`: database para guardas informações das compras cadastradas.

* `/auth/login/users`: database para guardas informações dos usuários.

O desafio em si precisava de um back-end muito complexo, porém, fiz tudo o que estava ao meu alcance pois sou front, não back. Por conta dessa limitação deixei em aberto a questão de validações do nova compra que tinha que haver 3 estados `Em validação`, `Reprovado` e `Aprovado`. Isso é uma informação que teria que vir de uma API.

## Considerações

* Como nenhum layout foi disponibilizado, tentei imitar o máximo possível do site das revendedoras do boticário. 

* Não realizei o layout `Desktop`, somente `Mobile` porque o intuito em si do projeto é demonstrar a aplicação, e lembrando que o foco é sempre mobile-first.

* Não realizei um super tratamento dos `input`.

* Seguindo todos os conceitos de design patters e arquiteturas front-ends com BEM, SMACSS, ITCSS e RSCSS.

* E fim. :smiley:	

## Desenvolvido com:

* [React](https://reactjs.org/) 

* [Redux](https://redux.js.org/) 

* [Styled Components](https://www.styled-components.com/)

* [Webpack](https://webpack.js.org/) 

* [ESlint](https://eslint.org/) 

* [Prettier](https://prettier.io/) 

* [json-server](https://github.com/typicode/json-server) 

* [jwt](https://jwt.io/) 

