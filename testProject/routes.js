// 단순히 URL들이 작성되는 파일

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
// 두개 이상을 혼용해서 사용 -> /users/1

const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
// node에서 :를 확인하면 변하는 값으로 인지

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    user_detail: USER_DETAIL,
    edit_profile: EDIT_PROFILE,
    change_password: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    video_detail: VIDEO_DETAIL,
    edit_video: EDIT_VIDEO,
    delete_video: DELETE_VIDEO
};

export default routes;