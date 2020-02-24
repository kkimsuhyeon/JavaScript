export const home = (req, res) => res.render("home", { pageTitle: "Home" });
// 파일명만 적어주면 자동으로 home.pug를 찾아서 보여주게 된다
// render에서 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체를 전달한다
// 원하는 페이지만 데이터를 전달 할 수 있다

export const search = (req, res) => res.render("search", { pageTitle: "search" });
// 각각 페이지마다 같은 변수에 다른 정보를 전달, 페이지마다 다르게 보이게 한다 
export const videos = (req, res) => res.render("videos", { pageTitle: "videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "videoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "deleteVideo" });