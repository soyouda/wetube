import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {facebookLoginCallback, githubLoginCallback} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());
passport.use(
    new GithubStrategy({
        clientID : process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `http://localhost:4000${routes.githubCallback}`
        },
        githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy({
        clientID : process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: `http://localhost:4000${routes.facebookCallback}`,
        profileFields: ['id', 'displayName', 'photos', 'email'],
        scope: ['public_profile', 'email']
    },
        facebookLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());