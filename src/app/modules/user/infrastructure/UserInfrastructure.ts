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

    update(id: string, newUser: UserUpdate): Promise<User | null> {
        const usersUpdated = UserMemory.users.map(user => {
            if (user.id === id) {
                user = { ...user, ...newUser }
            }

            return user
        })

        UserMemory.users = usersUpdated;

        return this.getOne(id);
    }

    getOne(id: string): Promise<User | null> {
        const userFound = UserMemory.users.find(user => user.id === id);
        return userFound ? Promise.resolve(userFound) : Promise.resolve(null);
    }

    getByEmail(email: string): Promise<User | null> {
        const userFound = UserMemory.users.find(user => user.email === email);
        return userFound ? Promise.resolve(userFound) : Promise.resolve(null);
    }

    getAll(): Promise<User[]> {
        return Promise.resolve(UserMemory.users);
    }
}