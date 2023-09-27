import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserGetOne {
    constructor(private readonly repository: UserRepository) { }

    async execute(id: string): Promise<User | null> {
        const userFound = await this.repository.getOne(id);

        return userFound;
    }
}