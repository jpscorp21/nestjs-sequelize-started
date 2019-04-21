import { ObjectSchema } from 'joi';
import { promisify } from 'util';

export const JoiValidation = async (data, schema: ObjectSchema) => {
    const promise: any = promisify(schema.validate);
    console.log(await promise(data, schema));
};
