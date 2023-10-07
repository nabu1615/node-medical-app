import { Request, Response } from 'express';
import { UserInfrastructure } from '../infrastructure/UserInfrastructure';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';
import { UserGetOne } from '../application/UserGetOne';
import { UserGetAll } from './../application/UserGetAll';
import { UserCreate } from '../application/UserCreate';
import { UserUpdate } from '../application/UserUpdate';
import { UserByPage } from '../application/UserBypage';

import { EncryptService } from "../application/services/Encrypt.service";

import { NameVO } from "../domain/value-objects/name.vo";

import { v4 as uuidv4 } from "uuid";

export class UserController {
    private readonly userCreate: UserCreate;
    private readonly UserGetAll: UserGetAll;
    private readonly UserGetOne: UserGetOne;
    private readonly UserUpdate: UserUpdate;
    private readonly UserByPage: UserByPage;

    constructor() {
        const userRepository: UserRepository = new UserInfrastructure();
        this.userCreate = new UserCreate(userRepository);
        this.UserGetAll = new UserGetAll(userRepository);
        this.UserGetOne = new UserGetOne(userRepository);
        this.UserUpdate = new UserUpdate(userRepository);
        this.UserByPage = new UserByPage(userRepository);

        this.list = this.list.bind(this);
        this.getOne = this.getOne.bind(this);
        this.update = this.update.bind(this);
        this.paginate = this.paginate.bind(this);
    }

    async paginate(req: Request, res: Response) {
        const { page, limit } = req.query;
        const users = await this.UserByPage.execute(parseInt(page as string), parseInt(limit as string));

        return res.json(users);
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
        const { name, lastname, email, password } = req.body;

        const nameResult = NameVO.create(name);
        if (nameResult.isErr()) {
            console.log("Error: ", nameResult.error.message);
            return res.status(411).json({
                message: nameResult.error.message,
                stack: nameResult.error.stack,
            });
        }

        const user = new User({
            id: uuidv4(),
            name: nameResult.value.getValue(),
            lastname,
            email,
            password: await EncryptService.encrypt(password),
            /*age,
            street,
            number,
            city,
            country,
            gender,*/
        });

        const userInserted = await this.userCreate.insert(user);

        if (userInserted.isErr()) {
            return res.status(500).json({
                message: userInserted.error.message,
                stack: userInserted.error.stack,
            });
        }

        res.json(userInserted.value);
    }
}