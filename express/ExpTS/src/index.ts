import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? 9999;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Express server listen in port: ${PORT}`);
});
