const { Router } = require("express");

const { route } = require("express/lib/router");
const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;