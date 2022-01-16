import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) throw new NotFoundException('Token not found');
    const accesToken = jwt.verify(token, 'sumifru', (err, decoded) => {
      if (err) throw new NotFoundException('Token not valid');
      return decoded;
    });
    console.log(accesToken, ',imdpholaa');
    req.body.user = accesToken.user;
    if (!accesToken) return res.status(401).send('Unauthorized');
    next();
  }
}
