import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import { logger } from './middleware/logger';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 9999;
const FILE_LOGGER = process.env.FILE_LOGGER ?? 'logger/logger.txt';

const app = express();

app.use(logger('completo', FILE_LOGGER));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Requisição ${req.method} ${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

app.listen(PORT, () => {
  console.log(`Express server listen in port: ${PORT}`);
});
