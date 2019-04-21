import { Controller, Get, Param, Post, Body, Delete, Put, UsePipes } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Productos } from './dto/productos.dto';
import { ValidationPipe } from '../../pipes/validation.pipe';

@Controller('productos')
export class ProductosController {

    constructor(public _productos: ProductosService) {}

    /**
     * Consulta todos los productos
     *
     * @returns Los productos consultados
     */
    @Get('/')
    findAll() {
        return this._productos.findAll();
    }

    /**
     * Consulta de un producto segun id
     *
     * @param id - Para la consulta
     */
    @Get('/:id')
    findById(@Param('id') id: string) {
        const data: Productos = new Productos();
        return this._productos.findById(Number(id));
    }

    /**
     * Creacion de un nuevo producto
     *
     * @param data - La informacion a almacenar
     * @returns Los resultados de la informacion creada
     */
    @Post('/')
    @UsePipes(ValidationPipe)
    create(@Body() data: Productos) {
        return this._productos.create(data);
    }

    /**
     * Actualiza un producto
     *
     * @param data La informacion para actualizar
     * @param id Para identificar el registro a actualizar
     * @returns Los resultados de la actualizacion de productos
     */
    @Put('/:id')
    update(@Body() data: any, @Param('id') id: string) {
        return this._productos.update(data, Number(id));
    }

    /**
     * Eliminar un producto
     *
     * @param id - Para identificar el registro a actualizar
     * @returns Resultado tras eliminar un producto
     */
    @Delete('/:id')
    async destroy(@Param('id') id: string) {
        await this._productos.destroy(Number(id));
        return id;
    }
}
