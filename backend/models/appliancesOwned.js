'use strict';

module.exports = (sequelize, DataTypes) => {
    const appliancesOwned = sequelize.define('appliancesOwned', {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // The table the foreign key points to
                key: 'id'
            }
        },
        applianceID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ApplianceMaster', // The table the foreign key points to
                key: 'id'
            }
        }
    }, {
        tableName: 'appliancesOwned', // Explicitly set the table name
        timestamps: true // Disable timestamps if not using `createdAt`, `updatedAt`
    });

    // Define associations
    appliancesOwned.associate = function(models) {
        appliancesOwned.belongsTo(models.users, { foreignKey: 'userID', as: 'user' });
        appliancesOwned.belongsTo(models.appliancesMaster, { foreignKey: 'applianceID', as: 'appliance' });
    };
    return appliancesOwned;
};
