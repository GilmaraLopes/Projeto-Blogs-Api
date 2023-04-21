# Blogs Api
Neste projeto, foi desenvolvida uma API em Node.js com o uso do pacote Sequelize para a criação, leitura, atualização e exclusão de posts em um banco de dados. A API também inclui endpoints que seguem os princípios REST.

Para fazer um post, é necessário fazer login com um usuário registrado e verificação de um Token. Além disso, os posts devem ser categorizados, o que envolve a criação de uma relação entre as tabelas "posts" e "categories", permitindo que um post pertença a uma ou várias categorias e que uma categoria possa estar associada a vários posts.

## Stacks:
Back-end: Node | Express | Docker | JavaScript | SQL | Sequelize | JWT

## Instalação
Instale Store Manager no seu terminal:
```http
  git clone *****
  docker-compose up -d
  docker exec *-it blogs_api* bash
  npm install
  npm start ou npm run debug
```
## Populando Tabela
Com tudo pronto rode os comandos:
```http
npm run drop : Deleta o banco de dados
npm run prestart : Cria o banco e gera as tabelas
npm run seed : Popula a tabela
```
