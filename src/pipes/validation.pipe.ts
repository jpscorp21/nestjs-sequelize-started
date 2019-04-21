import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpStatus, HttpException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);

    // Valida los campos
    const errors: ValidationError[] = await validate(object);

    // Si existen errores devuelve los resultados
    if (errors.length > 0) {
      console.log(errors);
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        message: 'Validation failed',
        error: errors[0].constraints,
      }, 500);
    }

    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
