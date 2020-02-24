const home = (req, res) => res.render("home", { siteName: "home" });
const login = (req, res) => res.render("login", { siteName: "login" });
const photos = (req, res) => res.render("photos", { siteName: "photos" });
const profile = (req, res) => res.render("profile", { siteName: "profile" });

const controller = {
    home,
    login,
    photos,
    profile
}

export default controller