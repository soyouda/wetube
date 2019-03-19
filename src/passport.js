import dotenv from "dotenv";
import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {facebookLoginCallback, githubLoginCallback} from "./controllers/userController";
import routes from "./routes";

const DNS = `http://${process.env.AWS_DNS}:${process.env.PORT}`;

dotenv.config();

passport.use(User.createStrategy());
passport.use(
    new GithubStrategy({
        clientID : process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${DNS}${routes.githubCallback}`
        },
        githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy({
        clientID : process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: `${DNS}${routes.facebookCallback}`,
        profileFields: ['id', 'displayName', 'photos', 'email'],
        scope: ['public_profile', 'email']
    },
        facebookLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());