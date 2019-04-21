import { Model, DataTypes } from 'sequelize';
import ConfigModel from '../util/config-model';
import sequelize from '../database';

export class ClientesModel extends Model {}

ClientesModel.init(
  {
    nombre: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    cedula: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    correo: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
  }, {
    sequelize,
    ...ConfigModel('t_clientes'),
  },
);
