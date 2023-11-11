import { Request, Response, NextFunction } from "express";
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constants";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  if(req.session.tipoUsuario && req.session.tipoUsuario === TiposUsuarios.ADMIN) next();
  else res.status(403).json({message: "Não autorizado"})
}

export default isAdmin;
