import { Request, Response } from "express";

function change(req: Request, res: Response) {
/*
    #swagger.summary = "Insere uma língua no cookies"
    #swagger.parameters['lang'] = {
     in: 'body',
     example: "pt-BR ou en-US",
    description: "Valor da língua, isso ficará salvo no cookie"
    }
     */

  const lang = req.body.lang;
  res.cookie("lang", lang);
  res.status(200).json({ lang });
}

export default { change };
