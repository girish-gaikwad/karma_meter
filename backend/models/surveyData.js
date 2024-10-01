'use strict';

module.exports = (sequelize, DataTypes) => {
    const surveyData = sequelize.define('surveyData', {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Referencing the 'users' model
                key: 'id'
            }
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true // Optional validation to ensure it's a valid email format
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        countOfPlants: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        beHalfOfName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'surveyData', // Explicit table name to avoid pluralization
        timestamps: true // Disable timestamps if not using `createdAt`, `updatedAt`
    });

    // Define associations
    surveyData.associate = function(models) {
        surveyData.belongsTo(models.users, { foreignKey: 'userID', as: 'user' });
    };

    return surveyData;
};
