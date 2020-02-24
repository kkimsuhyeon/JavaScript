import express from "express";
import routes from "../routes"
import controller from "../controllers/mainController"

const mainRouter = express.Router();

mainRouter.get(routes.home, controller.home);
mainRouter.get(routes.login, controller.login);
mainRouter.get(routes.photos, controller.photos);
mainRouter.get(routes.profile, controller.profile);

export default mainRouter;