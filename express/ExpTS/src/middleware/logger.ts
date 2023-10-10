import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import extractDirPath from '../utils/extractDirPath';

async function appendLogToFile(filePath: string, log: string) {
  try {
    await fs.promises.appendFile(filePath, log);
  } catch (error) {
    console.log('Diretório inexistente');
    fs.mkdirSync(`./${extractDirPath(filePath)}`, { recursive: true });
    fs.appendFile(filePath, log, (error) => {
      if (error) {
        console.log(error);
        throw new Error(
          'Não foi possível criar o diretório e adicionar conteúdo ao arquivo',
        );
      }
    });
  }
}

const logger = (typeLogg: 'simples' | 'completo', path: string) => {
  switch (typeLogg) {
    case 'simples':
      return (req: Request, res: Response, next: NextFunction) => {
        const data = `${new Date().toISOString()}, ${req.url}, ${req.method}\n`;

        appendLogToFile(path, data);
        next();
      };
    case 'completo':
      return (req: Request, res: Response, next: NextFunction) => {
        const data = `${new Date().toISOString()}, ${req.url}, ${req.method}, ${
          req.httpVersion
        }, ${req.get('User-Agent')}`;

        appendLogToFile(path, data);
        next();
      };

    default:
      return (req: Request, res: Response, next: NextFunction) => {
        throw new Error(
          'Comando de logg inesistente. Opções aceitáveis: ["simples", "completo"] ',
        );

        next();
      };
  }
};

export default logger;
