import express from "express";
import routes from "../routes";
import {postRegisterView, registerView} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;