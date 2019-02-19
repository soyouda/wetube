import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 44450;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hi from HOME!!');

const handleProfile = (req, res) => res.send('You are my profile!');

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
};

//middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);
app.get('/profile', handleProfile);


app.listen(PORT, handleListening);