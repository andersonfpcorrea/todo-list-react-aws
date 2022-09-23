# _[Todo app](https://master.da3owp9wefdc1.amplifyapp.com/)_

![ezgif com-gif-maker](https://user-images.githubusercontent.com/92505216/191913272-ef1b2190-52f1-4caf-88e2-692438dd22ea.gif)

<details>
<summary><strong>Leia a descrição do projeto em português 🇧🇷</strong></summary>
<br />

## Descrição

Este é um app de lista de afazeres (_todo app_) full-stack:

- Há autenticação de usuário, criação de conta com verificação de email, recuperação de senha e validação de dados no formulário de login.
- O usuário pode criar tarefas com título e descrição, além de poder fazer upload de imagens.
- As tarefas ficam salvas no banco de dados da aplicação (e não no local storage).

</br>

## Arquitetura

O frontend do projeto foi desenvolvido em React e hospedado com o serviço _[AWS Amplify](https://aws.amazon.com/amplify/)_

A autenticação de usuário foi feita através da _[Amazon Cognito](https://aws.amazon.com/cognito/)_ e de _libraries_ da AWS Amplify.

No backend foi criada uma API _[GraphQL](https://graphql.org/)_ com os serviços _[AWS AppSync](https://aws.amazon.com/pt/appsync/)_ e _[Amazon S3](https://aws.amazon.com/pt/s3/)_ num banco de dados NoSQL (_[Amazon DynamoDB](https://aws.amazon.com/pt/dynamodb/)_).

</br>

## Setup do projeto

- React v.18.2.0
- AWS Amplify CLI v.10.0.0

<br>

## Continuous Delivery (CD)

- Processo de entrega contínuo (CD) com _[AWS Amplify](https://master.da3owp9wefdc1.amplifyapp.com/)_.

</details>

<br />
<br />
<details open>
<summary><strong>Read the project's description in English 🇬🇧</strong></summary>
<br />

## Description

This is a full-stack todo app.

- There is user authentication, creation of new accounts with email verification, password recovery and form data validation;
- The user can create tasks (_todo_ 's) with title and description, and upload an image for each _todo_;
- All tasks are stored into the app's database (not in the local storage).

</br>

## Architecture

The frontend was developed with React and deployed with _[AWS Amplify](https://aws.amazon.com/amplify/)_

User authentication was carried out with AWS Amplify libraries and _[Amazon Cognito](https://aws.amazon.com/cognito/)_.

For the backend it was created a _[GraphQL API](https://graphql.org/)_ with _[AWS AppSync](https://aws.amazon.com/pt/appsync/)_ and _[Amazon S3](https://aws.amazon.com/pt/s3/)_ services, using a NoSQL database (_[Amazon DynamoDB](https://aws.amazon.com/pt/dynamodb/)_).

</br>

## Project Setup

- React v.18.2.0
- AWS Amplify CLI v.10.0.0

<br>

## Continuous Delivery (CD)

- Continous delivery (CD) with _[AWS Amplify](https://master.da3owp9wefdc1.amplifyapp.com/)_.

</details>
