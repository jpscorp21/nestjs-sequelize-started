import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
// tslint:disable-next-line:no-var-requires
const config = require(`${__dirname}/config/config-secret.json`)[env];

// Conexion a la base de datos
const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            ...config,
            dialectOptions: {
                useUTC: false,
                dateStrings: true,
                typeCast: true,
            },
        },
    );

sequelize.sync();

export default sequelize;
