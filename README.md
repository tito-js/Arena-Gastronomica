## Visão Geral
A Arena Gastronômica é uma aplicação web full-stack para um restaurante fictício. Ela foi desenvolvida utilizando TypeScript e JavaScript, faz uso de várias tecnologias populares, incluindo Next.js, React, Prisma, PostgreSQL, Stripe, NextAuth.js com autenticação via Google, e Tailwind CSS. A aplicação está hospedada na plataforma de hospedagem Vercel.

## Tecnologias Utilizadas
- **Frontend**:
    - [﻿Next.js](https://nextjs.org/) 
    - [﻿React](https://reactjs.org/) 
    - [﻿Tailwind CSS](https://tailwindcss.com/) 
- **Backend**:
    - [﻿NextAuth.js](https://next-auth.js.org/) 
    - [﻿Prisma](https://prisma.io/) 
    - [﻿PostgreSQL](https://www.postgresql.org/) 
- **Pagamentos**:
    - [﻿Stripe](https://stripe.com/) 
- **Hospedagem**:
    - [﻿Vercel](https://vercel.com/) 
## Estrutura do Projeto
```
arena-gastronomica/
|-- src/
|   |-- components/
|   |-- auth/
|   |-- api/
|   |-- utils/
|-- public/
|-- prisma/
|-- vercel.json
|-- README.md
```
- `*src/*` : Contém todos os arquivos da aplicação.
- `*api/*` : Contém todas as rotas da API.
- `*utils/*` : Utilitários e funções auxiliares.
- `*prisma/*` : Definições de modelo e configuração do Prisma.
- `*public/*` : Contém arquivos estáticos como imagens e fontes.
- `*vercel.json*` : Configurações específicas para a implantação na Vercel.
- `*README.md*` : Esta documentação.

## Configuração Local
1. **Clonando o Repositório**: `git clone https://github.com/tito-js/arena-gastronomica.git` 
2. **Instalando Dependências**: `cd arena-gastronomica`

3. **Configurando o Banco de Dados**:
    - Instale e configure o PostgreSQL. Crie um banco de dados chamado `arena_gastronomica` 
4. **Configurando as Variáveis de Ambiente**:
    - Crie um arquivo `.env`  na pasta do projeto e adicione as variáveis de ambiente necessárias. 
Exemplo: 

```
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
NEXTAUTH_SECRET=""
GOOGLE_ID = 
GOOGLE_SECRET =
```
## Deploy na Vercel
1. **Configuração do Vercel**:
    - Crie uma conta na [﻿Vercel](https://vercel.com/)  e vincule seu repositório ao projeto.
2. **Configuração das Variáveis de Ambiente na Vercel**:
    - No painel da Vercel, vá para "Settings" > "Environment Variables" e adicione as variáveis de ambiente correspondentes.
3. **Deploy Automático**:
    - Qualquer push no branch principal (geralmente `main` ) automaticamente acionará um novo deploy na Vercel.
## Funcionalidades
- **Autenticação**:
    - Os clientes podem se autenticar usando o Google com o NextAuth.js.
- **Pedidos e Pagamentos**:
    - Os clientes podem fazer pedidos e efetuar pagamentos usando o Stripe.
- **Gestão do Menu**:
    - Os administradores podem adicionar, editar e excluir itens do menu.
- **Gestão de Pedidos**:
    - Os administradores podem visualizar e gerenciar os pedidos recebidos.
- **Gestão de Usuários**:
    - Os administradores podem visualizar e gerenciar usuários registrados.
## Licença
Este projeto está sob a licença  [﻿MIT](https://github.com/tito-js/Arena-Gastronomica/blob/main/LICENSE) 

