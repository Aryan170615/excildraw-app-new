import { NextFunction, Request, Response } from "express"
import Jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
const middleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'] ?? "";
  const decoded = Jwt.verify(token, JWT_SECRET);

  if(decoded){
    // @ts-ignore  // todo fix this???
    req.userId = decoded.userId;
    next();
  }
  else {
    res.status(403).json({
        message : "Unauthorized"
    })
  }
}

export default middleware
