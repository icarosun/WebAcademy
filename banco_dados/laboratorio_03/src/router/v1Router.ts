import { Router, Request, Response } from "express";

const v1Router = Router();

v1Router.use("/categoria", (req: Request, res: Response) => {
  res.send("Olá dentro da categoria");
});

export default v1Router;
