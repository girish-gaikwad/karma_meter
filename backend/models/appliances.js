'use strict';

module.exports = (sequelize, DataTypes) => {
    const appliancesMaster = sequelize.define('appliancesMaster', {
        name: {
            type: DataTypes.STRING,
            allowNull: false // Add validation if necessary
        },
        carbonFootprint: {
            type: DataTypes.INTEGER,
            allowNull: false // Add validation if necessary
        }
    }, {
        tableName: 'appliancesMaster', // Explicitly define the table name
        timestamps: true // If you don't have createdAt, updatedAt fields, set this to false
    });

    appliancesMaster.associate = function(models) {
        appliancesMaster.hasMany(models.appliancesOwned, {
            foreignKey: 'applianceID', // Define foreign key
            as: 'appliancesOwned' // Alias for the association (optional but recommended)
        });
    };

    return appliancesMaster;
};
