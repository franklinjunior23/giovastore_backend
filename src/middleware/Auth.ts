import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

declare global {
    namespace Express {
      interface Request {
        user?: any; // Cambia 'any' al tipo de datos que esperas almacenar en 'user'
      }
    }
}

export const AuthLoged = async(req:Request,res:Response,next: NextFunction)=>{
try {
    
    const token = req.header(process.env.VALIDATION_HEADER||'')
    if(!token)return res.status(401).json({ error: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT||'');
    req.user = decoded;
    next()
} catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
}
}