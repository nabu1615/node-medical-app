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

        // Get All
        this.router.get('/all', (req: Request, res: Response) => {
            this.userController.list(req, res);
        })

        // Get One
        this.router.get('/:id', (req: Request, res: Response) => {
            this.userController.getOne(req, res);
        })

        // Update One
        this.router.post('/:id', (req: Request, res: Response) => {
            this.userController.update(req, res);
        })

        // Create One
        this.router.post('/', (req: Request, res: Response) => {
            this.userController.insert(req, res);
        })
    }
}

export default new UserRoutes().router