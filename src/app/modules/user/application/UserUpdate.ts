import { Address, GENDER, User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { Result, ok, err } from "neverthrow";
import { ExceptionApplicationMessage } from "./exceptions/exception";


export interface UserUpdate {
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    age?: number;
    address?: Address;
    gender?: GENDER;
}

export class UserUpdate {
    constructor(private readonly repository: UserRepository) { }
    async execute(id: string, newUserInfo: UserUpdate): Promise<Result<User, Error>> {
        const userFound = await this.repository.update(id, newUserInfo);

        if (!userFound) {
            return err(new Error(ExceptionApplicationMessage.NOT_RESULT));
        }

        return Promise.resolve(ok(userFound));
    }
}