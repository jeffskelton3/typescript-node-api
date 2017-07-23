import * as Sequelize from 'sequelize';

export interface UsersAttributes {
    id?: number;
    name?: string;
}

export interface UsersInstance extends Sequelize.Instance<UsersAttributes> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
}

export default function defineUsers(sequelize: Sequelize.Sequelize, DataTypes) {

    const dataTypes = {
        name: DataTypes.STRING
    };

    const methods = {
        classMethods: {
            associate: (models) => {
                // model associations go here
            }
        }
    };

    return sequelize.define('Users', dataTypes, methods);
}