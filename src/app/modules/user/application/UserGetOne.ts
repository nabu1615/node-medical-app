import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { Result, ok, err } from "neverthrow";
import { ExceptionApplicationMessage } from "./exceptions/exception";

export class UserGetOne {
    constructor(private readonly repository: UserRepository) { }

    async execute(id: string): Promise<Result<User, Error>> {
        const userFound = await this.repository.getOne(id);

        if (!userFound) {
            return err(new Error(ExceptionApplicationMessage.NOT_RESULT));
        }

        return Promise.resolve(ok(userFound));
    }
}