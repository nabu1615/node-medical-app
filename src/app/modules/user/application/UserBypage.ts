import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { Result, ok, err } from "neverthrow";
import { ExceptionApplicationMessage } from "./exceptions/exception";

export class UserByPage {
    constructor(private readonly repository: UserRepository) { }
    async execute(page: number, limit: number): Promise<Result<User[], Error>> {
        const result = await this.repository.paginate(page, limit);

        if (!result) {
            return err(new Error(ExceptionApplicationMessage.NOT_RESULT));
        }

        return Promise.resolve(ok(result));
    }
}