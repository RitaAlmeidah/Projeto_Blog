# Blog Pessoal Frontend

<h2>Descrição</h2>
<p>Este repositório contém a parte frontend do projeto Blog, criado usando Vite, TypeScript, React e Axios. O projeto Blog é um aplicativo Web que permite aos usuários ler e criar postagens de blog.</p>
<p>Ele se conecta ao back-end hospedado no Render usando o Axios para chamadas de API.</p>

## Tecnologias Utilizadas
- Vite
- TypeScript
- React
- Axios

## Características
- Funcionalidade de autenticação e login do usuário.
- Ver e ler posts do blog.
- Criar novas postagens de blog.
- Editar e excluir postagens de blog existentes.
- Curtir e comentar em posts do blog.
- Design responsivo para dispositivos móveis e desktop.

## Conexão de back-end

O frontend é conectado ao back-end hospedado no Render usando o Axios para fazer solicitações de API. A URL base da API é especificada no arquivo `.env`.
<p>Para acessar o código de back-end vá para `https://github.com/RitaAlmeidah/Projeto_BlogPessoal_Backend`</p>

## Estrutura de pastas

- `src`: Contém os principais arquivos de código-fonte para o frontend.
- `assets`: Imagens e Fontes.
- `components`: componentes da interface do usuário reutilizáveis.
- `contexts`: Provedores de Autorização e Contexto.
- `pages`: Componentes de página individuais.
- `services`: funções de serviço de API (por exemplo, solicitações Axios).
- `models`: interfaces e modelos TypeScript.
- `public`: Contém os bens públicos (por exemplo, imagens).
- `dist`: Diretório de saída para a compilação.

***
<h2>1. Como executar o front-end (Blog Pessoal)</h2>

### Pré-requisitos

Certifique-se de que você tenha o seguinte instalado em seu sistema:

       [Git](https://git-scm.com/downloads), [Node](https://nodejs.org/en), [Gerenciador de pacotes Yarn](), [VScode](https://code.visualstudio.com/) e [Insomnia](https://insomnia.rest/download).
***
<h3>👣 Passo 1: Clonar o Repositório</h3>

Abra um terminal ou prompt de comando. <br/>
Navegue até o diretório onde você deseja clonar o repositório. <br/>
Execute o seguinte comando para clonar o repositório:

```
git clone https://github.com/RitaAlmeidah/Projeto_Blog.git
```

Aguarde até que o processo de clonagem seja concluído.

***
<h3>👣 Passo 2: Entrar na Pasta do Projeto</h3>

Após a conclusão da clonagem, execute o seguinte comando para entrar na pasta do projeto:
```
cd Projeto_Blog
```

***
<h3>👣 Passo 3: Instalar as Dependencias</h3>

Verifique se há um arquivo chamado `package.json` na pasta do projeto. Esse arquivo contém as configurações e dependencias para o projeto.

```
npm install
yarn install
```

Crie um arquivo `.env` com as variáveis de ambiente necessárias (por exemplo, URL base da API, tokens de autenticação).

***
<h3>👣 Passo 4: Executar o Projeto no VScode</h3>

Com o `yarn` e dependencias instalados em seu sistema, execute o seguinte comando para iniciar o projeto:

```
yarn run dev
```

http://localhost:5173/


***

## Deploy no Vercel:
https://projeto-blog-pessoal-sigma.vercel.app/


***
## Desenvolvido por:
- Rita Almeida https://github.com/RitaAlmeidah

