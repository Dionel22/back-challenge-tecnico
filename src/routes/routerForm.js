const { Router } = require("express");
const { getHandleForm, putHandleForm, postHandleForm, idHandleForm } = require("../handlers/HandlerForm");

const routerForms = Router();

routerForms.get("/", getHandleForm);
routerForms.get("/:id", idHandleForm);
routerForms.put("/", putHandleForm);
routerForms.post("/", postHandleForm);

module.exports = routerForms;