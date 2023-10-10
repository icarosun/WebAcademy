import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import { logger } from './middleware/logger';
import router from './router/router';
import { engine } from 'express-handlebars';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 9999;
const FILE_LOGGER = process.env.FILE_LOGGER ?? 'logger/logger.txt';

const publicPath = process.cwd();

const app = express();

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(logger('simples', `./logger/${FILE_LOGGER}`));

app.use('/img', express.static(`${publicPath}/public/img`));
app.use('/js', express.static(`${publicPath}/public/js`));

app.use(router);

app.use((req: Request, res: Response) => {
  res.statusCode = 404;
  res.end('404!');
});

app.listen(PORT, () => {
  console.log(`Express server listen in port: ${PORT}`);
});
