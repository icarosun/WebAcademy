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
};

const outputFile = `${__dirname}/swagger-doc.json`;
const routers = [`${__dirname}/router/index.ts`];

swaggerAutogen()(outputFile, routers, doc);
