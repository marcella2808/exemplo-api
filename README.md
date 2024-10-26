# Modelo de aplicação full-stack

Este projeto é um modelo de aplicação focado na criação de uma API, que foi desenvolvida para servir como base para futuras aplicações. Ele inclui operações CRUD com integração ao MongoDB no backend, utilizando Node.js e Express. Também conta com uma interface frontend simples para interação com o usuário.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
  
## Instalação

Instruções para que os usuários possam instalar e rodar o projeto localmente.

### Clonar o repositório
```bash
git clone https://github.com/marcella2808/exemplo-api.git
```
### Entrar no diretório /backend
```bash
cd backend
```
### Instalar as dependências
```bash
npm install
```
### Criar o arquivo .env baseado no arquivo env.example
Linux/Mac/Git Bash
```bash
cp .env.example .env
```
Windows
```powershell
Copy-Item .env.example .env
```
CMD
```cmd
copy .env.example .env
```
## Uso
### Executar aplicação no terminal
```bash
npm start
```
### Acessar a URL no navegador
```txt
http://localhost:3000
```
## Endpoints

| MÉTODO | LINK | DESCRIÇÃO |
|-----|------|-----------|
| GET | http://localhost:3000/clientes/get | Obtém os dados de todos os clientes  |
| GET | http://localhost:3000/clientes/get/{id} | Obtém os dados de um cliente específico (identificado pelo id) |
| POST| http://localhost:3000/clientes/post | Envia os dados de um novo cliente |
| PUT| http://localhost:3000/clientes/update/{id} | Atualiza os dados de um cliente existente |
| DELETE | http://localhost:3000/clientes/delete/{id} | Deleta os dados de um cliente específico (identificado pelo id) |

| MÉTODO | LINK                                          | DESCRIÇÃO                                   |
|--------|----------------------------------------------|---------------------------------------------|
| GET    | http://localhost:3000/inicio     | Serve a página inicial      |
| GET    | http://localhost:3000/clientes/cadastro     | Serve a página de cadastro de clientes      |
| GET    | http://localhost:3000/clientes/lista        | Serve a página de listagem de clientes      |
| GET    | http://localhost:3000/clientes/editar/{id}  | Serve a página de edição de cliente         |


## Funcionalidades
- Cadastro de clientes
- Listagem de clientes
- Atualização de clientes
- Remoção de clientes

## Tecnologias
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=mongoose&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
