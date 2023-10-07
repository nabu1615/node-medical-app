import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserByPage {
    constructor(private readonly repository: UserRepository) { }
    async execute(page: number, limit: number): Promise<User[] | null> {
        const result = await this.repository.paginate(page, limit);

        return result;
    }
}