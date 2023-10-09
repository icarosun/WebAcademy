import { Request, Response, NextFunction } from 'express';

export const logger = (typeLogg: 'simples' | 'completo') => {
  switch (typeLogg) {
    case 'simples':
      return (req: Request, res: Response, next: NextFunction) => {
        const data = `${new Date().toISOString()}, ${req.url}, ${req.method}`;
        // fs.appendFile('./logger/logger.txt', data, (error) => {
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Deu certo');
        //     next();
        //   }
        // });

        console.log(data);
        next();
      };
    case 'completo':
      return (req: Request, res: Response, next: NextFunction) => {
        const data = `${new Date().toISOString()}, ${req.url}, ${req.method}, ${
          req.httpVersion
        }, ${req.get('User-Agent')}`;

        //     fs.appendFile('./logger/logger.txt', data, (error) => {
        //       if (error) {
        //         console.log(error);
        //       } else {
        //         console.log('Deu certo');
        //         next();
        //       }
        //     });
        console.log(data);
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
