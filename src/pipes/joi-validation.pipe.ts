import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {

  constructor(private readonly schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {

    if (metadata.type !== 'body') {
      return value;
    }

    const { error } = Joi.validate(value, this.schema);

    if (error) {
        console.log(error);
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            message: error.details[0],
        }, 500);
    }

    return value;
  }
}
