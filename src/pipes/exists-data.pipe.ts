import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExistsDataPipe implements PipeTransform {

  constructor(public readonly objectModel: any) {}

  async transform(value: any, metadata: ArgumentMetadata) {

    const data = await this.objectModel.findOne({
        where: {
            id: Number(value),
        },
    });

    console.log(data);

    if (!data) {
        throw new HttpException(`No existe datos para el id ${value}`, HttpStatus.NOT_FOUND);
    }

    return value;
  }
}
