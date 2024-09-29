'use strict';

module.exports = (sequelize, DataTypes) => {
    const transcations = sequelize.define('transcations', {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Ensure this model exists with the correct naming
                key: 'id'
            }
        },
        foodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'foodtypeMaster', // Use the correct table/model name
                key: 'id'
            }
        },
        fuelID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'fueltypeMaster', // Use the correct table/model name
                key: 'id'
            }
        },
        vehicalID: {
            type: DataTypes.INTEGER, // Changed `vehicalsID` to `vehicalID`
            allowNull: false,
            references: {
                model: 'vehicalsMaster', // Ensure consistency with your vehicle model
                key: 'id'
            }
        },
        karmaScore: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vehicalCount: { // Changed to `vehicalCount` for consistency with `vehicalID`
            type: DataTypes.INTEGER,
            allowNull: false
        },
        electricityUnit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        AvgKilometers: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'transcations', // Explicit table name to avoid pluralization
        timestamps: true // Disable timestamps if not needed
    });

    // Associations
    transcations.associate = function(models) {
        transcations.belongsTo(models.users, { foreignKey: 'userID', as: 'user' });
        transcations.belongsTo(models.foodtypeMaster, { foreignKey: 'foodID', as: 'foodtype' });
        transcations.belongsTo(models.fueltypeMaster, { foreignKey: 'fuelID', as: 'fueltype' });
        transcations.belongsTo(models.vehicalMaster, { foreignKey: 'vehicalID', as: 'vehical' });
    };

    return transcations;
};
