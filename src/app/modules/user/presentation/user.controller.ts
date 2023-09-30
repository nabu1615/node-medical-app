import { Request, Response } from 'express';
import { UserInfrastructure } from '../infrastructure/UserInfrastructure';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';
import { UserGetOne } from '../application/UserGetOne';
import { UserGetAll } from './../application/UserGetAll';
import { UserCreate } from '../application/UserCreate';
import { UserUpdate } from '../application/UserUpdate';

export class UserController {
    private readonly userCreate: UserCreate;
    private readonly UserGetAll: UserGetAll;
    private readonly UserGetOne: UserGetOne;
    private readonly UserUpdate: UserUpdate;

    constructor() {
        const userRepository: UserRepository = new UserInfrastructure();
        this.userCreate = new UserCreate(userRepository);
        this.UserGetAll = new UserGetAll(userRepository);
        this.UserGetOne = new UserGetOne(userRepository);
        this.UserUpdate = new UserUpdate(userRepository);

        this.list = this.list.bind(this);
        this.getOne = this.getOne.bind(this);
        this.update = this.update.bind(this);
    }
    async list(req: Request, res: Response) {
        const users = await this.UserGetAll.execute();

        return res.json(users);
    }

    async getOne(req: Request, res: Response) {
        const user = await this.UserGetOne.execute(req.params.id);
        return res.json(user)
    }

    async update(req: Request, res: Response) {
        const user = await this.UserUpdate.execute(req.params.id, req.body);
        return res.json(user)
    }

    async insert(req: Request, res: Response) {
        const {
            name,
            lastname,
            email,
            password,
            age,
            street,
            number,
            city,
            country,
            gender,
        } = req.body;

        const user = new User(
            "7f2d459d-1bc0-41cf-9aff-f9f8f2926dd9",
            name,
            lastname,
            email,
            password,
            age,
            street,
            number,
            city,
            country,
            gender
        );

        const userInserted = await this.userCreate.insert(user);

        res.json(userInserted);
    }
}