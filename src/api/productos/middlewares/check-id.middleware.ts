import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductosModel } from '../../../models/productos.model';

@Injectable()
export class CheckIdMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next) {
    const data = await ProductosModel.findOne({
        where: {
            id: Number(req.params.id),
        },
    });

    if (!data) {
        throw new HttpException('Not found', 404);
    }

    next();
  }
}
