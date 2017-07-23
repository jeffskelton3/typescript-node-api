import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import * as config from '../config/config.json';

import { UsersAttributes, UsersInstance } from './users';

interface DbConnection {
    Users: Sequelize.Model<UsersInstance, UsersAttributes>;
}

const env = process.env.NODE_ENV || 'development';

let db: any = {};

let sequelize: any = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    config[env]
);

const basename = path.basename(module.filename);
fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        console.log(file);
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default <DbConnection>db;
