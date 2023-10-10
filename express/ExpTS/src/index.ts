import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

import router from './router/router';
import validateEnv from './utils/validateEnv';
import logger from './middleware/logger';

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

app.use(
  sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use(logger('simples', `./logger/${FILE_LOGGER}`));

app.use('/img', express.static(`${publicPath}/public/img`));
app.use('/js', [
  express.static(`${publicPath}/public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js`),
]);
app.use('/css', express.static(`${__dirname}/../public/css`));
app.use(
  '/webfonts',
  express.static(
    `${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`,
  ),
);

app.use(router);

app.use((req: Request, res: Response) => {
  res.statusCode = 404;
  res.end('404!');
});

app.listen(PORT, () => {
  console.log(`Express server listen in port: ${PORT}`);
});
