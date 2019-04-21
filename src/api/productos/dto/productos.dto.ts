import { IsString, IsInt, IsNumber, Min } from 'class-validator';

export class Productos {

    @IsString()
    descripcion: string;

    @IsNumber()
    precio: number;

    @IsNumber()
    costo: number;

    @IsString()
    unidad: string;

    @IsInt()
    @Min(0)
    stock_minimo: string;

    @IsInt()
    @Min(0)
    stock_actual: string;
}
