import Express from "express";

import { loginUser, signup } from "../controller/user.controller.js";

const UserRouter = Express.Router()
UserRouter.post('/user/signup',signup)
UserRouter.post('/user/login',loginUser)


export default UserRouter