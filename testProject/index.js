import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("hello");
const handleProfile = (req, res) => res.send("Profile");
const handleListening = () =>
    console.log(`http://localhost:${PORT}`);


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 현재 json, urlencoded(form에서 들어오는 정보)를 처리할 수 있도록 설정햇다
// bodyParser를 통해서 Json, urlencoded, text등을 처리할 수 있다
app.use(helmet());
app.use(morgan("dev"));


app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);