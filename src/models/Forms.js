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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        preferredLanguage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        howFound: {
            type: DataTypes.STRING,
            allowNull: false
        },
        newsletterSubcription: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    })
}