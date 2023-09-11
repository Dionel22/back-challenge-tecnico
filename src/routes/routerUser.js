const { Router } = require("express");
const { posthandleUser, loginHandleUser } = require("../handlers/HandlerUser");

const routerUsers = Router();

routerUsers.post("/", posthandleUser);
routerUsers.post("/login", loginHandleUser);

module.exports = routerUsers;