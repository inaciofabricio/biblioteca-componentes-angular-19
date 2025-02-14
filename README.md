# biblioteca-componentes-angular-19 (Monorepo)

Este monorepo contém dois projetos principais:

1. **coin-ui-angular**: Uma biblioteca de componentes Angular (versão 19).
2. **coin-ui-doc**: Documentação sobre como utilizar a biblioteca `coin-ui-angular`.

### Estruturando o Projeto
Organização da estrutura de pastas do monorepo:
```
coin-ui-angular/
coin-ui-doc/
.gitignore
README.md
```

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Angular CLI](https://angular.io/cli) (v19 ou superior)
- [Git](https://git-scm.com/)

## Como Configurar o Projeto

### Clonando o Repositório
```bash
git clone https://github.com/inaciofabricio/biblioteca-componentes-angular-19.git
```

### Rodando localmente
Necessário abrir dois terminais, um para que a lib fiquei rodando com watch e outro para executar o doc.

Terminal 1: 
**obs**: execute o npm install caso necessário
```bash
cd coin-ui-angular
npm install
npm run watch
```

Terminal 2:
**obs 1**: execute o npm install caso necessário
**obs 2**: execute o install "..\coin-ui-angular\dist\coin-ui" para instalar a versão local da lib
```bash
cd coin-ui-doc
npm install
npm install "..\coin-ui-angular\dist\coin-ui"
npm run start
```

## Conclusão
Este monorepo é um exemplo prático de como criar e organizar uma biblioteca de componentes reutilizáveis com Angular 19+. Atualmente, o projeto `coin-ui-angular` já inclui alguns componentes essenciais, mas a estrutura foi pensada para ser escalável, permitindo a adição de novos componentes conforme a necessidade.

Além disso, o projeto `coin-ui-doc` serve como uma documentação interativa, facilitando o entendimento e a utilização da biblioteca. Essa abordagem não apenas acelera o desenvolvimento de futuros projetos, mas também promove boas práticas de organização e documentação de código.

Sinta-se à vontade para explorar, contribuir ou utilizar esses projetos como base para suas próprias implementações!