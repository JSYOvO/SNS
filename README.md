
[command]
$ npm i -D apollo-server graphql mongoose

[MongoDB Atlas]
1. 프로젝트 생성
2. 클러스터 생성
3. 계정 및 접근권한 설정
4. connect 진행


[register]
$ npm install bcryptjs jsonwebtoken

[GraphQL]
Apollo 에서 gql로 날리는 쿼리는 post로 날리는거와 다를바가 없다

=> gql
mutation {
  login(username:"user", password:"123456"){
    id
    email
    token
    username
    createdAt
  }
}

=> post
{
    "query: "mutation{login(username:\"user\", password:\"123456\"){ id email token username createdAt }
}

사용자 인증은  JWT(JSON Web Token)사용하며
일반적으로 많이 하는 express에 구성하는것은 보안상 별로 좋지않다
apollo서버에 올렷다


[client]
apollo install
$ npm i -D @apollo/react-hooks apollo-cache-inmemory apollo-link-http apollo-client 

router install
npm i -D react-router-dom

   as={Link}
  to="/"


semantic-su install
npm i -D semantic-ui-css semantic-ui-react

[grapphql]
npm i -D graphql graphql-tag


npm i -D moment

[인증 유지]
npm i -D jwt-decode