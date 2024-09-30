'use strict';

module.exports = (sequelize, DataTypes) => {
    const fueltypeMaster = sequelize.define('fueltypeMaster', {
        fuelcategory: {
            type: DataTypes.STRING,
            allowNull: false // Add validation to prevent null values, if needed
        },
        carbonFootprint: {
            type: DataTypes.INTEGER,
            allowNull: false // Add validation if necessary
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'fueltypeMaster', // Explicitly define the table name
        timestamps: true // If your table does not have createdAt, updatedAt fields
    });

    // Define associations
    fueltypeMaster.associate = function(models) {
        fueltypeMaster.hasMany(models.transcations, {
            foreignKey: 'fuelID', // Foreign key in the Transcations table
            as: 'transcations' // Alias for the association (optional but recommended)
        });
    };

    return fueltypeMaster;
};
