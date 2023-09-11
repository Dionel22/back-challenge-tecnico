const { Router } = require("express");
const routerUsers = require("./routerUser");
const routerForms = require("./routerForm");

const routes = Router();

routes.use("/user", routerUsers);
routes.use("/form", routerForms);

module.exports = routes;