import routes from "./routes";

export const localsMiddleware = (req, res, next) => {

        res.locals.siteName = "project";
        // 여기에 설정한 값이 main.pug에 사용된다

        res.locals.routes = routes;
        // routes파일을 참조하여 header에서 사용한다
        next();
        // 미들웨어 이므로 next가 꼭 들어가야 한다
    }
    // 전역적으로 저장하는 방법
    // locals에 정보를 저장하여 pug에서 사용할 수 있다
    // 저장한 데이터는 템플릿, 뷰 모든곳에서 사용 가능