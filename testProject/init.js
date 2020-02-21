import app from "./app";
// 서버를 위한 코드가 들어가게 된다
// app.js에서 만든 app를 init에 가지고 와서 사용하게 된다
// 즉 app.js를 init.js에서 사용하고 싶음

const PORT = 4000;

const handleListening = () =>
    console.log(`ttp://localhost:${PORT}`);

app.listen(PORT, handleListening);