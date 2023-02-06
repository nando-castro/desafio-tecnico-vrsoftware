<h1 align="center">:file_cabinet: Documentação do Projeto</h1>

## :memo: Descrição
Projeto desenvolvido para o processo seletivo da empresa Vr Software.

## :books: Funcionalidades
* <b>Página de CRUD Alunos</b>: Página de alunos, onde é possível adicionar, listar, editar e deletar. Também é possível matricular-se em um curso.
* <b>Página de CRUD de Cursos</b>: Página de cursos, onde é possível criar, listar, editar e deletar. Também é possível matricular aluno no curso.

## :wrench: Tecnologias utilizadas
* Node.Js;
* React.Js;
* PostgreSQL;
* TypeScript;
* HTML e CSS;
* Axios;
* Express;
* Styled-components;
* Jest;
* Cypress;
* Docker;
* Docker-compose;

## API

**Criar Aluno**
```http
POST /student
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "name": "example", (tamanho max: 20 caracteres)
  }
  ```
  
**Retornar Alunos**
```http
GET /students
```
  ##### &nbsp; ‣ &nbsp; Resposta da requisição
```json
  [
    {
      "id": number,
      "name": "example",
      "createdAt":"datetime",
      "updatedAt":"datetime"
    },
  ]
  ```

**Atualizar Aluno**
```http
PUT /student/:id
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "name": "example",
  }
  ```
  
**Deletar Aluno**
```http
DELETE /student/:id
```

**Retornar lista de Cursos do Aluno**
```http
GET /student/:id/courses
```

  ##### &nbsp; ‣ &nbsp; Resposta da requisição
```json
  [
    {
      "id": number,
      "studentId": number,
      "courseId": number,
      "createdAt": "datetime",
      "updatedAt": "datetime",
      "course": {
      "description": "example"
      }
    }
  ]
  ```

  ____________________________________________________________________________________

**Criar Curso**
```http
POST /course
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "description": "example", (tamanho max: 50 caracteres)
    "course_content": "example example example"
  }
  ```
  
**Retornar Cursos**
```http
GET /courses
```
  ##### &nbsp; ‣ &nbsp; Resposta da requisição
```json
  [
    {
      "id": number,
      "description": "example",
      "course_content": "example example example",
      "createdAt":"datetime",
      "updatedAt":"datetime"
    },
  ]
  ```
  
**Atualizar Curso**
```http
PUT /course/:id
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "description": "example",
    "course_content": "example example example"
  }
  ```
  
**Deletar Curso**
```http
DELETE /course/:id
```

**Retornar lista de Alunos do Curso**
```http
GET /course/:id/students
```

  ##### &nbsp; ‣ &nbsp; Resposta da requisição
```json
  [
    {
      "id": number,
      "studentId": number,
      "courseId": number,
      "createdAt": "datetime",
      "updatedAt": "datetime",
      "student": {
      "name": "example"
      }
    }
  ]
  ```

  ____________________________________________________________________________________

**Criar Matrícula**
```http
POST /enrollment
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "courseId": number,
    "studentId": number
  }
  ```

**Deletar Matrícula**
```http
DELETE /enrollment/:id
```


## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, seguir os passos abaixo:
​

## BACK-END

**Environment Variables**: Você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo **.env** ou apenas copie as informações do arquivo **.env.example** para dentro do arquivo **.env**.
​

`DATABASE_URL=postgresql://postgres:password@localhost:5432/my_db?schema=public`

`POSTGRES_USER=postgres`

`POSTGRES_PASSWORD=password`

`POSTGRES_DB=my_db`

`PORT = number #recommended:5000`

Inicie um terminal na pasta do back:
```bash
  cd /app/back
```

Instale as dependências do projeto:
```bash
  npm install
```

Execute o build do projeto:
```bash
  npm run build
```

Você pode rodar o projeto execute o comando:
```
npm start
```
**Ou siga os passos abaixo:**

Execute as migrations do projeto:
```bash
  npm run prisma:dev
```

Para iniciar o projeto é necessário dar o seguinte comando:
```
npm run dev
```

Para rodar os testes do back-end, configure as variáveis de ambiente do .env.test (iguais do .env.example) e execute o seguinte comando:

```
npm run test
```

## FRONT-END

Inicie um terminal na pasta do front:
```bash
  cd /app/front
```

Instale as dependências do projeto:
```bash
  npm install
```

Para iniciar o projeto é necessário dar o seguinte comando:
```
npm run dev
```

## AMBIENTE DOCKER

Para iniciar o projeto em ambiente Docker, na pasta back-end do projeto, execute o seguinte comando:
```
docker compose up
```

Obs: Não esqueça de alterar o host da sua string de conexão com o banco de dados para o host do docker:

`DATABASE_URL=postgresql://postgres:password@db_app_vr:5432/my_db?schema=public`

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/nando-castro">
        <img src="https://avatars.githubusercontent.com/u/75530766?v=4" width="100px;" alt="Foto de Fernando Castro no GitHub"/><br>
        <sub>
          <b>nando-castro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
Finalizado
