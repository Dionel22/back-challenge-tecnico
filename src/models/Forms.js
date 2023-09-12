const { DataTypes } = require("sequelize")

module.exports = FormModel  = (sequelise) => {
    sequelise.define("Form", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATEONLY
        },
        preferredLanguage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        howFound: {
            type: DataTypes.STRING,
            allowNull: false
        },
        newsletterSubscription: {
            type: DataTypes.BOOLEAN,
        },
    })
}