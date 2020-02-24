import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middleware";

const app = express();
app.set("view engine", "pug"); // express 내에 view engine을 바꾼다
// app.set("view"); HTML 파일의 경로를 지정할 수 있다 >> 기본은 views로 설정되어 있음

app.use(cookieParser()); // cookie를 사용하기 위한
app.use(bodyParser.json()); // 사용자가 웹사이트로 전달하는 정보들을 검사
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 미들웨어 좀더 안전하게 사용하기
app.use(morgan("dev")); // application에서 발생하는 일을 logging 한다

app.use(localsMiddleware)
    // locals를 통해 global 적으로 사용하는 기능

app.use(routes.home, globalRouter) // "/"
app.use(routes.users, userRouter); // "/users/"
app.use(routes.videos, videoRouter); // "/videos/"

export default app;