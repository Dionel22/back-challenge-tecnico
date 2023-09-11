require("dotenv").config();
const { sequelize } = require("./src/db");
const server = require("./src/app");

const PORT = process.env.PORT || 3001;


 sequelize.sync({ force: true }).then(() => {
 	server.listen(PORT, () => {
		console.log(`Listen at ${PORT}`);
 	});
 });
