const { Router } = require("express");
const routerForms = require("./routerForm");

const routes = Router();

routes.use("/form", routerForms);

module.exports = routes;