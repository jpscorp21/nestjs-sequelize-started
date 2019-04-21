import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ProductosModel } from '../../models/productos.model';

@Injectable()
export class ProductosService {

    /**
     * Obtiene todos los recursos de la tabla productos
     *
     * @returns Los datos consultados
     */
    async findAll() {
        try {
            return await ProductosModel.findAll();
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message,
            }, 500);
        }
    }

    /**
     * Consulta un registro de la tabla productos segun id
     *
     * @returns El dato consultado
     */
    async findById(id: number) {
        try {

            const data = await ProductosModel.findOne({
                where: {
                    id,
                },
            });
            return data;
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message,
            }, 500);
        }
    }

    /**
     * Crea un nuevo registro en la tabla productos
     *
     * @param body - La informacion a guardar
     * @returns El resultado de guardar
     */
    async create(body: any) {
        try {
            return await ProductosModel.create(body);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message,
            }, 500);
        }
    }

    /**
     * Actualiza un registro de la tabla productos segun id
     *
     * @param data - La informacion a actualizar
     * @param id - El id para actualizar
     * @returns El resultado de actualizar
     */
    async update(data: any, id: number) {
        try {
            return await ProductosModel.update(data, {
                where: {
                    id,
                },
            });
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message,
            }, 500);
        }
    }

    /**
     * Elimina un registro de la tabla productos segun id
     *
     * @param id - Utilizado para eliminar
     * @returns Resultados despues de eliminarse
     */
    async destroy(id: number) {
        try {
            return await ProductosModel.destroy({
                where: { id },
            });
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message,
            }, 500);
        }
    }
}
