'use strict';

module.exports = (sequelize, DataTypes) => {
    const vehicalMaster = sequelize.define('vehicalMaster', {
        vehicalCategory: {
            type: DataTypes.STRING,
            allowNull: false // Prevent null values if required
        },
        carbonFootprint: {
            type: DataTypes.INTEGER,
            allowNull: false // Add validation if required
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'vehicalMaster', // Define the exact table name
        timestamps: true // Disable timestamps if not needed (remove if you have createdAt, updatedAt fields)
    });

    // Associations
    vehicalMaster.associate = function(models) {
        vehicalMaster.hasMany(models.transcations, {
            foreignKey: 'vehicalID', // Foreign key in the `Transcations` model
            as: 'transcations' // Alias for the association (optional but recommended)
        });
    };

    return vehicalMaster;
};
