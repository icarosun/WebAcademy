import swaggerAutogen from "swagger-autogen";

import dotenv from "dotenv";
dotenv.config();

const doc = {
  info: {
    title: "Api da Loja Virtual", 
    description:
      "Documentação da API da Loja Virtual implementada no web academy",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  definitions: {
    CreateUsuarioDto: {
	    nome: "Jay Wiza",
	    email: "Carissa_Reichert19@yahoo.com",
	    senha: "123456",
	    tipoUsuarioId: "380c7fd1-f5f8-490a-8fc4-d4e415c78d96",
    },
    UpdateUsuarioDto: {
      nome: "Jay Wiza",
	    email: "Carissa_Reichert19@yahoo.com",
	    senha: "123456",
	    tipoUsuarioId: "380c7fd1-f5f8-490a-8fc4-d4e415c78d96",
    },
    CreateProdutoDto: {
      $nome: "Keyboard",
      $preco: 602,
      $estoque: 8
    },
    UpdateProdutoDto: {
      $nome: "Keyboard",
      $preco: 602,
      $estoque: 8
    },
    Produto: {
      id: "5fa42220-21fd-42ff-8e18-f2cac7f77c15",
	    nome: "Keyboard",
      preco: 602,
    	estoque: 8,
    	createdAt: "2023-11-12T10:44:02.517Z",
	    updatedAt: "2023-11-12T10:44:02.517Z"
    },
    LoginDto: {
      $email: "Lauriane.Vandervort@yahoo.com",
      $senha: "1234567"
    },
    SignUpDto: {
      nome: "Randolph Roberts",
	    email: "Maximo.Hartmann@gmail.com",
      senha: "123456"
    },
    Usuario: {
      id: "eab9b3bf-c483-4fe4-9347-a1397a8cce7c",
	    nome: "Randolph Roberts",
	    email: "Maximo.Hartmann@gmail.com",
	    senha: "$2a$10$RztpuFb2XIkgeQuzjtk6..CZ9aT4UVYiz7Htp.iMmpuHDGZgNqZzy",
	    tipoUsuarioId: "380c7fd1-f5f8-490a-8fc4-d4e415c78d96",
	    createdAt: "2023-11-12T16:10:33.264Z",
	    updatedAt: "2023-11-12T16:10:33.264Z"
    },
    itemCarrinhoDto: {
      id: "ec757cea-783f-48ea-b6fa-5928e74067e6",
      quantidade: 1
    }
  }
};

const outputFile = `${__dirname}/swagger-doc.json`;
const routers = [`${__dirname}/router/index.ts`];

swaggerAutogen()(outputFile, routers, doc);
