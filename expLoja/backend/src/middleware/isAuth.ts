import { Request, Response, NextFunction } from "express";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session.uid) next();
  else res.status(403).json({message: "Não autorizado ou usuário não está logado"});
};

export default isAuth;

