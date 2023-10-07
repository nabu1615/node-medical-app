import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { Result, ok, err } from "neverthrow";
import { ExceptionApplicationMessage } from "./exceptions/exception";

export class UserGetAll {
    constructor(private readonly repository: UserRepository) { }

    async execute(): Promise<Result<User[], Error>> {
        const users = await this.repository.getAll();

        if (!users) {
            return err(new Error(ExceptionApplicationMessage.NOT_RESULT));
        }

        return Promise.resolve(ok(users));
    }
}
