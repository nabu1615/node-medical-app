import { err, ok, Result } from "neverthrow";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { ExceptionApplicationMessage } from "./exceptions/exception";

export class UserCreate {
    constructor(private readonly repository: UserRepository) { }



    async insert(user: User): Promise<Result<User, Error>> {
        const userExists = await this.repository.getByEmail(
            user.properties().email
        );

        if (userExists) {
            return err(new Error(ExceptionApplicationMessage.USER_ALREADY_EXISTS));
        }

        const userInserted = await this.repository.save(user);

        return ok(userInserted);
    }
}