# TensorFriend
Bot do grupo @tensorflowjs_br do telegram


### CONTRIBUINDO

Um pequeno passo a passo para contribuir. Lembre-se de, previamente, pedir acesso ao projeto/repositório para contribuir com o mesmo.

#### Iniciando

0. Requisitos

* Git
* Node.js/NPM
* Uma chave da [News API](https://newsapi.org/)

1. Clonar o repositório e instalar dependências

```bash
git clone https://github.com/gabrielrufino/TensorFriend
cd TensorFriend
npm i
```

2. Configurar variáveis de ambiente e iniciar o bot

```bash
cp .env.example .env
nano .env # You can use any editor
npm start
```
#### Serviços externos

Lista de serviços e APIs externas usadas pelo bot.

### News API

https://newsapi.org/

Serviço usado para a busca de notícias sobre assuntos relacionados ao grupo, tais como `Machine Learning`, `TensorFlow`, etc. 
