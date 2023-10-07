import { UserUpdate } from '../application/UserUpdate';
import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { UserMemory } from './UserMemory';

export class UserInfrastructure implements UserRepository {
    constructor() { }
    save(user: User): Promise<User> {
        UserMemory.users.push(user);
        return Promise.resolve(user);
    }

    paginate(page: number, limit: number): Promise<User[]> {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const result = UserMemory.users.slice(startIndex, endIndex);

        return Promise.resolve(result);
    }

    update(id: string, newUser: UserUpdate): Promise<User | null> {
        let userFound = UserMemory.users.find(
            (user: User) => user.properties().id === id
        )

        if (!userFound) {
            return Promise.resolve(null);
        }

        userFound.update(newUser);


        console.log(UserMemory.users)

        return this.getOne(id);
    }

    getOne(id: string): Promise<User | null> {
        const userFound = UserMemory.users.find(
            (user: User) => user.properties().id === id
        );

        return userFound ? Promise.resolve(userFound) : Promise.resolve(null);
    }

    getByEmail(email: string): Promise<User | null> {
        const userFound = UserMemory.users.find((user: User) => user.properties().email === email);
        return userFound ? Promise.resolve(userFound) : Promise.resolve(null);
    }

    getAll(): Promise<User[]> {
        return Promise.resolve(UserMemory.users);
    }
}