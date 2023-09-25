import express, { Request, Response, Application } from 'express';

class App {
    application: Application

    constructor() {
        this.application = express();
        this.mountRoutes();
    }

    mountRoutes() {
        this.application.get("/", (req: Request, res: Response) => {
            res.type("text/html").send("<h1>Hello World</h1>");
        })
    }
}

export default new App().application
