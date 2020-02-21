import express from "express";
import routes from "../routes"
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
// 추가할 때 export가 되어 있다면 auto import기능이 활성화 된다
// 사각형에 2줄 있는게 auto import 기능을 의미한다

export default globalRouter;