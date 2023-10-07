import { Address, GENDER, User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

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
    async execute(id: string, newUserInfo: UserUpdate): Promise<User | null> {
        const userFound = await this.repository.update(id, newUserInfo);

        return userFound;
    }
}