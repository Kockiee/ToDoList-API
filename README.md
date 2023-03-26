# Título do Projeto

Uma api para criar, atualizar, deletar e listar tarefas para ser utilizada em Website de *ToDoLists*.


## Instalação

- Instale o projeto em seu pc com

```bash
git clone https://github.com/Kockiee/ToDoList-API.git
cd ToDoList
npm install
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```
Conecte-se no mysql criado e execute a seguinte query:

```bash
CREATE DATABASE todolist;

USE todolist;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
```
Execute a aplicação com o comando:

```bash
npm run dev
```


    
## Documentação da API

#### api-key

Desnecessária no momento

#### Retorna todos os itens

```http
  GET /tasks
```

#### Cria um item

```http
  POST /tasks
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título da tarefa |

#### Atualiza um item

```http
  PUT /tasks/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título da tarefa |
| `status`      | `string` | **Obrigatório**. Status da tarefa |

#### Deleta um item

```http
  DELETE /tasks/:id
