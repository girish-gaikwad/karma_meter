'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});


    users.associate = function(models) {
    users.hasMany(models.surveyData, {foreignKey: 'userID'})
    users.hasMany(models.appliancesOwned, {foreignKey: 'userID'})
    };
    return users; 
}