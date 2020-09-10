const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Member extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

Member.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        years_at_address: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        family_size: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        hooks: {
            async beforeCreate(newMemberData) {
                newMemberData.password = await bcrypt.hash(newMemberData.password, 10);
                return newMemberData;
            },
            async beforeUpdate(updatedMemberData) {
                updatedMemberData.password = await bcrypt.hash(updatedMemberData.password, 10);
                return updatedMemberData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'member'
    }
);

module.exports = Member;