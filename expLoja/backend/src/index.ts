import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from "uuid";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setLangCookie from "./middleware/setLangCookie";

import { itemCarrinhoDto } from "./resources/compra/compra.types";

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuario: string
    carrinhoCompras: itemCarrinhoDto[]
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(morgan("combined"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    genid: () => uuidv4(),
    secret: "JOSJFJFljfalsjfoqJFLAJFDLAjfascpoiqwerqj",
    resave: true,
    cookie: { maxAge: 10 * 24 * 60 * 60 * 1000 },
    saveUninitialized: true,
  })
);
app.use(setLangCookie);
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
