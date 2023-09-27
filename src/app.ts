import express, { Request, Response, Application } from 'express';
import userRouter from "./app/modules/user/presentation/user.routes";

class App {
    application: Application

    constructor() {
        this.application = express();
        this.mountRoutes();
        this.middlewares();
    }

    middlewares() {
        this.application.use(express.json());
        this.application.use(express.urlencoded({ extended: true }));
    }

    mountRoutes() {
        this.application.use("/user", userRouter)
    }
}

export default new App().application
