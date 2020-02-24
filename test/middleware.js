import routes from "./routes";

export const localsMiddleware = (req, res, next) => {

    res.locals.siteName = "project";
    // 여기에 설정한 값이 main.pug에 사용된다

    res.locals.routes = routes;
    // routes파일을 참조하여 header에서 사용한다
    next();
    // 미들웨어 이므로 next가 꼭 들어가야 한다
}