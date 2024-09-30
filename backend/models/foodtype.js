'use strict';

module.exports = (sequelize, DataTypes) => {
    const foodtypeMaster = sequelize.define('foodtypeMaster', {
        foodcategory: {
            type: DataTypes.STRING,
            allowNull: false // Add validation to prevent null values if needed
        },
        carbonFootprint: {
            type: DataTypes.INTEGER,
            allowNull: false // Add validation if necessary
        },
        Image: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'foodtypeMaster', // Define the exact table name
        timestamps: true // Disable timestamps if not needed
    });

    // Define associations
    foodtypeMaster.associate = function(models) {
        foodtypeMaster.hasMany(models.transcations, {
            foreignKey: 'foodID', // Foreign key in the Transcations table
            as: 'transcations' // Alias for the association (optional but recommended)
        });
    };

    return foodtypeMaster;
};
