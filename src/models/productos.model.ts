import { Model, DataTypes } from 'sequelize';
import ConfigModel from '../util/config-model';
import sequelize from '../database';

export class ProductosModel extends Model {}

ProductosModel.init(
  {
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.REAL(11, 0),
      allowNull: false,
    },
    costo: {
      type: DataTypes.REAL(11, 0),
      allowNull: true,
    },
    unidad: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    stock_minimo: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    stock_actual: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },

  }, {
    sequelize,
    ...ConfigModel('t_productos'),
  },
);
