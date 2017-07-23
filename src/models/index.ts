import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
import * as config from '../config/config.json';

let db:any = {};
let sequelize:any = null;

if (config[env].use_env_variable) {
  sequelize = new Sequelize(process.env[config[env].use_env_variable]);
} else {
  sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);
}
console.log('here');
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(function(file) {
    console.log(file);
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
