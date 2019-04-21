import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { CheckIdMiddleware } from './middlewares/check-id.middleware';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckIdMiddleware)
      .forRoutes(
        { path: 'productos/:id', method: RequestMethod.GET },
        { path: 'productos/:id', method: RequestMethod.DELETE },
        { path: 'productos/:id', method: RequestMethod.PUT },
      );
  }
}
