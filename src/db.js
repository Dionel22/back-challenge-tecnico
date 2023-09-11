require("dotenv").config();
const { Sequelize } = require("sequelize");
const {PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = process.env;

const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`);

module.exports = {
    sequelize,
	...sequelize.models,
}