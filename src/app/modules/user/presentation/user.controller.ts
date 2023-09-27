import { Request, Response } from 'express';
import { UserInfrastructure } from '../infrastructure/UserInfrastructure';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';
import { UserGetOne } from '../application/UserGetOne';
import { UserGetAll } from './../application/UserGetAll';
import { UserCreate } from '../application/UserCreate';

export class UserController {
    private readonly userCreate: UserCreate;
    private readonly UserGetAll: UserGetAll;
    private readonly UserGetOne: UserGetOne;

    constructor() {
        const userRepository: UserRepository = new UserInfrastructure();
        this.userCreate = new UserCreate(userRepository);
        this.UserGetAll = new UserGetAll(userRepository);
        this.UserGetOne = new UserGetOne(userRepository);

        this.list = this.list.bind(this);
        this.getOne = this.getOne.bind(this);
    }
    async list(req: Request, res: Response) {
        const users = await this.UserGetAll.execute();

        return res.json(users);
    }

    async getOne(req: Request, res: Response) {
        const user = await this.UserGetOne.execute(req.params.id);
        return res.json(user)
    }

    async insert(req: Request, res: Response) {
        console.log(req.body);
        const user = new User(
            "faa1b3dd-d26e-4566-85f4-873492c54abb",
            "Javier",
            "Vargas",
            "javier.vargas2@email.com",
            "12345",
            34,
            "calle azul",
            345,
            "LIma",
            "Perú",
            "Hombre"
        );
        const userInserted = await this.userCreate.insert(user)


        return res.json(userInserted);
    }
}