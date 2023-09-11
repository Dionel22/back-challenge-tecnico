const { Router } = require("express");
const { getHandleForm, putHandleForm, postHandleForm } = require("../handlers/HandlerForm");

const routerForms = Router();

routerForms.get("/", getHandleForm);
routerForms.put("/", putHandleForm);
routerForms.post("/", postHandleForm);

module.exports = routerForms;