require("dotenv").config();
const { Sequelize } = require("sequelize");
const FormModel = require("./models/Forms")

const {PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = process.env;

const sequelize = new Sequelize(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,{
    logging: false
});

FormModel(sequelize);

module.exports = {
    sequelize,
	...sequelize.models,
}