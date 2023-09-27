import { Router, Request, Response } from 'express';
import { UserController } from './user.controller';

class UserRoutes {
    readonly router: Router;
    private readonly userController: UserController

    constructor() {
        this.router = Router();
        this.mountRoutes();
        this.userController = new UserController();
    }

    mountRoutes() {
        // this.router.get('/', (req: Request, res: Response) => {
        //     this.userController.list(req, res);
        // })

        this.router.get('/all', (req: Request, res: Response) => {
            this.userController.list(req, res);
        })

        this.router.get('/:id', (req: Request, res: Response) => {
            this.userController.getOne(req, res);
        })

        this.router.post('/', (req: Request, res: Response) => {
            this.userController.insert(req, res);
        })
    }
}

export default new UserRoutes().router