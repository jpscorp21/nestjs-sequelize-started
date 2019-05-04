import { Controller, Get, Param, Post, Body, Delete, Put, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Productos } from './dto/productos.dto';
import { ProductosModel } from '../../models/productos.model';
import { ExistsDataPipe } from '../../pipes/exists-data.pipe';
import { JoiValidationPipe } from './../../pipes/joi-validation.pipe';
import { ProductosSchema } from '../../schemas/productos.schemas';

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
    @UsePipes(new ExistsDataPipe(ProductosModel))
    findById(@Param('id', new ParseIntPipe()) id) {
        return this._productos.findById(id);
    }

    /**
     * Creacion de un nuevo producto
     *
     * @param data - La informacion a almacenar
     * @returns Los resultados de la informacion creada
     */
    @Post('/')
    @UsePipes(new JoiValidationPipe(ProductosSchema))
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
    @UsePipes(new JoiValidationPipe(ProductosSchema))
    async update(
        @Body() data: Productos,
        @Param('id', new ParseIntPipe(), new ExistsDataPipe(ProductosModel)) id: number,
    ) {
        await this._productos.update(data, id);
        return id;
    }

    /**
     * Eliminar un producto
     *
     * @param id - Para identificar el registro a actualizar
     * @returns Resultado tras eliminar un producto
     */
    @Delete('/:id')
    async destroy(
        @Param('id', new ParseIntPipe(), new ExistsDataPipe(ProductosModel)) id: string) {
        await this._productos.destroy(Number(id));
        return id;
    }
}
