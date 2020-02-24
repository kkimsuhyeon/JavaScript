import express from "express";
import routes from "./routes";
import mainRouter from "./routers/mainRouter";
import { localsMiddleware } from "./middleware";

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(localsMiddleware);

app.use(routes.home, mainRouter);

export default app;