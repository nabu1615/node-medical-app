import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserGetAll {
    constructor(private readonly repository: UserRepository) { }

    async execute(): Promise<User[] | null> {
        const users = await this.repository.getAll();

        return users;
    }
}