![image](https://user-images.githubusercontent.com/54194337/83948273-83992f00-a7f2-11ea-90c5-850effb3d3ef.png)

## O que é

O Ecoleta é uma aplicação que tem como finalidade facilitar o encontro de pontos de coletas para um descarte consciente de resíduos
eletrônicos e orgânicos.

## Como é

O úsuario acessa a versão web, adiciona o ponto de coleta com seus dados da e-mail, whatsapp, localização e quais items coleta. 
Quem precisa de um ponto de coleta acessa o mobile, digita sua UF e cidade e tem acesso ao mapa que contem a localização dos pontos
de coleta.
Os pontos de coleta apresentados no mapa são filtrados de acordo com os items selecionados para coleta.

## API Rest

Este é o repositorio da API Rest do Ecoleta, onde contém os endpoints que a aplicação web e mobile consomem para fazer inserções e busca 
items e pontos de coleta.

## Construído com

- [Node.js](https://github.com/nodejs/node)
- [Yarn](https://github.com/yarnpkg/yarn)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Nodemon](https://github.com/remy/nodemon)

## Como executar

Para executar a aplicação você irá precisar de:
- [Node.js](https://github.com/nodejs/node)
- [Yarn](https://github.com/yarnpkg/yarn)

```javascript
// para baixar as dependências
yarn

// para atualizar o banco de dados
yarn knex:migrate

// para inserir as sementes (logo dos items) no banco de dados
yarn knex:seed

//para executar a API
yarn run dev 

```

## Contato 
---
[![linkedin](https://user-images.githubusercontent.com/54194337/83949361-be529580-a7f9-11ea-8cf6-bd38a1e8192f.png)][1]   [![gmail](https://user-images.githubusercontent.com/54194337/83949316-69168400-a7f9-11ea-9667-074e647a771b.png)][2]
---
[1]: https://www.linkedin.com/in/gabriel-gustavo-4946b7174/
[2]: mailto:gabrielgustavoandrade@gmail.com
