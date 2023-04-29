# API Rest Node - Aula
## Descrição
Esta é uma API Rest Node desenvolvida durante a aula do bootcamp Ignite da Rocketseat, com o objetivo de criar um sistema simples de registro de transações financeiras.

## Pré-requisitos

  * Node.js >= 18

## Instalação
  1. Clone este repositório em sua máquina local:
```bash
git clone https://github.com/seu-usuario/aula.git
```
  2. Instale as dependências do projeto:
```bash
npm install
```
Em seguida, é necessário configurar o banco de dados. O aplicativo foi configurado para utilizar o SQLite em desenvolvimento e PostgreSQL em produção, portanto, defina o arquivo `.env` seguindo o `.env.example` e execute o seguinte comando:

```bash
npm run knex migrate:latest
```
  3. Inicie o servidor:

```bash
npm run dev
```

## Endpoints

### POST /transactions

Registra uma nova transação.

Body

title: Título da transação.

amount: Valor da transação.

type: Tipo da transação (credit ou debit).

Exemplo de corpo de requisição:

```json
{
  "title": "Aluguel",
  "amount": 1500,
  "type": "debit"
}
```

### GET /transactions
Retorna uma lista de todas as transações registradas.

Headers
* **Cookie**: sessionId

Exemplo de resposta:

```json
{
  "transactions": [
    {
      "id": "43d9dfb5-0c43-48b1-82f5-8d157a5eb947",
      "title": "Salário",
      "amount": 5000,
      "session_id": "f8be786d-03a1-4bdc-afcc-b9d840ee3919",
      "created_at": "2022-04-28T17:35:07.119Z",
      "updated_at": "2022-04-28T17:35:07.119Z"
    },
    {
      "id": "3472f16f-0b89-4c7a-b07b-cb5627e14d0a",
      "title": "Aluguel",
      "amount": -1500,
      "session_id": "f8be786d-03a1-4bdc-afcc-b9d840ee3919",
      "created_at": "2022-04-28T17:35:07.119Z",
      "updated_at": "2022-04-28T17:35:07.119Z"
    }
  ]
}
```
### GET /transactions/:id

Retorna uma transação específica.

Headers

* **Cookie**: sessionId

Parâmetros


* **id**: UUID da transação desejada.


Exemplo de resposta:

```json
{
  "transaction": {
    "id": "43d9dfb5-0c43-48b1-82f5-8d157a5eb947",
    "title": "Salário",
    "amount": 5000,
    "session_id": "f8be786d-03a1-4bdc-afcc-b9d840ee3919",
    "created_at": "2022-04-28T17:35:07.119Z",
    "updated_at": "2022-04-28T17:35:07.119Z"
  }
}
```
### GET /transactions/summary

Retorna um resumo das transações registradas.

Headers

* **Cookie**: sessionId

Exemplo de resposta:

```json
{
  "summary": {
    "amount": 3500
  }
}
```

## Requisitos Funcionais

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas a transações que já ocorreram;
- [x] O usuário deve poder visualizar uma única transação;

# Regras de Negócio

- [x] A transação pode ser do tipo crédito que somará ao total, ou débito que subtrairá;
- [x] Deve ser possível identificar o usuário entre as requisições;
- [x] O usuário só pode visualizar o qual ele criou;