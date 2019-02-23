import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2) {
        res.status("400");
        res.render("join", { pageTitle: "postJoin"})
    }else{
        // To Do : Register User
        // To Do : Log User In
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => {
    console.log(req.body);
    res.render("login", { pageTitle: "Log In" });
};
export const postLogin = (req, res) => {
    console.log(req.body);
    res.redirect(routes.home);
};
export const logout = (req, res) => {
    // To Do : Process Logout
    res.redirect(routes.home);
};
export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });