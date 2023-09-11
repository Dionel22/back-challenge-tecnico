require("dotenv").config();
const { Sequelize } = require("sequelize");
const FormModel = require("./models/Forms")
const UserModel = require("./models/User")

const {PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = process.env;

const sequelize = new Sequelize(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,{
    logging: false
});

FormModel(sequelize);
UserModel(sequelize);

//relacion entre tabla
const { User, Form } = sequelize.models;

User.hasMany(Form);
Form.belongsTo(User);

module.exports = {
    sequelize,
	...sequelize.models,
}